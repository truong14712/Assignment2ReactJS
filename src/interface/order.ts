import { IProduct } from './product';

export interface IOrder {
	_id?: string;
	products: IProduct[];
	name: string;
	email: string;
	payment: string;
	address: string;
	phoneNumber: string;
	userId: string;
	orderId: string;
	createdAt?: string;
	status?: string;
}
