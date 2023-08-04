import moment from 'moment';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import { IProduct } from '~/interface/product';
import { useGetOrderAllQuery } from '~/redux/rtk-Query/order';
import { order_status } from '~/utils/orderStatus';
import { payment_method } from '~/utils/payment_method';

const ManagerOrder = () => {
	const { data, isLoading } = useGetOrderAllQuery();
	const itemsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data?.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const handlePageChange = (event: any) => {
		const selected = event.selected;
		setCurrentPage(selected + 1);
	};
	return (
		<>
			<h2 className="my-3 text-2xl font-medium text-center ">ManagerOrder</h2>
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
								Hình thức thanh toán
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
						</tr>
					</thead>
					<tbody>
						{isLoading === false &&
							data?.slice(startIndex, endIndex).map((product: any) => {
								return (
									<tr className="border-b bg-gray-50 " key={product.orderId}>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.orderId}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[215px]"
										>
											<b>Người nhận</b> : {product.name} <br />
											<b>Địa chỉ</b> : {product.address} <br />
											<b>Số điện thoạt</b> : {product.phoneNumber} <br />
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{moment.utc(product.createdAt).utcOffset(7).format('YYYY-MM-DD HH:mm:ss')}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.products.length}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{payment_method[product.payment]}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{order_status[+product.status]}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.products &&
												product.products?.reduce(
													(sum: number, item: IProduct) => sum + item.quantity * item.price,
													0,
												)}
											$
										</th>
										<td className="px-6 py-4">
											<Link
												to={`update/${product._id}`}
												className="mx-2 font-medium text-blue-600 hover:underline"
											>
												Edit
											</Link>
										</td>
									</tr>
								);
							})}

						{isLoading === true && <Loading />}
					</tbody>
				</table>
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					pageCount={totalPages}
					onPageChange={handlePageChange}
					containerClassName={'flex justify-center items-center mx-auto container my-4'}
					activeClassName={'text-white bg-green-500'}
					pageRangeDisplayed={2}
					marginPagesDisplayed={1}
					previousLabel="<"
					pageClassName="mx-2 p-3 rounded-md"
					pageLinkClassName="p-3 text-lg"
					disabledClassName={'bg-gray-200'}
					previousClassName="bg-gray-400 text-white p-3 rounded-md"
					nextClassName="bg-gray-400 text-white p-3 rounded-md"
				/>
			</div>
		</>
	);
};

export default ManagerOrder;
