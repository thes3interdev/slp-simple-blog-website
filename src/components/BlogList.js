import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
	return (
		<div>
			<h2 className="blog-preview-header">{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2 className="blog-preview-sub-header">{blog.title}</h2>
					</Link>
					<p>Written by: {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default BlogList;
