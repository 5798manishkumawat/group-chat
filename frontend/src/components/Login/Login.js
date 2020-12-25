import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<>
			<div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="w-full flex flex-col items-center mt-24">
					<p className="w-full sm:w-1/3 text-4xl mb-4 text-indigo-400 flex justify-center text-center">
						Hi There!!
						<br /> Let's join a live chat...
					</p>
					<div className="w-11/12 sm:w-1/3 h-64 flex flex-col justify-evenly items-center rounded-xl border VCContainer bg-white">
						<input
							onChange={(e) => setName(e.target.value)}
							placeholder="Write Your Name Here..."
							className="w-4/5 sm:w-2/3 pl-2 bg-green-100 h-10 rounded-r-lg border-l-2 border-blue-400 focus:outline-none"
							type="text"
						/>
						<input
							onChange={(e) => setRoom(e.target.value)}
							placeholder="Write Room Name Here..."
							className="w-4/5 sm:w-2/3 pl-2 bg-green-100 h-10 rounded-r-lg border-l-2 border-blue-400 focus:outline-none"
							type="text"
						/>
						<Link
							onClick={(e) => (!name || !room ? e.preventDefault() : null)}
							to={`/chat?name=${name}&room=${room}`}
							className="w-1/3 sm:w-1/5"
						>
							<button className="w-full h-8 flex justify-center items-center text-white bg-blue-400 rounded-lg focus:outline-none">
								Join
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="opacity-50 fixed inset-0 z-40 bg-green-200"></div>
		</>
	);
}

export default Login;
