import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const getBlogList = () => {
	return axios.get(`${baseURL}/posts`);
};

export const postBlog = (payload) => {
	return axios.post(`${baseURL}/posts`, payload);
};
