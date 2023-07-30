import { Route, Routes } from 'react-router-dom';
import ClientLayout from './layouts/defaultLayout/client';
import Home from './pages/client/Home';
import Detail from './pages/client/Detail';
import Errors from './components/Error';
import AdminLayout from './layouts/defaultLayout/admin';
import ManagerCategory from './pages/admin/ManagerCategory';
import CreateCategory from './pages/admin/CreateCategory';
import Dashboard from './pages/admin/Dashboard';
import Loading from './components/Loading';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route index path="/" element={<Home />} />
					<Route path="/detail" element={<Detail />} />
				</Route>
				<Route path="/admin" element={<AdminLayout />}>
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/category" element={<ManagerCategory />} />
					<Route path="/admin/category/create" element={<CreateCategory />} />
				</Route>
				<Route path="*" element={<Errors />} />
			</Routes>
		</>
	);
}

export default App;
