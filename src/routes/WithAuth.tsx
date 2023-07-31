import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '~/redux/selector';
import { ReactNode } from 'react';
type WithAuthProps = {
	children: ReactNode;
};
const WithAuth = ({ children }: WithAuthProps) => {
	const { isLoading, isAuthenticated } = useSelector(authSelector);
	if (isLoading === false) {
		if (!isAuthenticated) {
			return <Navigate to="/login" replace />;
		}
		return children;
	}
};

export default WithAuth;
