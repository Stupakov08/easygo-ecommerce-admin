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
		if (resource !== 'products' || !params.data.images) {
			// fallback to the default implementation
			return dataProvider.create(resource, params);
		}
		/**
		 * For posts update only, convert uploaded image in base 64 and attach it to
		 * the `picture` sent property, with `src` and `title` attributes.
		 */

		// Freshly dropped pictures are File objects and must be converted to base64 strings
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
	},
	update: (resource, params) => {
		if (resource !== 'products' || !params.data.images) {
			// fallback to the default implementation
			return dataProvider.update(resource, params);
		}
		/**
		 * For posts update only, convert uploaded image in base 64 and attach it to
		 * the `picture` sent property, with `src` and `title` attributes.
		 */

		// Freshly dropped pictures are File objects and must be converted to base64 strings
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
