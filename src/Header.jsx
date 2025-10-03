// src/Header.js
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import PillNav from "./Components/common/PillNav";
import logo from "./Assets/logo.svg";
const Header = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const getLinkClass = (path) =>
		location.pathname === path
			? "bg-slate-900 text-red-50 w-1/4"
			: "text-slate-950";

	const pillNav = (
		<>
			<PillNav
				// eslint-disable-next-line no-undef
				logo={logo}
				logoAlt="Company Logo"
				items={[
					{ label: "Home", href: "/" },
					{ label: "About", href: "/about" },
					{ label: "Academic Projects", href: "/academic-projects" },
					{ label: "Mini Projects", href: "/mini-projects" },
				]}
				activeHref={currentPath}
				className="custom-nav"
				ease="power2.easeOut"
				baseColor="#000000"
				pillColor="#ffffff"
				hoveredPillTextColor="#ffffff"
				pillTextColor="#000000"
			/>
		</>
	);

	// eslint-disable-next-line no-unused-vars
	const origNav = (
		<>
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
					<li className={getLinkClass("/academic-projects")}>
						<Link to="/academic-projects">Academic Projects</Link>
					</li>
					<li className={getLinkClass("/mini-projects")}>
						<Link to="/mini-projects">Mini Projects</Link>
					</li>
				</ul>
			</nav>
		</>
	);

	return (
		<header className="Parent text-2lg font-bold p-2 m-10 flex flex-row justify-center">
			{pillNav}
		</header>
	);
};

export default Header;
