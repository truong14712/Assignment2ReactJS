import { ICategory } from '~/interface/category';
import instance from './instance';
const getAllCategories = () => {
	return instance.get('/categories');
};
const getOneCategories = (id: string | number) => {
	return instance.get('/categories/' + id);
};
const addCategories = (data: ICategory) => {
	return instance.post(`/categories`, data);
};
const updateCategories = (data: ICategory) => {
	const { _id, __v, ...updateData } = data;
	return instance.put('/categories/' + _id, updateData);
};
const removeCategories = (id: string | number) => {
	return instance.delete('/categories/' + id);
};

export { getAllCategories, getOneCategories, removeCategories, updateCategories, addCategories };
