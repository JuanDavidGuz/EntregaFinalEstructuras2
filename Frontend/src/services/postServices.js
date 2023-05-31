import { apiFile, api } from '../config/axios';

const BASE_URL = 'post';

export const postServices = {
	get: async (id) => {
		return await apiFile.get(`/${BASE_URL}/${id}`);
	},

	getAll: async () => {
		return await apiFile.get(`/${BASE_URL}`);
	},

	create: async (data) => {
		return await apiFile.post(`/${BASE_URL}`, data);
	},

	update: async (id, data) => {
		return await api.patch(`/${BASE_URL}/${id}`, data);
	},

	delete: async (id) => {
		return await apiFile.delete(`/${BASE_URL}/${id}`);
	},
};
