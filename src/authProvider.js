import { getFingerprint } from './utils/getFingerPrint';
const jwt = require('jsonwebtoken');

const authProvider = {
	login: async ({ username, password, passwordconf }) => {
		const fingerprint = await getFingerprint();
		const request = new Request('http://localhost:8000/api/admin/auth/signin', {
			method: 'POST',
			body: JSON.stringify({
				email: username,
				password,
				passwordconf,
				fingerprint,
			}),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
		return fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(({ accessToken }) => {
				localStorage.setItem('token', accessToken);
			});
	},
	logout: () => {
		localStorage.removeItem('token');
		return Promise.resolve();
	},
	checkAuth: () => {
		return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
	},

	checkError: (error) => {
		const status = error.status;
		if (status === 401 || status === 403) {
			localStorage.removeItem('token');
			return Promise.reject();
		}
		return Promise.resolve();
	},
	getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
