import { auth } from '~/interface';
import instance from './instance';

const register = (data: auth.IAuth) => {
	return instance.post(`/auth/signup`, data);
};
const login = (data: auth.IAuth) => {
	return instance.post(`/auth/signin`, data);
};

export { register, login };
