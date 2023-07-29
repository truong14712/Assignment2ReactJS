import axios from 'axios';

const API = 'http://localhost:7500/api';
const instance = axios.create({
	baseURL: API,
	timeout: 1000,
});
instance.interceptors.request.use(
	function (config) {
		// const accessToken = localStorage.getItem('accessToken')
		// 	? JSON.parse(localStorage.getItem('accessToken') || '')
		// 	: null;
		// if (accessToken) {
		// 	config.headers['Authorization'] = `Bearer ${accessToken}`;
		// }
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export default instance;
