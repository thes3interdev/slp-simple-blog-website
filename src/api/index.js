import axios from 'axios';

export default axios.create({
	// baseURL: process.env.NODE_ENV === 'production' ? 'https://backend.s3interdev.com/api/' : 'http://localhost:1337/api/',
	baseURL: 'http://localhost:5000/blogs',
});
