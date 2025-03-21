// src/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
	return (
		<header className="Parent text-2lg font-bold p-2">
			<nav>
				<ul className="flex flex-row justify-around text-slate-900 ">
					<li>
						<Link to="/">Home</Link>
					</li>{" "}
					{/* Link to Home page */}
					<li>
						<Link to="/about">About</Link>
					</li>{" "}
					{/* Link to About page */}
					<li>
						<Link to="/stack">Stack</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
