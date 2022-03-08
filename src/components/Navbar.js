const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="navbar-header">The Simple Blog</h1>
			<div className="navbar-links">
				<a href="/">Home</a>
				<a href="/create" className="navbar-button">
					New Blog
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
