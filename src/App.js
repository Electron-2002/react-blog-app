import React from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./containers/Contact Us/ContactUs";
import Post from "./containers/Post/Post";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Hero />

				<Route path="/" component={Home} exact />
				<Route path="/contact-us" component={ContactUs} exact />
				<Route path="/posts/:slug" component={Post} exact />
			</div>
		</Router>
	);
}

export default App;
