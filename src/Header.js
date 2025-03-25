// src/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
	const location = useLocation();
	const getLinkClass = (path) =>
		location.pathname === path
			? "bg-slate-900 text-red-50 w-1/4"
			: "text-slate-950";
	return (
		<header className="Parent text-2lg font-bold p-2">
			<nav className="">
				<ul className="flex flex-row mx-auto my-auto justify-between">
					<li className={getLinkClass("/")}>
						<Link to="/">Home</Link>
					</li>{" "}
					<li className={getLinkClass("/about")}>
						<Link to="/about">About</Link>
					</li>
					{/* <li className={getLinkClass("/stack")}>
						<Link to="/stack">Stack</Link>
					</li> */}
					<li className={getLinkClass("/projects")}>
						<Link to="/projects">Projects</Link>
					</li>
					<li className={getLinkClass("/mini-projects")}>
						<Link to="/mini-projects">Mini Projects</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
