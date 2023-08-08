import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '~/schemas/';
import InputField from '~/components/InputField';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { Login as ActionLogin } from '~/redux/createAsyncThunk/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { authSelector } from '~/redux/selector';
import instance from '~/api/instance';

const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isAuthenticated } = useAppSelector(authSelector);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(auth.loginSchema),
	});
	const onSubmit = (data: any) => {
		dispatch(ActionLogin(data)).then((res) => {
			if (res.payload) {
				instance.defaults.headers.common['Authorization'] = `Bearer ${res.payload.accessToken}`;
				toast.success(res.payload.message);
				if (res.payload.isAdmin) {
					navigate('/admin');
				} else if (res.payload === 'Email không tồn tại' || res.payload === 'Mật khẩu không chính xác') {
					navigate('/login');
				} else {
					navigate('/');
				}
			}
		});
	};
	useEffect(() => {
		if (isAuthenticated === true) {
			navigate('/');
		}
	}, [navigate, isAuthenticated]);
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center">Login</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="email" label="Email" register={register} errors={errors.email} />
				<InputField name="password" label="Password" register={register} errors={errors.password} type='password'/>
				<div className="flex justify-center y-center items-">
					<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
						Đăng nhập
					</button>
					<Link
						to={'/register'}
						className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
					>
						Đăng ký
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
