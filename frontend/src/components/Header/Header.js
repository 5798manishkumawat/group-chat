import React from "react";
import { Link } from "react-router-dom";
import CrossSVG from "../../assets/cross-sign.svg";
function Header({ room }) {
	return (
		<>
			<div className="w-full h-24 sticky top-0 sm:h-16 px-4 flex justify-between items-center bg-indigo-100 sm:rounded-t-lg">
				<div className="w-2/3 sm:w-1/3 flex justify-start items-center">
					<p className="w-4 h-4 bg-green-500 rounded-full"></p>
					<p className="text-lg font-bold ml-2 opacity-75">{room}</p>
				</div>
				<Link to="/">
					<img className="w-6 h-6 cursor-pointer" src={CrossSVG} alt="" />
				</Link>
			</div>
		</>
	);
}

export default Header;
