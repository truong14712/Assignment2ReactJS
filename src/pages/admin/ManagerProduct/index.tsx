import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import { IProduct } from '~/interface/product';
import { getAllProduct, deleteProduct } from '~/redux/createAsyncThunk/product';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { productSelector } from '~/redux/selector';
import { toast } from 'react-toastify';

const ManagerProduct = () => {
	const dispatch = useAppDispatch();
	const { products, isLoading } = useAppSelector(productSelector);
	useEffect(() => {
		dispatch(getAllProduct());
	}, [dispatch]);
	const removeProduct = (id: any) => {
		dispatch(deleteProduct(id)).then((res: any) => {
			if (res.payload?.data) {
				toast.success(res.payload.messenger);
			}
		});
	};
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center ">ManagerProduct</h2>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product Name
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Image
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{isLoading === false &&
							products?.map((product: IProduct) => {
								return (
									<tr className="border-b bg-gray-50 " key={product._id}>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.name}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.price}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											<img src={`${product.image}`} alt="" className="w-[140px]" />
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.categoryId?.name}
										</th>
										<td className="px-6 py-4">
											<Link
												to={`update/${product._id}`}
												className="mx-2 font-medium text-blue-600 hover:underline"
											>
												Edit
											</Link>
											<button
												className="mx-2 font-medium text-blue-600 hover:underline"
												onClick={() => removeProduct(product._id)}
											>
												Xoa
											</button>
										</td>
									</tr>
								);
							})}
						{isLoading === true && <Loading />}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManagerProduct;
