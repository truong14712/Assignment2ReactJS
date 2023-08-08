import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { keywordProduct } from '~/redux/createAsyncThunk/product';
import { useAppDispatch } from '~/redux/hooks';
const NavBar = () => {
	const [name, setName] = useState('');
	const dispatch = useAppDispatch();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (name === '') {
			toast.error('Không được để rỗng');
		} else {
			dispatch(keywordProduct(name));
		}
	};
	return (
		<>
			<div>
				<ul className="flex">
					<li>
						<Link className="p-3 m-2 font-bold " to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="p-3 m-2 font-bold " to="/products">
							Products
						</Link>
					</li>
					<li>
						<Link className="p-3 m-2 font-bold " to="#">
							About
						</Link>
					</li>
					<li>
						<Link className="p-3 m-2 font-bold " to="#">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<form className="flex mr-3" onSubmit={handleSubmit}>
				<input
					className="w-[280px] h-10 pl-1 border rounded-l-lg outline-none"
					type="text"
					onChange={(e: any) => setName(e.target.value)}
				/>
				<button className="btn_search h-10 bg-[#ECAF82] w-12 rounded-r-lg">
					<i className="fa-solid fa-magnifying-glass" />
				</button>
			</form>
		</>
	);
};

export default NavBar;
