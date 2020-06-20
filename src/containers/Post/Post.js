import React from "react";
import "./Post.css";

import BlogPost from "../../components/BlogPost/BlogPost";
import Sidebar from "../../components/Sidebar/Sidebar";
import Layout from "../../components/Layout/Layout";

function Post(props) {
	return (
		<Layout>
			<BlogPost {...props} />
		</Layout>
	);
}

export default Post;
