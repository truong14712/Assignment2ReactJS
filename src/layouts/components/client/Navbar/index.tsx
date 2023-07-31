import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<>
			<div>
				<ul className="flex">
					<li>
						<Link className="p-3 m-2 font-bold " to="#">
							Home
						</Link>
					</li>
					<li>
						<Link className="p-3 m-2 font-bold " to="#">
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
			<form className="flex mr-3">
				<input className="w-[280px] h-10 pl-1 border rounded-l-lg outline-none" type="text" />
				<button className="btn_search h-10 bg-[#ECAF82] w-12 rounded-r-lg">
					<i className="fa-solid fa-magnifying-glass" />
				</button>
			</form>
		</>
	);
};

export default NavBar;
