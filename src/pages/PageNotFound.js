import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div>
			<h2 className="create-header">Sorry</h2>
			<p className="blog-details-body">The page you are looking for cannot be found.</p>
			<Link to="/" className="button">
				Back to the Homepage
			</Link>
		</div>
	);
};

export default PageNotFound;
