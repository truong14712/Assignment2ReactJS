export interface IProduct {
	_id?: string | number;
	__v?: string | undefined;
	name: string;
	price: number;
	image: string;
	description: string;
	categoryId: {
		_id: string;
		name: string;
	};
}
