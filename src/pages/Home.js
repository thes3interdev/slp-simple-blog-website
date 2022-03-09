import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import api from '../api/index';

const Home = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await api.get('/blogs');
				setBlogs(response.data);
			} catch (err) {}
		};

		fetchBlogs();
	}, []);

	return <div className="home">{blogs && <BlogList blogs={blogs} title="All Blogs" />}</div>;
};

export default Home;
