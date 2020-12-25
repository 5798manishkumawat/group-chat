import React from "react";
import "./Textarea.css";

function Messages({ messages, name }) {
	const trimmedName = name.trim().toLowerCase();
	return (
		<>
				<div className="w-full h-full flex flex-col textScroller  overflow-auto sm:px-2 py-4 bg-gradient-to-r from-yellow-100 via-white to-pink-100 ...">
					{messages.map((message, index) => {
						return message.user === trimmedName ? (
							<>
								<div
									key={index}
									className="w-full flex justify-end  text-white my-1"
								>
									<div className="w-3/4 flex justify-end">
										<p className="max-w-max flex justify-end items-center h-full p-2 bg-blue-400 rounded-l-lg  text-sm font-semibold">
											{message.text}
										</p>
									</div>
								</div>
							</>
						) : (
							<>
								<div key={index} className="w-3/4 flex  text-white my-1">
									<div className="max-w-max h-full bg-green-400 p-2 rounded-r-lg">
										<p className="text-xxs uppercase font-bold text-black opacity-75 text-cursive">
											{message.user}
										</p>
										<p className="flex justify-start items-center text-sm font-semibold">
											{message.text}
										</p>
									</div>
								</div>
							</>
						);
					})}
				</div>
		</>
	);
}

export default Messages;
