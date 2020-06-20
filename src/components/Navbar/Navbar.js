import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "../../assets/icons/search.png";
import { NavLink } from "react-router-dom";

function Navbar() {
	const [search, setSearch] = useState(false);

	const submitSearch = (event) => {
		event.preventDefault();
	};

	const openSearch = () => {
		setSearch(true);
	};

	return (
		<div className="navbar">
			<ul className="navbarMenu">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about-us">About Us</NavLink>
				</li>
				<li>
					<NavLink to="/posts">Posts</NavLink>
				</li>
				<li>
					<NavLink to="/contact-us">Contact Us</NavLink>
				</li>
			</ul>
			<div className="search">
				<form onSubmit={submitSearch}>
					<input
						type="text"
						placeholder="Search"
						className={
							search ? "searchInput active" : "searchInput"
						}
					/>
					<img
						alt="Search"
						src={SearchIcon}
						className="searchIcon"
						onClick={openSearch}
					/>
				</form>
			</div>
		</div>
	);
}

export default Navbar;
