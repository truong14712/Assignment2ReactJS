import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { orderStatus } from '~/utils/orderStatus';
import { updateStatus } from '~/schemas/orderSchema';
import { useGetOneQuery, useUpdateStatusMutation } from '~/redux/rtk-Query/order';
import Loading from '~/components/Loading';
import { useEffect } from 'react';

const UpdateOrder = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(updateStatus),
	});
	const { id }: any = useParams();
	const { data, isLoading } = useGetOneQuery(id);
	const [updateOrder] = useUpdateStatusMutation();
	useEffect(() => {
		reset(data);
	}, [data]);
	const onSubmit = (item: any) => {
		const newStatus = {
			id: id,
			status: item.status,
		};
		updateOrder(newStatus)
			.unwrap()
			.then((res) => {
				toast.success(res.messenger);
				navigate('/admin/orders');
			});
	};
	return (
		<div className="">
			{isLoading === false && (
				<div>
					<h2 className="my-3 text-2xl font-medium text-center">UpdateOrder</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<select
							id="status"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							{...register('status')}
						>
							{orderStatus?.map((item: any, index) => {
								return (
									<option key={index} value={item.value}>
										{item.status}
									</option>
								);
							})}
						</select>
						<button
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-5"
							type="submit"
						>
							Cập nhật đơn đặt hàng
						</button>
					</form>
				</div>
			)}
			{isLoading === true && <Loading />}
		</div>
	);
};

export default UpdateOrder;
