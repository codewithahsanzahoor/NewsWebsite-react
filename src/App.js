import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Information from "./components/About/Information";
import Login from "./components/Login/Login";
import Article from "./components/Articles/Article";
import NewsPage from "./components/NewsPage/NewsPage"; // Assuming you have this component

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<NewsPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<Information />} />
				<Route path="/article" element={<Article />} />
			</Routes>
		</>
	);
}

export default App;
