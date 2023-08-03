import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import { ICategory } from '~/interface/category';
import { getAllCategory } from '~/redux/createAsyncThunk/category';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { categorySelector } from '~/redux/selector';
import { deleteCategory } from '~/redux/createAsyncThunk/category';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const ManagerCategory = () => {
	const dispatch = useAppDispatch();
	const { categories, isLoading } = useAppSelector(categorySelector);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		dispatch(getAllCategory());
	}, [dispatch]);
	const removeCategory = (id: any) => {
		dispatch(deleteCategory(id)).then((res: any) => {
			if (res.payload?.data) {
				toast.success(res.payload.messenger);
			}
		});
	};

	const itemsPerPage = 6;
	const totalPages = Math.ceil(categories.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const handlePageChange = (event: any) => {
		const selected = event.selected;
		setCurrentPage(selected + 1);
	};

	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center ">ManagerCategory</h2>
			<Link to={'/admin/categories/create'}>
				<button className="p-2 my-3 text-lg text-green-500 rounded-lg bg-slate-200">Add Category</button>
			</Link>
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
							categories?.slice(startIndex, endIndex).map((category: ICategory) => {
								return (
									<tr className="border-b bg-gray-50 " key={category._id}>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{category.name}
										</th>
										<td className="px-6 py-4">
											<Link
												to={`update/${category._id}`}
												className="mx-2 font-medium text-blue-600 hover:underline"
											>
												Edit
											</Link>
											<button
												className="mx-2 font-medium text-blue-600 hover:underline"
												onClick={() => removeCategory(category._id)}
											>
												Remove
											</button>
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
		</div>
	);
};

export default ManagerCategory;
