import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import { IProduct } from '~/interface/product';
import { getAllProduct } from '~/redux/createAsyncThunk/product';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { productSelector } from '~/redux/selector';
import LinesEllipsis from 'react-lines-ellipsis';
import ReactPaginate from 'react-paginate';
import SimpleSlider from '../Components/Slider';

const Home = () => {
	const dispatch = useAppDispatch();
	const { products, isLoading } = useAppSelector(productSelector);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		dispatch(getAllProduct());
	}, [dispatch]);

	const itemsPerPage = 8;
	const totalPages = Math.ceil(products.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const handlePageChange = (event: any) => {
		const selected = event.selected;
		setCurrentPage(selected + 1);
	};
	return (
		<div>
			<SimpleSlider />
			{isLoading === false && (
				<section className="min-h-screen text-gray-600 body-font ">
					<div className="container px-5 py-10 mx-auto">
						<div className="flex flex-wrap -m-4">
							{products &&
								products.slice(startIndex, endIndex).map((product: IProduct) => {
									return (
										<div className="w-full p-4 md:w-1/2 lg:w-1/4 hover:bg-slate-100" key={product._id}>
											<Link
												to={`/products/detail/${product._id}`}
												className="relative block h-48 overflow-hidden rounded"
											>
												<img
													alt={product.name}
													className="block object-cover object-center h-full cursor-pointer"
													src={product.image}
												/>
											</Link>
											<div className="mt-4">
												<h2 className="text-lg font-medium text-gray-900 title-font">{product.name}</h2>
												<h3 className="mb-1 text-base tracking-widest text-gray-500 title-font">
													{product.price}$
												</h3>
												<LinesEllipsis
													text={product.description}
													maxLine={3}
													ellipsis="..."
													trimRight
													basedOn="letters"
													component="p"
												/>
											</div>
										</div>
									);
								})}
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
				</section>
			)}
			{isLoading === true && <Loading />}
		</div>
	);
};

export default Home;
