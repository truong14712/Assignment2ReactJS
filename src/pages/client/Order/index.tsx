import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputField from '~/components/InputField';
import { IProduct } from '~/interface/product';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { useAddOrderMutation } from '~/redux/rtk-Query/order';
import { authSelector, cartSelector } from '~/redux/selector';
import { orderSchema } from '~/schemas/orderSchema';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { resetCart } from '~/redux/slice/cartSlide';
import { nanoid } from '@reduxjs/toolkit';
const Order = () => {
	const { carts } = useAppSelector(cartSelector);
	const { auth } = useAppSelector(authSelector);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [addOrder, { isLoading }] = useAddOrderMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(orderSchema),
	});
	const onSubmit = (data: any) => {
		addOrder({
			products: [...carts],
			name: data.name,
			email: data.email,
			payment: data.payment,
			address: data.address,
			phoneNumber: data.phoneNumber,
			userId: auth._id as string,
			orderId: nanoid(),
		})
			.unwrap()
			.then((res) => {
				toast.success(res.messenger);
				navigate(`/order/history/${auth._id}`);
				dispatch(resetCart());
			});
	};
	if (isLoading) return <div>isLoading</div>;
	return (
		<>
			<h2 className="my-5 text-2xl font-bold text-center">Product information</h2>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="px-6 py-3 ">
								Tên sản phẩm
							</th>
							<th scope="col" className="px-6 py-3 ">
								Ảnh
							</th>
							<th scope="col" className="px-6 py-3 ">
								Giá
							</th>
							<th scope="col" className="px-6 py-3 ">
								Số lượng
							</th>
							<th scope="col" className="px-6 py-3 ">
								Thành tiền
							</th>
						</tr>
					</thead>
					<tbody>
						{carts &&
							carts.map((product: IProduct) => {
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
											<img className="w-[120px] " src={product.image} alt="" />
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
											{product.quantity}
										</th>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{product.quantity * product.price}
										</th>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
			<div className="flex items-center justify-center my-5 text-lg font-medium">
				<div>Total:</div>
				<span className="mx-2">
					{carts && carts?.reduce((sum, item: IProduct) => sum + item.quantity * item.price, 0)}$
				</span>
			</div>
			<h2 className="my-5 text-2xl font-bold text-center">Receiver's information</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="name" label="Name" register={register} errors={errors.name} />
				<InputField name="phoneNumber" label="Phone Number" register={register} errors={errors.phoneNumber} />
				<InputField name="address" label="Address" register={register} errors={errors.address} />
				<div className="mb-6">
					<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Payment
					</label>
					<select
						id="payment"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -"
						{...register('payment')}
					>
						<option value={'1'}>Thanh toán khi nhận hàng</option>
					</select>
				</div>
				<div className="text-center">
					<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
						Đặt hàng
					</button>
				</div>
			</form>
		</>
	);
};

export default Order;
