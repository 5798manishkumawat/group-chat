var app = require("express")();
var cors = require("cors");
const router = require("./router");
var server = require("http").createServer(app);

const corsOptions = {
	origin: "https://joinchat.netlify.app/",
	credentials: true,
	allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));
app.use(require("express").json());
app.use(require("express").urlencoded({ extended: true }));
app.use(router);

var io = require("socket.io")(server, {
	cors: {
		origin: "https://joinchat.netlify.app/",
		credentials: true,
		allowedHeaders: "Content-Type",
	},
});

const { addUser, removeUser, getUser } = require("./user");

io.on("connection", (socket) => {
	socket.on("join", ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) {
			callback(error);
		}
		socket.emit("message", {
			user: "admin",
			text: `Hi ${user?.name}, welcome to the ${user?.room} chat!`,
		});
		socket.broadcast
			.to(user?.room)
			.emit("message", { user: "admin", text: `${user?.name}, has joined!` });
		socket.join(user?.room);
		callback();
	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);
		console.log("---->", user);
		io.in(user[0]?.room).emit("message", {
			user: user[0]?.name,
			text: message,
		});
		callback();
	});

	socket.on("disconn", () => {
		const user = removeUser(socket.id);
		if (user) {
			io.to(user?.room).emit("message", {
				user: "admin",
				text: `${user?.name} has left!`,
			});
		}
	});
});

server.listen(process.env.PORT || 8080, () => {
	console.log("server is runnning...");
});
