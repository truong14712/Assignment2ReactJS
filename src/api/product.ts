import { product } from '~/interface/';
import instance from './instance';
const getAllProducts = () => {
	return instance.get('/products');
};
const getOneProducts = (id: string) => {
	return instance.get('/products/find/' + id);
};
const addProducts = (data: product.IProduct) => {
	return instance.post(`/products`, data);
};
const updateProducts = (data: product.IProduct) => {
	const { _id, __v, ...updateData } = data;
	return instance.put('/products/' + _id, updateData);
};
const removeProducts = (id: string) => {
	return instance.delete('/products/' + id);
};
const searchKeyword = (keyword: string) => {
	return instance.get('/products/search/' + keyword);
};
export { getAllProducts, getOneProducts, addProducts, updateProducts, removeProducts, searchKeyword };
