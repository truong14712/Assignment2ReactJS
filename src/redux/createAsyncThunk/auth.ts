import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const Register = createAsyncThunk<any, any, any>('auth/register', async (body, thunkApi) => {
	try {
		const { extra } = thunkApi;
		const data = await extra.auth.register(body);
		return data;
	} catch (error: any) {
		toast.error(error?.response?.data?.message);
		return thunkApi.rejectWithValue(error?.response?.data?.message);
	}
});
export const Login = createAsyncThunk<any, any, any>('auth/login', async (body, thunkApi) => {
	try {
		const { extra } = thunkApi;
		const data = await extra.auth.login(body);
		return data;
	} catch (error: any) {
		toast.error(error?.response?.data?.message);
		return thunkApi.rejectWithValue(error?.response?.data?.message);
	}
});
