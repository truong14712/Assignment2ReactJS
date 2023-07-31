import { createSlice } from '@reduxjs/toolkit';
import { Login, Register } from '../createAsyncThunk/auth';
import { IAuth } from '~/interface/auth';
const initialState = {
	isLoading: false,
	auth: {},
	isAuthenticated: false,
} as {
	isLoading: boolean;
	auth: IAuth;
	isAuthenticated: boolean;
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(Register.fulfilled, (state, action) => {
			console.log(action.payload);
			state.isLoading = false;
		});
		builder
			.addCase(Login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.auth = action.payload;
				state.isAuthenticated = true;
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.isLoading = true;
				},
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state) => {
					state.isLoading = false;
				},
			)
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				(state) => {
					state.isLoading = false;
				},
			);
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
