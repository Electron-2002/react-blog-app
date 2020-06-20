import React from "react";
import "./Hero.css";
import Card from "../UI/Card/Card";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

function Hero() {
	return (
		<div>
			<Card>
				<div style={{ padding: "50px 0" }}>
					<Logo />
				</div>
				<Navbar />
			</Card>
		</div>
	);
}

export default Hero;
