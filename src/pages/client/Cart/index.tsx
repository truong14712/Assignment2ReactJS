import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { cartSelector } from '~/redux/selector';
import { decrease, deleteCart, increase } from '~/redux/slice/cartSlide';

const Cart = () => {
	const dispatch = useAppDispatch();
	const { carts } = useAppSelector(cartSelector);
	return (
		<>
			<div className="pt-20 bg-gray-100 ">
				<h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
				{carts &&
					carts.map((item) => {
						return (
							<div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0" key={item._id}>
								<div className="rounded-lg md:w-2/3">
									<div className="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start">
										<img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
										<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
											<div className="mt-5 sm:mt-0">
												<h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
												<p className="mt-1 text-sm gray-700 text-">{item.price}$</p>
											</div>
											<div className="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
												<div className="flex items-center border-gray-100">
													<button
														className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
														onClick={() => {
															dispatch(decrease(item._id));
														}}
													>
														{' '}
														-{' '}
													</button>
													<div className="py-1 px-3.5">{item.quantity}</div>
													<button
														className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50"
														onClick={() => {
															dispatch(increase(item._id));
														}}
													>
														{' '}
														+{' '}
													</button>
												</div>
												<button
													className="flex items-center space-x-4"
													onClick={() => {
														dispatch(deleteCart(item._id));
													}}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500"
													>
														<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
			{carts.length === 0 && (
				<div className="flex items-center justify-center text-lg">Bạn chưa có sản phẩm nào trong giỏ hàng</div>
			)}
			{carts.length > 0 ? (
				<div>
					<button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
						<Link to={'/order'}>Check out</Link>
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
};
export default Cart;
