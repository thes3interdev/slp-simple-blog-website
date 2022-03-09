import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="navbar-header">The Simple Blog</h1>
			<div className="navbar-links">
				<Link to="/">Home</Link>
				<Link to="/create">Blogs</Link>
			</div>
		</nav>
	);
};

export default Navbar;
