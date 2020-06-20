import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import Card from "../../components/UI/Card/Card";
import blogPost from "../../data/blog.json";

function Sidebar() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const listOfPosts = blogPost.data;

		setPosts(listOfPosts);
	}, [posts]);

	return (
		<div className="sidebarContainer">
			<Card
				style={{
					marginBottom: "20px",
					padding: "20px",
					boxSizing: "border-box"
				}}
			>
				<div className="cardHeader">
					<span>About-Us</span>
				</div>
				<div className="profileImageContainer">
					<img
						alt="About Us Image"
						src="https://qph.fs.quoracdn.net/main-thumb-484896757-200-abhthgrvciddjauafzrsgxatvcopqrtg.jpeg"
					/>
				</div>
				<div className="cardBody">
					<p className="personalBio">
						My name is Satej Bidvai. I am a software development
						enthusiast keen on learning new things :)
					</p>
				</div>
			</Card>

			<Card
				style={{
					marginBottom: "20px",
					padding: "20px",
					boxSizing: "border-box"
				}}
			>
				<div className="cardHeader">
					<span>Social Network</span>
				</div>
			</Card>

			<Card
				style={{
					marginBottom: "20px",
					padding: "20px",
					boxSizing: "border-box"
				}}
			>
				<div className="cardHeader">
					<span>Recent Posts</span>
				</div>

				<div className="recentPosts">
					{posts.map((post) => {
						return (
							<NavLink to={`/posts/${post.slug}`} key={post.id}>
								<div className="recentPost">
									<h3>{post.blogTitle}</h3>
									<span>{post.postedOn}</span>
								</div>
							</NavLink>
						);
					})}
				</div>
			</Card>
		</div>
	);
}

export default Sidebar;
