import * as yup from 'yup';
export const categorySchema = yup.object({
	name: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập tên của danh mục'),
});
