import React from "react";
import "../../App.css";

const NewsCard = (props) => {
	let { onClick, title, description, url, imageUrl, channel } = props;
	return (
		<>

			<div class="card-grid-space" onClick={onClick}>
				<a class="card" href="#" style={{
					backgroundImage: ` url(${imageUrl})`,
				}}>
					<div>
						<h1>{title}</h1>
						<h5 className="url">{url} </h5>
						<p>{description} ...</p>
						<div class="tags">
							<div class="tag">{channel}</div>
						</div>
					</div>
				</a>
			</div>

		</>
	);
};

export default NewsCard;
