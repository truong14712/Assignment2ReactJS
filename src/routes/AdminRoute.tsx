import Dashboard from '~/pages/admin/Dashboard';
import WithAdmin from '~/routes/WithAdmin';
import ManagerCategory from '~/pages/admin/ManagerCategory';
import CreateCategory from '~/pages/admin/CreateCategory';
import UpdateCategory from '~/pages/admin/UpdateCategory';
import ManagerProduct from '~/pages/admin/ManagerProduct';
import CreateProduct from '~/pages/admin/CreateProduct';
import UpdateProduct from '~/pages/admin/UpdateProduct';
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
	{
		path: '/admin/products',
		element: () => <WithAdmin children={<ManagerProduct />} />,
	},
	{
		path: '/admin/products/create',
		element: () => <WithAdmin children={<CreateProduct />} />,
	},
	{
		path: '/admin/products/update/:id',
		element: () => <WithAdmin children={<UpdateProduct />} />,
	},
];
