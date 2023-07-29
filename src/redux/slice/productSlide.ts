import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	products: [],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
