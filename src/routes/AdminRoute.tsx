import Dashboard from '~/pages/admin/Dashboard';
import WithAdmin from '~/routes/WithAdmin';
import ManagerCategory from '~/pages/admin/ManagerCategory';
import CreateCategory from '~/pages/admin/CreateCategory';
import UpdateCategory from '~/pages/admin/UpdateCategory';
export const adminRoutes = [
	{
		path: '/admin/dashboard',
		element: () => <WithAdmin children={<Dashboard />} />,
	},
	{
		path: '/admin/categories',
		element: () => <WithAdmin children={<ManagerCategory />} />,
	},
	{
		path: '/admin/categories/create',
		element: () => <WithAdmin children={<CreateCategory />} />,
	},
	{
		path: '/admin/categories/update/:id',
		element: () => <WithAdmin children={<UpdateCategory />} />,
	},
];
