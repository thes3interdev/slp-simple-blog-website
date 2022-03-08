import { useState } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: 'My New Website',
			body: "You don't believe in the Force, do you? As you wish. I find your lack of faith disturbing.",
			author: 'Din Djarin',
			id: 1,
		},
		{
			title: 'Welcome Party',
			body: 'Hokey religions and ancient weapons are no match for a good blaster at your side, kid.',
			author: 'Boba Fett',
			id: 2,
		},
		{
			title: 'The Revolution',
			body: "Look, I ain't in this for your revolution, and I'm not in it for you, Princess.",
			author: 'Bo Katan',
			id: 3,
		},
		{
			title: 'A New Hope',
			body: "I want to come with you to Alderaan. There's nothing for me here now.",
			author: 'Sabine Wren',
			id: 4,
		},
	]);

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs" />
		</div>
	);
};

export default Home;
