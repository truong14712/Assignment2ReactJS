import { createSlice } from '@reduxjs/toolkit';
import {
	addProduct,
	deleteProduct,
	getAllProduct,
	updateProduct,
	getOneProduct,
	keywordProduct,
} from '../createAsyncThunk/product';
import { IProduct } from '~/interface/product';
const initialState = {
	isLoading: false,
	products: [],
	product: {},
	keyword: [],
} as {
	isLoading: boolean;
	products: IProduct[];
	product: any;
	keyword: [];
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProduct.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		builder.addCase(getOneProduct.fulfilled, (state, action) => {
			state.product = action.payload;
		});
		builder.addCase(addProduct.fulfilled, (state, action) => {
			state.products.push(action.payload);
		});
		// Updating
		builder.addCase(updateProduct.fulfilled, (state, action) => {
			const newCategory = action.payload;
			state.products = state.products.map((item: IProduct) => (item._id == newCategory._id ? newCategory : item));
		});
		// Deleting
		builder.addCase(deleteProduct.fulfilled, (state, action: any) => {
			state.products = state.products.filter((item: IProduct) => item._id !== action.payload?.data?._id);
		});
		builder
			.addCase(keywordProduct.fulfilled, (state, action) => {
				state.keyword = action.payload;
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

// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
