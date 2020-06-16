import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const token = localStorage.getItem('token');
	options.headers.set('Authorization', `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(
	'http://localhost:8000/api',
	httpClient
);

const myDataProvider = {
	...dataProvider,
	create: (resource, params) => {
		debugger;
		if (params.data.image) {
			params.data.images = [params.data.image];
		}
		if (
			params.data.images &&
			(resource === 'products' || resource === 'categories')
		) {
			const newPictures = params.data.images.filter(
				(p) => p.rawFile instanceof File
			);
			return Promise.all(newPictures.map(convertFileToBase64)).then(
				(transformedNewPictures) => {
					return dataProvider.create(resource, {
						...params,
						data: {
							...params.data,
							images: [...transformedNewPictures],
						},
					});
				}
			);
		}

		return dataProvider.create(resource, params);
	},
	update: (resource, params) => {
		if (params.data.image) {
			params.data.images = [params.data.image];
		}
		if (
			params.data.images &&
			(resource === 'products' || resource === 'categories')
		) {
			const newPictures = params.data.images.filter(
				(p) => p.rawFile instanceof File
			);
			const formerPictures = params.data.images.filter(
				(p) => !(p.rawFile instanceof File)
			);
			return Promise.all(newPictures.map(convertFileToBase64)).then(
				(transformedNewPictures) => {
					return dataProvider.update(resource, {
						...params,
						data: {
							...params.data,
							images: [...transformedNewPictures, ...formerPictures],
						},
					});
				}
			);
		}
		return dataProvider.update(resource, params);
	},
	getOne: async (resource, params) => {
		if (resource === 'chart') {
			let chart;
			try {
				chart = await httpClient('http://localhost:8000/api/chart');
				if (chart) {
					return Promise.resolve({
						data: chart.json,
					});
				}
			} catch (e) {
				return Promise.reject({
					data: e,
				});
			}
			return Promise.resolve({
				data: { id: params.id, nickname: '' },
			});
		}
		return dataProvider.getOne(resource, params);
	},
};
const convertFileToBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () =>
			resolve({
				base: reader.result,
				rawFile: {
					path: file.rawFile.path,
					type: file.rawFile.type,
					name: file.rawFile.name,
				},
			});
		reader.onerror = reject;
		reader.readAsDataURL(file.rawFile);
	});

export default myDataProvider;
