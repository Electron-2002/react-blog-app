import React, { useEffect, useState } from "react";
import "./BlogPost.css";

import Card from "../../components/UI/Card/Card";
import blogPost from "../../data/blog.json";

function BlogPost(props) {
	const [post, setPost] = useState({});
	const [postId, setPostId] = useState("");

	useEffect(() => {
		const currPostId = props.match.params.slug;
		const currPost = blogPost.data.find((post) => post.slug === currPostId);

		setPost(currPost);
		setPostId(currPostId);
	}, [post, props.match.params.postId]);

	if (post.blogImage == null) return null;

	return (
		<div className="blogPostContainer">
			<Card>
				<div className="blogHeader">
					<span className="blogCategory">{post.blogCategory}</span>
					<h1 className="postTitle">{post.blogTitle}</h1>
					<span className="postedBy">
						posted on {post.postedOn} by {post.author}
					</span>
				</div>

				<div className="postImageContainer">
					<img
						src={require(`../../blogPostImages/${post.blogImage}`)}
						alt="Post"
					/>
				</div>

				<div className="postContent">
					<h3>{post.blogTitle}</h3>
					<p>{post.blogText}</p>
				</div>
			</Card>
		</div>
	);
}

export default BlogPost;
