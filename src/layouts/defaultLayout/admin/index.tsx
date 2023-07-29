import { Outlet } from 'react-router';
import Footer from '~/layouts/components/admin/Footer';
import Header from '~/layouts/components/admin/Header';
const AdminLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default AdminLayout;
