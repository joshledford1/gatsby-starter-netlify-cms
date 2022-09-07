import React, { useState } from "react";
import { Link } from "gatsby";
//import github from "../img/github-icon.svg";
//import logo from "../img/logo.svg";
import logoDark from "../img/svg/logoDark.svg";
import logoLight from "../img/svg/logoLight.svg";
import closeIcon from "../img/svg/closeIcon.svg";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="wrapper flex justify-between py-4 lg:py-8 flex-row items-center">
			<Link to="/">
				<img src={logoDark} alt="Social Outlier" />
			</Link>
			<nav
				className={`absolute top-0 left-full h-full w-full flex flex-col z-10 bg-slate-800 gap-8 transition-all p-4 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 ${
					isActive && "left-0"
				}`}
			>
				<div className="flex flex-row justify-between md:hidden">
					<img src={logoLight} alt="" />
					<button
						className="leading-none text-lg text-white"
						onClick={() => setIsActive(false)}
					>
						<img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
					</button>
				</div>
				<div className="flex flex-col gap-4 md:flex-row md:items-center">
					<Link
						to="#services"
						className="text-white hover:text-white hover:underline text-xl md:text-base"
					>
						Services
					</Link>
					<Link
						to="#careers"
						className="text-white hover:text-white hover:underline text-xl md:text-base"
					>
						Careers
					</Link>
					<Link
						to="#contact"
						className="py-2 px-8 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all"
					>
						Contact Us
					</Link>
				</div>
			</nav>
			<button
				id="navbar-toggle"
				type="button"
				aria-controls="navbar-default"
				aria-expanded="false"
				className="md:hidden"
				onClick={() => setIsActive(!isActive)}
			>
				<span className="sr-only">Open main menu</span>
				<svg
					className="w-6 h-6 fill-black"
					aria-hidden="true"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
		</div>
	);
};

export default Navbar;
