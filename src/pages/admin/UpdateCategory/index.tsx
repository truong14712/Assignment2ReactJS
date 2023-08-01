import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { categorySchema } from '~/schemas/categorySchema';
import InputField from '~/components/InputField';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { categorySelector } from '~/redux/selector';
import { updateCategory } from '~/redux/createAsyncThunk/category';

const UpdateCategory = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { categories } = useAppSelector(categorySelector);
	useEffect(() => {
		const currentCategory = categories.find((value) => value._id === id);
		reset(currentCategory);
	}, [categories]);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(categorySchema),
	});
	useEffect(() => {}, []);
	const onSubmit = (data: any) => {
		dispatch(updateCategory(data)).then((res) => {
			if (res.payload.messenger) {
				toast.success(res.payload.messenger);
				navigate('/admin/categories');
			}
		});
	};
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center">UpdateCategory</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="name" label="Category Name" register={register} errors={errors.name} />
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
					Cập nhật danh mục
				</button>
			</form>
		</div>
	);
};

export default UpdateCategory;
