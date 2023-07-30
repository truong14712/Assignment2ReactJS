import { Route, Routes } from 'react-router-dom';
import ClientLayout from './layouts/defaultLayout/client';
import Home from './pages/client/Home';
import Detail from './pages/client/Detail';
import Errors from './components/Error';
import AdminLayout from './layouts/defaultLayout/admin';
import ManagerCategory from './pages/admin/ManagerCategory';
import CreateCategory from './pages/admin/CreateCategory';
import Dashboard from './pages/admin/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCategory from './pages/admin/UpdateCategory';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route index path="/" element={<Home />} />
					<Route path="products/detail" element={<Detail />} />
				</Route>
				<Route path="/admin" element={<AdminLayout />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="categories">
						<Route path="" element={<ManagerCategory />} />
						<Route path="create" element={<CreateCategory />} />
						<Route path="update/:id" element={<UpdateCategory />} />
					</Route>
				</Route>
				<Route path="*" element={<Errors />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
