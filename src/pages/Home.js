import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import api from '../api/index';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			const fetchBlogs = async () => {
				try {
					const response = await api.get('/blogs');
					setBlogs(response.data);
					setIsLoading(false);
					setError(null);
				} catch (err) {
					setIsLoading(false);
					setError(err.message);
				}
			};

			fetchBlogs();
		}, 1500);
	}, []);

	return (
		<div className="home">
			{error && <div className="error-text">{error}</div>}
			{isLoading && <div>Loading blogs...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
