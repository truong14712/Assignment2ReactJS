import { Outlet } from 'react-router';
import Footer from '~/layouts/components/client/Footer';
import Header from '~/layouts/components/client/Header';
const ClientLayout = () => {
	return (
		<div className="container mx-auto w-[1280px]">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default ClientLayout;
