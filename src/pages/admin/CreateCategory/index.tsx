import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { categorySchema } from '~/schemas/categorySchema';
import InputField from '~/components/InputField';
import { useAppDispatch } from '~/redux/hooks';
import { addCategory } from '~/redux/createAsyncThunk/category';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const CreateCategory = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(categorySchema),
	});
	const onSubmit = (data: any) => {
		dispatch(addCategory(data)).then((res: any) => {
			if (res.payload?.data) {
				toast.success(res.payload.messenger);
				navigate('/admin/categories');
			}
		});
	};
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center">CreateCategory</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="name" label="Name" register={register} errors={errors.name} />
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
					Thêm sản phẩm
				</button>
			</form>
		</div>
	);
};

export default CreateCategory;
