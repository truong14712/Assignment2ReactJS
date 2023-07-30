import { RootState } from '../store';

export const productSelector = (state: RootState) => {
	return state.product;
};
export const categorySelector = (state: RootState) => {
	return state.category;
};
