import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";

import queryString from "query-string";
import io from "socket.io-client";

let socket;

function LiveChat({ location }) {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const EndPoint = "http://localhost:8080";
	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io("https://powerful-mountain-72313.herokuapp.com/", {
			transport: ["websocket"],
		});

		setName(name);
		setRoom(room);

		socket.emit("join", { name, room }, () => {});
		return () => {
			socket.emit("disconn", () => setMessage(""));
			socket.off();
		};
	}, [location.search, EndPoint]);

	useEffect(() => {
		socket.on("message", (msg) => {
			setMessages([...messages, msg]);
		});
		return () => {
			socket.off();
		};
	}, [messages]);

	const sendMessage = (e) => {
		e.preventDefault();
		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center  sm:py-6 bg-gradient-to-r from-yellow-100 via-green-500 to-pink-100 ...">
			<div className="w-full h-full sm:w-2/5 flex flex-col items-center">
				<Header room={room} />
				<Messages messages={messages} name={name} />
				<Footer
					setMessage={setMessage}
					message={message}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
}

export default LiveChat;
