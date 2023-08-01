import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '~/components/Loading';
import { IProduct } from '~/interface/product';
import { getOneProduct } from '~/redux/createAsyncThunk/product';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { productSelector } from '~/redux/selector';

const Detail = () => {
	const dispatch = useAppDispatch();
	const { product, isLoading, products } = useAppSelector(productSelector);
	const [same, setSame] = useState<IProduct[]>([]);
	const { id } = useParams();
	useEffect(() => {
		dispatch(getOneProduct(id));
	}, [dispatch, id]);
	useEffect(() => {
		const sameProduct = products.filter((item: IProduct) => {
			return item.categoryId._id === product?.categoryId;
		});
		setSame(sameProduct);
	}, [product, products]);
	return (
		<div>
			<main className="my-8">
				{isLoading === false && (
					<div className="container px-6 mx-auto">
						<div className="md:flex md:items-center">
							<div className="w-full h-64 md:w-1/2 lg:h-96">
								<img
									className="object-cover w-full h-full max-w-lg mx-auto rounded-md"
									src={product?.image}
									alt={product?.name}
								/>
							</div>
							<div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
								<h3 className="text-lg text-gray-700 uppercase">{product?.name}</h3>
								<span className="mt-3 text-gray-500">${product?.price}</span>
								<p>{product?.description}</p>
								<hr className="my-3" />
								<div className="flex items-center mt-6">
									<button className="px-8 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
										Order Now
									</button>
									<button className="p-2 mx-2 text-gray-600 border rounded-md hover:bg-gray-200 focus:outline-none">
										<svg
											className="w-5 h-5"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="mt-16">
							<h3 className="text-2xl font-medium text-gray-600">Similar products</h3>
							<div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{same &&
									same.map((item) => {
										return (
											<div className="w-full p-4">
												<div className="h-48 overflow-hidden rounded ">
													<img
														alt={item.name}
														className="block object-cover object-center h-full cursor-pointer"
														src={item.image}
													/>
												</div>
												<div className="mt-4">
													<h2 className="text-lg font-medium text-gray-900 title-font">{item.name}</h2>
													<h3 className="mb-1 text-base tracking-widest text-gray-500 title-font">
														{item.price}$
													</h3>
												</div>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				)}
			</main>
			{isLoading === true && <Loading />}
		</div>
	);
};

export default Detail;
