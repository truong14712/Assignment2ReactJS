/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '~/interface/category';

export const getAllCategory = createAsyncThunk<any, any, any>('category/getAllCategory', async (_, thunkApi) => {
	const { extra } = thunkApi;
	const { data }: any = await extra.category.getAllCategories();
	return data;
});
export const getOneCategory = createAsyncThunk<any, any, any>('category/getAllCategory', async (id, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.category.getOneCategories(id);
	return data;
});
export const addCategory = createAsyncThunk<any, any, any>(
	'category/addCategory',
	async (category: ICategory, thunkApi) => {
		const { extra } = thunkApi;
		const data = await extra.category.addCategories(category);
		return data;
	},
);

export const updateCategory = createAsyncThunk<any, any, any>(
	'category/updateCategory',
	async (category: ICategory, thunkApi) => {
		const { extra } = thunkApi;
		const data = await extra.category.updateCategories(category);
		return data;
	},
);

export const deleteCategory = createAsyncThunk<any>('category/deleteCategory', async (id, thunkApi) => {
	const { extra } = thunkApi;
	const data = await extra.category.removeCategories(id);
	return data;
});
