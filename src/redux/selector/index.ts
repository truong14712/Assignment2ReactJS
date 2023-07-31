import { RootState } from '../store';

export const productSelector = (state: RootState) => {
	return state.product;
};
export const categorySelector = (state: RootState) => {
	return state.category;
};
export const authSelector = (state: RootState) => {
	return state.auth;
};