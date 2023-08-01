import * as yup from 'yup';
export const productSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập tên của sản phẩm'),
	price: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập giá của sản phẩm'),
	image: yup.string().required('Vui lòng nhập đường dẫn ảnh').trim('Vui lòng không nhập khoảng trắng'),
	description: yup.string().default(''),
	categoryId: yup.string().required('Vui lòng nhập danh mục sản phẩm'),
});
