import Cart from '~/pages/client/Cart';
import WithAuth from './WithAuth';

export const privateRoutes = [
	{
		path: '/cart',
		element: () => <WithAuth children={<Cart />} />,
	},
];
