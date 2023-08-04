import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IProduct } from '~/interface/product';
const initialState = {
	isLoading: false,
	carts: [],
} as {
	isLoading: boolean;
	carts: IProduct[];
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const newProduct = action.payload;
			const index = state.carts.findIndex((cart: any) => cart._id === newProduct._id);
			if (index === -1) {
				toast.success('Thêm sản phẩm thành công');
				state.carts.push(action.payload);
			} else {
				state.carts[index].quantity++;
				toast.success(`Thêm thành công tổng số lượng ${state.carts[index].quantity}`);
			}
		},
		increase: (state, action) => {
			state.carts.find((cart) => cart._id === action.payload).quantity++;
		},
		decrease: (state, action) => {
			const foundProduct = state.carts.find((value) => value._id === action.payload);
			foundProduct.quantity--;
			if (foundProduct.quantity < 1) {
				const confirm = window.confirm('Bạn có muốn xóa không ?');
				if (confirm) {
					state.carts = state.carts.filter((value) => value._id !== action.payload);
					toast.success('Xóa sản phẩm thành công');
				}
				foundProduct.quantity = 1;
			}
		},
		deleteCart: (state, action) => {
			const confirm = window.confirm('Bạn có muốn xóa không ?');
			if (confirm) {
				state.carts = state.carts.filter((value) => value._id !== action.payload);
				toast.success('Xóa sản phẩm thành công');
			}
		},
		resetCart: (state) => {
			state.carts = [];
		},
	},
	extraReducers: (builder) => {},
});

export const { increase, decrease, addToCart, deleteCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
