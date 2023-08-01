import Detail from '~/pages/client/Detail';
import Home from '~/pages/client/Home';
import Login from '~/pages/client/Login';
import Register from '~/pages/client/Register';

export const clientRoutes = [
	{
		path: '/home',
		element: Home,
	},
	{
		path: '/login',
		element: Login,
	},
	{
		path: '/register',
		element: Register,
	},
	{
		path: 'products/detail/:id',
		element: Detail,
	},
];
