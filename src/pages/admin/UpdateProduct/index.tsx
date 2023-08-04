import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '~/components/InputField';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { categorySelector, productSelector } from '~/redux/selector';
import { updateProduct } from '~/redux/createAsyncThunk/product';
import { ICategory } from '~/interface/category';
import { productSchema } from '~/schemas/productSchema';
import { IProduct } from '~/interface/product';
import { getAllCategory } from '~/redux/createAsyncThunk/category';

const UpdateProduct = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const { products } = useAppSelector(productSelector);
	const { categories } = useAppSelector(categorySelector);
	const [product, setProduct] = useState<any>({});
	useEffect(() => {
		dispatch(getAllCategory());
	}, [dispatch]);
	useEffect(() => {
		const currentProduct = products.find((value: IProduct) => value._id === id);
		reset({
			...currentProduct,
			categoryId: currentProduct?.categoryId?._id,
		});
		setProduct(currentProduct);
	}, [products, id]);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(productSchema),
	});
	const onSubmit = (data: IProduct) => {
		dispatch(updateProduct(data)).then((res) => {
			if (res.payload.messenger) {
				toast.success('Cập nhật thành công');
				navigate('/admin/products');
			}
		});
	};
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center">UpdateProduct</h2>
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
						{categories?.map((category: ICategory) => {
							return (
								<option
									key={category._id}
									value={category._id}
									selected={product?.categoryId?._id === category._id ? true : false}
								>
									{category.name}
								</option>
							);
						})}
					</select>
				</div>
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
					Cập nhật sản phẩm
				</button>
			</form>
		</div>
	);
};

export default UpdateProduct;
