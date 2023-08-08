import { useAppSelector } from '~/redux/hooks';
import { productSelector } from '~/redux/selector';
import { Link } from 'react-router-dom';
import { IProduct } from '~/interface/product';

const Search = () => {
	const { keyword } = useAppSelector(productSelector);

	return (
		<>
			<h2 className="mt-8 mb-4 text-2xl font-medium text-center">TÌM KIẾM ĐƯỢC</h2>
			<div className="flex flex-wrap items-center">
				{keyword?.map((product: IProduct) => {
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
								<h3 className="mb-1 text-base tracking-widest text-gray-500 title-font">{product.price}$</h3>
							</div>
						</div>
					);
				})}
			</div>
			<br />
		</>
	);
};

export default Search;
