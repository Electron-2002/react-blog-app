import React from "react";
import Card from "../../components/UI/Card/Card";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import RecentPosts from "./RecentPosts/RecentPosts";
import blogData from "../../data/blog.json";
import Layout from "../../components/Layout/Layout";

function Home() {
	const galleryHeight = 450;
	const galleryStyle = {
		height: galleryHeight + "px",
		overflow: "hidden"
	};

	const sideImageHeight = galleryHeight / 3;

	const imgArray = blogData.data.map((post) => post.blogImage);

	const SideImage = (props) => {
		return (
			<div style={{ height: props.height }}>
				<img src={props.src} />
			</div>
		);
	};

	const ImageGallery = (props) => {
		return (
			<div className="galleryPost" style={galleryStyle}>
				<section style={{ width: props.largeWidth }}>
					<div className="mainImageWrapper">
						<img
							src={require("../../blogPostImages/" +
								props.imagesArray[0])}
						/>
					</div>
				</section>
				<section
					className="sideImageWrapper"
					style={{ width: props.smallWidth }}
				>
					<SideImage
						height={sideImageHeight + "px"}
						src={require("../../blogPostImages/" +
							props.imagesArray[1])}
					/>
					<SideImage
						height={sideImageHeight + "px"}
						src={require("../../blogPostImages/" +
							props.imagesArray[2])}
					/>
					<SideImage
						height={sideImageHeight + "px"}
						src={require("../../blogPostImages/" +
							props.imagesArray[3])}
					/>
				</section>
			</div>
		);
	};

	return (
		<div>
			<Card>
				<ImageGallery
					largeWidth="70%"
					smallWidth="30%"
					imagesArray={imgArray}
				/>
			</Card>

			<Layout>
				<RecentPosts />
			</Layout>
		</div>
	);
}

export default Home;
