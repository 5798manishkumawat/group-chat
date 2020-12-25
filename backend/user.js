let users = [];

const addUser = ({ id, name, room }) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const exixtUser = users.find(
		(user) => user.room === room && user.name === name
	);

	if (exixtUser) {
		return { error: "Username is already taken in this room!!" };
	}

	const user = { id, name, room };
	users.push(user);

	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);
	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = (id) => users.filter((user) => user.id === id);


module.exports = { addUser, removeUser, getUser};
