import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Spinner from "../Spinner/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import '../../App.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import "./NewsPage.css"

const HeaderButton = ({ category, name }) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const language = searchParams.get("language") || "en";

	return (
		<Button
			variant="outline-light"
			className="btn-lg mx-2"
			onClick={() => navigate(`/?category=${category}&language=${language}`)}
		>
			{name}
		</Button>
	);
};

const LanguageSelector = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category") || "general";

	const handleLanguageChange = (e) => {
		navigate(`/?category=${category}&language=${e.target.value}`);
	};

	return (
		<Form.Control
			as="select"
			onChange={handleLanguageChange}
			defaultValue={searchParams.get("language") || "en"}
			className="mb-4"
		>
			<option value="en">English</option>
			<option value="es">Spanish</option>
			{/* Add more languages as needed */}
		</Form.Control>
	);
};

const NewsPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [news, setNews] = useState([]);
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category") || "general";
	const language = searchParams.get("language") || "en";

	const apiURL = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&apikey=716835ac41fef2d603b558f372a6b932`;

	const getNews = async () => {
		setLoading(true);
		try {
			const response = await axios.get(apiURL);
			setNews(response.data.articles);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getNews();
	}, [category, language]);

	return (

		<Container className="my-4 news-page">
			<h1 className="text-center mb-4">
				{category.charAt(0).toUpperCase() + category.slice(1)} - Top Headlines ({language.toUpperCase()})
			</h1>

			<div className="text-center mb-4">
				{["general", "science", "technology", "entertainment", "health", "sports", "nation", "world", "pakistan-news", "us-news", "india-news", "uk-news"].map(cat => (
					<HeaderButton key={cat} category={cat} name={cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')} />
				))}
			</div>

			<LanguageSelector />

			{loading ? (
				<Spinner />
			) : (
				<Row className="d-flex justify-content-center">
					{news.map((element) => (
						<Col md={4} className="mb-4 d-flex justify-content-center" key={element.url}>
							<NewsCard
								onClick={() => navigate("/article", { state: element })}
								title={element.title ? element.title.slice(0, 37) : " "}
								description={element.description ? element.description.slice(0, 37) : " "}
								imageUrl={element.image}
								url={element.source.url}
								channel={element.source.name}
							/>
						</Col>
					))}
				</Row>
			)}
		</Container>

	);
};

export default NewsPage;
