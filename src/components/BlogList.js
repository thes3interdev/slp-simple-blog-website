const BlogList = ({ blogs, title, handleDelete }) => {
	return (
		<div>
			<h2 className="blog-preview-header">{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2 className="blog-preview-header">{blog.title}</h2>
					<p>Written by: {blog.author}</p>
					<button className="button" onClick={() => handleDelete(blog.id)}>
						Delete Blog Post
					</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
