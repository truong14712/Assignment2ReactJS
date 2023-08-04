import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '~/components/InputField';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { addProduct } from '~/redux/createAsyncThunk/product';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { productSchema } from '~/schemas/productSchema';
import { categorySelector } from '~/redux/selector';
import { ICategory } from '~/interface/category';
import { IProduct } from '~/interface/product';

const CreateProduct = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { categories } = useAppSelector(categorySelector);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(productSchema),
	});
	const onSubmit = (data: IProduct) => {
		dispatch(addProduct(data)).then((res: any) => {
			if (res.payload) {
				toast.success(res.payload?.messenger);
				navigate('/admin/products');
			}
		});
	};
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center">CreateProduct</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="name" label="Name" register={register} errors={errors.name} />
				<InputField name="price" label="Price" register={register} errors={errors.price} />
				<InputField name="image" label="Image" register={register} errors={errors.image} />
				<InputField name="description" label="Description" register={register} errors={errors.description} />
				<div className="mb-6">
					<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Categories
					</label>
					<select
						id="categoryId"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						{...register('categoryId')}
					>
						{categories.map((category: ICategory) => {
							return (
								<option key={category._id} value={category._id}>
									{category.name}
								</option>
							);
						})}
					</select>
				</div>
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
					Thêm sản phẩm
				</button>
			</form>
		</div>
	);
};

export default CreateProduct;
