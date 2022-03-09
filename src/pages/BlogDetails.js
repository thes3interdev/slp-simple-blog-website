import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isLoading } = useFetch('http://localhost:5000/blogs/' + id);

	return (
		<div className="blog-details">
			{error && <div className="error-text">{error}</div>}
			{isLoading && <div>Loading blogs...</div>}
			{blog && (
				<article>
					<h2 className="blog-details-header">{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div className="blog-details-body">{blog.body}</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
