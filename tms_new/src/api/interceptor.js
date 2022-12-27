import axios from 'axios';

const axiosInstance = axios.create({
	mode: 'cors',
	cache: 'no-cache',
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/json',
	},
	redirect: 'follow',
	referrerPolicy: 'no-referrer',
	baseURL: process.env.REACT_APP_ENDPOINT,
});

axiosInstance.interceptors.request.use(
	(config) => config,
	(err) => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
	(config) => config,
	({ config, request, response, ...err }) => {
		/**
      response응답 후에 status-code가 4xx, 5xx 처럼 에러를 나타내는 경우 해당 루트를 수행한다.
      */
		const errMsg = 'Error Message';
		// eslint-disable-next-line prefer-promise-reject-errors
		return Promise.reject({
			config,
			message: errMsg,
			response,
			...err,
		});
	},
);

export default axiosInstance;
