import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '~/layouts/components/client/Navbar';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { authSelector } from '~/redux/selector';
import { logout } from '~/redux/slice/authSlide';
const Header = () => {
	const [off, setOff] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isAuthenticated, auth } = useAppSelector(authSelector);
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
							src="https://images.pexels.com/photos/3654869/pexels-photo-3654869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
							className="h-[50px] w-[60px] rounded-md"
						/>
					</Link>
				</div>
				<NavBar />
				{isAuthenticated && (
					<div className="flex items-center ml-auto w-max">
						<button className="relative px-3 avatar" onClick={() => setOff(!off)}>
							Hello: {auth?.name}
							{off && (
								<div className="border absolute top-14 right-0 user_menu z-10 bg-gray-50 w-[200px] p-3">
									<ul className="">
										<li className="px-1 py-2">
											<Link className={''} to="#">
												Checkout
											</Link>
										</li>
										<li className="px-1 py-2">
											<button className={''} onClick={() => Logout()}>
												Logout
											</button>
										</li>
									</ul>
								</div>
							)}
						</button>
						{/* <div className="relative m-3 text-2xl cursor-pointer ">
							<i className="fa-regular fa-heart" />
							<span className="absolute w-4 h-4 text-xs text-center text-white bg-red-500 rounded-full -top-1 -right-2">
								0
							</span>
						</div> */}
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
				<div className="relative ml-3 text-2xl cursor-pointer">
					<i className="fa-solid fa-cart-shopping" />
					<span className="absolute w-4 h-4 text-xs text-center text-white bg-red-500 rounded-full -top-1 -right-2">
						0
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
