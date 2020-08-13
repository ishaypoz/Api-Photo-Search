import axios from 'axios'; //make http request

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 4tfo0QMgomrkXPhRgku5UbwNvCMjITx8ZMfGqtX5WPc'
	}
});
