import axios from 'axios';

export const axiosCall = axios.create();

export const CancelToken = axios.CancelToken;

axiosCall.interceptors.response.use(
	result => result,
	error => {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			const { code, message = 'Request error' } = error.response.data || {};

			// eslint-disable-next-line prefer-promise-reject-errors
			return Promise.reject({
				code,
				message,
			});
		}

		if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
		} else {
			// Something happened in setting up the request that triggered an Error
		}

		if (axios.isCancel(error)) {
			// eslint-disable-next-line prefer-promise-reject-errors
			return Promise.reject('cancelled');
		}

		return Promise.reject(error);
	}
);
