/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '~/interface/category';

interface MyExtra {
	category: {
		getAllCategories: () => Promise<ICategory[]>;
		addCategories: (body: ICategory) => Promise<ICategory>;
		updateCategories: (body: ICategory) => Promise<ICategory>;
		removeCategories: (id: string) => Promise<void>;
	};
}
export const getAllCategory = createAsyncThunk<ICategory[], any, { extra: MyExtra }>(
	'category/getAllCategory',
	async (_, thunkApi) => {
		const { extra } = thunkApi;
		const { data }: any = await extra.category.getAllCategories();
		return data ;
	},
);

export const addCategory = createAsyncThunk<ICategory, ICategory, { extra: MyExtra }>(
	'category/addCategory',
	async (category: ICategory, thunkApi) => {
		const { extra } = thunkApi;
		const data = await extra.category.addCategories(category);
		return data;
	},
);

export const updateCategory = createAsyncThunk<ICategory, ICategory, { extra: MyExtra }>(
	'category/updateCategory',
	async (category: ICategory, thunkApi) => {
		const { extra } = thunkApi;
		const data = await extra.category.updateCategories(category);
		return data;
	},
);

export const deleteCategory = createAsyncThunk<void, string, { extra: MyExtra }>(
	'category/deleteCategory',
	async (id, thunkApi) => {
		const { extra } = thunkApi;
		const data = await extra.category.removeCategories(id);
		return data;
	},
);
