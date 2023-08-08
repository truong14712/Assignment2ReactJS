import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '~/interface/product';

export const getAllProduct = createAsyncThunk('product/getAllProduct', async (_, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.product.getAllProducts();
	return data;
});

export const getOneProduct = createAsyncThunk<any, any, any>('product/getOneProduct', async (id, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.product.getOneProducts(id);
	return data;
});

export const addProduct = createAsyncThunk<any, any, any>('product/addProduct', async (product: IProduct, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.product.addProducts(product);
	console.log(data);
	return data;
});

export const updateProduct = createAsyncThunk<any, any, any>(
	'product/updateProduct',
	async (product: IProduct, thunkApi) => {
		const { extra } = thunkApi;
		const data = await extra.product.updateProducts(product);
		return data;
	},
);

export const deleteProduct = createAsyncThunk<any>('product/deleteProduct', async (id, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.product.removeProducts(id);
	return data;
});
export const keywordProduct = createAsyncThunk<any>('product/keywordProduct', async (name, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.product.searchKeyword(name);
	return data;
});
