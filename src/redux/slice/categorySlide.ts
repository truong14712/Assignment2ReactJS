import { createSlice } from '@reduxjs/toolkit';
import { getAllCategory, addCategory, deleteCategory, updateCategory } from '../createAsyncThunk/category';
import { ICategory } from '~/interface/category';
const initialState = {
	isLoading: false,
	categories: [],
} as {
	isLoading: boolean;
	categories: ICategory[];
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addCase(getAllCategory.pending, (state) => {
		// 	state.isLoading = true;
		// });
		builder.addCase(getAllCategory.fulfilled, (state, action) => {
			state.categories = action.payload;
		});
		builder.addCase(addCategory.fulfilled, (state, action) => {
			state.categories.push(action.payload);
		});
		// Updating
		builder.addCase(updateCategory.fulfilled, (state, action) => {
			const newCategory = action.payload;
			state.categories = state.categories.map((item: ICategory) =>
				item._id == newCategory._id ? newCategory : item,
			);
		});
		// Deleting
		builder
			.addCase(deleteCategory.fulfilled, (state, action) => {
				state.categories = state.categories.filter((item: any) => item.id !== action.payload);
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

// export const { increment, decrement, incrementByAmount } = categorySlice.actions;

export default categorySlice.reducer;
