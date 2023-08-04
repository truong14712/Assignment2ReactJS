import Cart from '~/pages/client/Cart';
import WithAuth from './WithAuth';
import Order from '~/pages/client/Order';
import HistoryOrder from '~/pages/client/HistoryOrder';

export const privateRoutes = [
	{
		path: '/cart',
		element: () => <WithAuth children={<Cart />} />,
	},
	{
		path: '/order',
		element: () => <WithAuth children={<Order />} />,
	},
	{
		path: '/order/history/:userId',
		element: () => <WithAuth children={<HistoryOrder />} />,
	},
];
