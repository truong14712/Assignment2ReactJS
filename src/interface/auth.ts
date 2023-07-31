export interface IAuth {
	_id?: string | number;
	__v?: string | undefined;
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
}
