import { Outlet } from 'react-router';
import Footer from '~/layouts/components/client/Footer';
import Header from '~/layouts/components/client/Header';
const ClientLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default ClientLayout;
