import { useParams } from 'react-router';
import Loading from '~/components/Loading';
import { IOrder } from '~/interface/order';
import { order_status } from '~/utils/orderStatus';
import { payment_method } from '~/utils/payment_method';
import moment from 'moment';
import { IProduct } from '~/interface/product';
import { useState } from 'react';
import { useGetOneOrderQuery } from '~/redux/rtk-Query/order';
const HistoryOrder = () => {
	const { userId }: any = useParams();
	const { data, isLoading } = useGetOneOrderQuery(userId);
	const [modal, setModal] = useState(false);
	const [detail, setDetail] = useState();
	const orderDetail = (id: string) => {
		setModal(!modal);
		const find = data.find((value: IOrder) => {
			return value._id === id;
		});
		setDetail(find.products);
	};
	return (
		<div>
			<h2 className="my-5 text-2xl font-bold text-center">History Order</h2>
			{isLoading === false && data.length > 0 && (
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left text-gray-500">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
							<tr>
								<th scope="col" className="px-6 py-3">
									Mã đơn hàng
								</th>
								<th scope="col" className="px-6 py-3">
									Thông tin giao hàng
								</th>
								<th scope="col" className="px-6 py-3">
									Ngày mua
								</th>
								<th scope="col" className="px-6 py-3">
									Số lượng
								</th>
								<th scope="col" className="px-6 py-3">
									Trạng thái
								</th>
								<th scope="col" className="px-6 py-3">
									Tổng tiền
								</th>
								<th scope="col" className="px-6 py-3">
									Hành động
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{isLoading === false &&
								data?.map((product: IOrder) => {
									return (
										<>
											<tr className="border-b bg-gray-50 " key={product.orderId}>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													{product.orderId}
												</th>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													<b>Người nhận</b>: {product.name}
													<br />
													<b>Địa chỉ</b>: {product.address}
													<br />
													<b>Số điện thoại</b>: {product.phoneNumber}
													<br />
												</th>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													{moment.utc(product.createdAt).utcOffset(7).format('YYYY-MM-DD HH:mm:ss')}
												</th>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													{product.products.length}
												</th>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													{payment_method[product.payment]}
												</th>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													{product.products &&
														product.products?.reduce(
															(sum, item: IProduct) => sum + item.quantity * item.price,
															0,
														)}
													$
												</th>
												<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
													{order_status[product.status]}
												</th>
												<td className="px-6 py-4">
													<button
														className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
														onClick={() => orderDetail(product._id)}
													>
														Chi tiết
													</button>
												</td>
											</tr>
											{modal === true && (
												<div className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
													<div className="relative w-full max-w-5xl max-h-full">
														<div className="relative bg-white rounded-lg shadow  top-[130px] left-[20%]">
															<button
																type="button"
																className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
																onClick={() => setModal(!modal)}
															>
																<svg
																	className="w-3 h-3"
																	aria-hidden="true"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 14 14"
																>
																	<path
																		stroke="currentColor"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={2}
																		d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
																	/>
																</svg>
																<span className="sr-only">Close modal</span>
															</button>
															<div className="px-6 py-6 lg:px-8">
																<h3 className="mb-4 text-xl font-medium text-gray-900">
																	Chi tiết đơn hàng
																</h3>
																<table>
																	<thead>
																		<th scope="col" className="px-6 py-3">
																			Tên sản phẩm
																		</th>
																		<th scope="col" className="px-6 py-3">
																			Ảnh
																		</th>
																		<th scope="col" className="px-6 py-3">
																			Giá
																		</th>
																		<th scope="col" className="px-6 py-3">
																			Số lượng
																		</th>
																		<th scope="col" className="px-6 py-3">
																			Thành tiền
																		</th>
																	</thead>
																	<tbody>
																		{detail?.map((product: any, index) => {
																			return (
																				<tr className="border-b bg-gray-50 " key={index}>
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
																						<img
																							src={`${product.image}`}
																							alt=""
																							className="w-[140px]"
																						/>
																					</th>
																					<th
																						scope="row"
																						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																					>
																						{product.quantity}
																					</th>
																					<th
																						scope="row"
																						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																					>
																						{product.price * product.quantity}
																					</th>
																				</tr>
																			);
																		})}
																	</tbody>
																</table>
															</div>
														</div>
													</div>
												</div>
											)}
										</>
									);
								})}
						</tbody>
					</table>
				</div>
			)}
			{data?.length === 0 && (
				<div className="flex items-center justify-center text-lg">Bạn chưa đơn đặt hàng nào</div>
			)}
			{isLoading === true && <Loading />}
		</div>
	);
};

export default HistoryOrder;
