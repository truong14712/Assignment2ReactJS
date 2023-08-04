import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '~/layouts/components/client/Navbar';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { authSelector, cartSelector } from '~/redux/selector';
import { logout } from '~/redux/slice/authSlide';
const Header = () => {
	const [off, setOff] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isAuthenticated, auth } = useAppSelector(authSelector);
	const { carts } = useAppSelector(cartSelector);
	const Logout = () => {
		dispatch(logout());
		navigate('/login');
	};
	return (
		<header>
			<div className="w-[1290px] mx-auto flex items-center py-3 ">
				<div className="w-[310px]">
					<Link to="#" className="">
						<img
							src="https://i.pinimg.com/474x/7b/58/e6/7b58e64207dc272c7bf80d8dfc8090b3.jpg"
							alt=""
							className="h-[50px] w-[60px] rounded-sm"
						/>
					</Link>
				</div>
				<NavBar />
				{isAuthenticated && (
					<div className="flex items-center ml-auto w-max">
						<button className="relative px-3" onClick={() => setOff(!off)}>
							Hello: {auth?.name}
							{off && (
								<div className="border absolute top-8 right-0  bg-gray-50 w-[200px] p-3 z-10">
									<ul className="">
										{carts.length > 0 && (
											<li className="px-1 py-2">
												<Link className={''} to="/order">
													<i className="mx-2 fa-solid fa-money-check"></i>
													Checkout
												</Link>
											</li>
										)}
										<Link className="px-1 py-2" to={`/order/history/${auth._id}`}>
											<i className="fa-solid fa-clock-rotate-left"></i>
											<span className="mx-2">History</span>
										</Link>
										<li className="px-1 py-2">
											<button className={''} onClick={() => Logout()}>
												<i className="fa-solid fa-arrow-right-from-bracket"></i>
												<span className="mx-2">Logout</span>
											</button>
										</li>
									</ul>
								</div>
							)}
						</button>
					</div>
				)}
				{!isAuthenticated && (
					<div className="relative ml-3 cursor-pointer">
						<ul className="flex items-center">
							<Link className="p-2 m-1" to="/register">
								Đăng ký
							</Link>
							<Link className="p-2 m-1" to="/login">
								Đăng nhập
							</Link>
						</ul>
					</div>
				)}
				{/* WithList and Cart */}
				<Link to={'cart'}>
					<div className="relative ml-3 text-2xl cursor-pointer">
						<i className="fa-solid fa-cart-shopping" />
						<span className="absolute w-4 h-4 text-xs text-center text-white bg-red-500 rounded-full -top-1 -right-2">
							{carts ? carts?.length : '0'}
						</span>
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
