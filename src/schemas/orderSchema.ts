import * as yup from 'yup';
export const orderSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập tên của bạn'),
	phoneNumber: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập số điện thoại của bạn'),
	address: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập tên địa chỉ của bạn'),
	payment: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập tên địa chỉ của bạn'),
});
export const updateStatus = yup.object({
	status: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập tên của bạn'),
});
