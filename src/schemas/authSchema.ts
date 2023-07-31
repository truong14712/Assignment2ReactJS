import * as yup from 'yup';
export const registerSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập tên của bạn'),
	email: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập email của bạn')
		.email(),
	password: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập mật khẩu của bạn'),
	confirmPassword: yup
		.string()
		.default('')
		.oneOf([yup.ref('password')], 'Mật khẩu nhập không khớp. Vui lòng thử lại.')
		.required('Vui lòng nhập mật khẩu của bạn'),
});
export const loginSchema = yup.object({
	email: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập email của bạn')
		.email(),
	password: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập mật khẩu của bạn'),
});
