import { Route, Routes } from 'react-router-dom';
import ClientLayout from './layouts/defaultLayout/client';
import Home from './pages/client/Home';
import Errors from './components/Error';
import AdminLayout from './layouts/defaultLayout/admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Admin, Client, Private } from './routes';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route index path="/" element={<Home />} />
					{Client.clientRoutes.map((route, index) => {
						const Page = route.element;
						return <Route key={index} path={route.path} element={<Page />} />;
					})}
					{Private.privateRoutes.map((route, index) => {
						const Page = route.element;
						return <Route key={index} path={route.path} element={<Page />} />;
					})}
				</Route>
				<Route element={<AdminLayout />}>
					{Admin.adminRoutes.map((route, index) => {
						const Page = route.element;
						return <Route key={index} path={route.path} element={<Page />} />;
					})}
				</Route>
				<Route path="*" element={<Errors />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
