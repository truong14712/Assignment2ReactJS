import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrder } from '~/interface/order';

const orderAPI = createApi({
	reducerPath: 'order',
	tagTypes: ['Order'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:7500/api/orders',
	}),
	endpoints: (builder) => ({
		addOrder: builder.mutation({
			query: (order: IOrder) => ({
				url: `/`,
				method: 'POST',
				body: order,
			}),
			invalidatesTags: ['Order'],
		}),
		getOneOrder: builder.query({
			query: (userId: string) => `/find/${userId}`,
			providesTags: ['Order'],
		}),
		getOrderAll: builder.query({
			query: () => `/`,
			providesTags: ['Order'],
		}),
	}),
});
export const { useAddOrderMutation, useGetOneOrderQuery, useGetOrderAllQuery } = orderAPI;
export const orderReducer = orderAPI.reducer;
export default orderAPI;
