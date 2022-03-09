import BlogList from '../components/BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch('http://localhost:5000/blogs');

	return (
		<div className="home">
			{error && <div className="error-text">{error}</div>}
			{isLoading && <div>Loading blogs...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
