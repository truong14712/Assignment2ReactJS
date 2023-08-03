import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '~/redux/hooks';
import { logout } from '~/redux/slice/authSlide';

const SideBar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const Logout = () => {
		dispatch(logout());
		navigate('/login');
	};
	return (
		<div>
			<aside
				id="sidebar-multi-level-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
					<ul className="space-y-2 font-medium">
						<li>
							<Link
								to={'/admin/dashboard'}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 21"
								>
									<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
									<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
								</svg>
								<span className="ml-3">Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								to={'/admin/products'}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 20"
								>
									<path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">Products</span>
							</Link>
						</li>
						<li>
							<Link
								to={'/admin/categories'}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<i className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 fa-solid fa-lines-leaning group-hover:text-gray-900 "></i>
								<span className="flex-1 ml-3 whitespace-nowrap">Categories</span>
							</Link>
						</li>
						<li onClick={() => Logout()}>
							<a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 16"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
									/>
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			<div className="p-4 sm:ml-64">
				<Outlet />
			</div>
		</div>
	);
};

export default SideBar;
