import React from "react";
import SendSVG from "../../assets/send.svg";
function Footer({ message, setMessage, sendMessage }) {
	return (
		<>
			<div className="w-full h-24 sm:h-16 sticky bottom-0 flex justify-between items-center bg-white border-t-2">
				<textarea
					value={message}
					className="w-4/5 h-12 mx-2 p-2 outline-none textScroller resize-none"
					placeholder="Type your message here"
					onChange={(e) => setMessage(e.target.value)}
					onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
				/>
				<img
					className="w-6 h-6 mr-4 sm:w-8 sm:h-8 sm:mr-8 cursor-pointer"
					src={SendSVG}
					alt=""
					onClick={(e) => sendMessage(e)}
				/>
			</div>
		</>
	);
}

export default Footer;
