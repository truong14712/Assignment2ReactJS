import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProduct = createAsyncThunk('product/getPostList', async (_, thunkApi) => {
	const res = await axios.get('', {
		signal: thunkApi.signal,
	});
	return res.data;
});

export const addProduct = createAsyncThunk('product/addProduct', async (body, thunkApi) => {});

export const updateProduct = createAsyncThunk('product/updateProduct', async ({ productId, body }, thunkApi) => {});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (productId) => {});
