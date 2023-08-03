import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { category, auth, product } from '~/api';
import categoryReducer from './slice/categorySlide';
import authReducer from './slice/authSlide';
import productReducer from './slice/productSlide';
import cartReducer from './slice/cartSlide';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['product', 'category', 'auth', 'cart'],
};
const rootReducer = combineReducers({
	category: categoryReducer,
	auth: authReducer,
	product: productReducer,
	cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			thunk: {
				extraArgument: { category, auth, product },
			},
		}),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default persistStore(store);
