import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '~/schemas/';
import InputField from '~/components/InputField';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { Register as ActionRegister } from '~/redux/createAsyncThunk/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { authSelector } from '~/redux/selector';
import { useEffect } from 'react';

const Register = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isAuthenticated } = useAppSelector(authSelector);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(auth.registerSchema),
	});
	const onSubmit = (data: any) => {
		dispatch(ActionRegister(data)).then((res) => {
			if (res.payload?.message) {
				toast.success(res.payload?.message);
				navigate('/login');
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
			<h2 className="my-3 text-2xl font-medium text-center">Register</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="name" label="Name" register={register} errors={errors.name} />
				<InputField name="email" label="Email" register={register} errors={errors.email} />
				<InputField name="password" label="Password" register={register} errors={errors.password} type="password" />
				<InputField
					name="confirmPassword"
					label="confirmPassword"
					register={register}
					errors={errors.confirmPassword}
					type="password"
				/>
				<div className="flex justify-center y-center items-">
					<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
						Đăng ký
					</button>
					<Link
						to={'/login'}
						className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
					>
						Đăng nhập
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
