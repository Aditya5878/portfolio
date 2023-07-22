
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.png";
import "./Navbar.css";

function Navbar() {                                   // Navbar is a function which is used to display the navbar
	const navRef = useRef();                          // navRef is used to display the navbar

	const showNavbar = () => {                          // showNavbar is a function which is used to display the navbar
		navRef.current.classList.toggle(               // toggle is used to display the navbar when the toggle button is clicked and hide the navbar when the toggle button is clicked again
			"responsive_nav"                            // responsive_nav is used to display the navbar when the toggle button is clicked and hide the navbar when the toggle button is clicked again
		);
	};

	return (
		<header>                    {/* header is used to display the navbar */}
			<div className="header-wrapper">                   {/* header-wrapper is used to display the header */}
				<a className="navbar-brand" href="#">
					<img className="logo" src={logo} alt="logo" style={{ borderRadius: "50px" }}></img></a>          {/* logo is used to display the logo in the navbar */}
				<nav className="nav-items" ref={navRef}>                        {/* nav-items is used to display the nav-items in the navbar */}
					<a href="#">   Home </a>
					<a href="#about">About Me</a>
					<a href="#Skills">Skills</a>
					<a href="#project">Project</a>
					<a href="#contact">Contact</a>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>                            {/* nav-close-btn is used to display the nav-close-btn in the navbar  */}
						<FaTimes />
					</button>
				</nav>
			</div>
			<button
				className="nav-btn"
				onClick={showNavbar}>                   {/* nav-btn is used to display the nav-btn in the navbar */}
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
