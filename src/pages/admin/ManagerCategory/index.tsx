import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import { ICategory } from '~/interface/category';
import { getAllCategory } from '~/redux/createAsyncThunk/category';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { categorySelector } from '~/redux/selector';

const ManagerCategory = () => {
	const dispatch = useAppDispatch();
	const { categories, isLoading } = useAppSelector(categorySelector);
	useEffect(() => {
		dispatch(getAllCategory());
	}, [dispatch]);
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center ">ManagerCategory</h2>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Category Name
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{isLoading === false &&
							categories?.map((category: ICategory) => {
								return (
									<tr className="border-b bg-gray-50 " key={category._id}>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{category.name}
										</th>
										<td className="px-6 py-4">
											<Link to={'update/1'} className="mx-2 font-medium text-blue-600 hover:underline">
												Edit
											</Link>
											<Link to="#" className="mx-2 font-medium text-blue-600 hover:underline">
												Xoa
											</Link>
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

export default ManagerCategory;
