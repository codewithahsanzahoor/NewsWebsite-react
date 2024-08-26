import React from "react";

function Header(props) {
	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<div className="container justify-content-center">
						<div className=" intro-text">
							<h1>
								NewsRead
								<span></span>
							</h1>
							<p>
								Stay informed and connected with our comprehensive news
								application, delivering real-time updates, personalized feeds,
								and engaging multimedia content.
							</p>
							<a
								href="#features"
								className="btn btn-custom btn-lg page-scroll"
								style={{ width: "150px" }}
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
