import { useState } from 'react';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Din Djarin');

	const handleSubmit = (e) => {
		e.preventDefault();

		const blog = { title, body, author };
	};

	return (
		<div className="create">
			<h2 className="create-header">Create a New Blog</h2>

			<form onSubmit={handleSubmit}>
				<label className="create-label">Blog Title</label>
				<input className="create-input" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

				<label className="create-label">Blog Content</label>
				<textarea className="create-input" required value={body} onChange={(e) => setBody(e.target.value)} />

				<label className="create-label">Blog Author</label>
				<select className="create-input" value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="Din Djarin">Din Djarin</option>
					<option value="Boba Fett">Boba Fett</option>
				</select>

				<button className="button">Create Blog</button>
			</form>
		</div>
	);
};

export default Create;
