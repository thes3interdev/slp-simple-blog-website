import BlogList from '../components/BlogList';
import useAxios from '../hooks/useAxios';

const Home = () => {
	const { data: blogs, isLoading, error } = useAxios('/blogs');

	return (
		<div className="home">
			{error && <div className="error-text">{error}</div>}
			{isLoading && <div>Loading blogs...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
