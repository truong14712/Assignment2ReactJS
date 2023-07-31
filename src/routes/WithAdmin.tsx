import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '~/redux/selector';
import { ReactNode } from 'react';
type WithAdminProps = {
	children: ReactNode;
};
const WithAdmin = ({ children }: WithAdminProps) => {
	const { isLoading, isAuthenticated, auth } = useSelector(authSelector);
	console.log(isLoading);
	if (isLoading === false) {
		if (!isAuthenticated) {
			return <Navigate to="/login" replace />;
		} else if (auth?.isAdmin === false) {
			return <Navigate to="/" replace={true} />;
		}
	}
	return children;
};

export default WithAdmin;
