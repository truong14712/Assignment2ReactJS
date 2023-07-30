import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { categorySchema } from '~/schemas/categorySchema';
import InputField from '~/components/InputField';

const CreateCategory = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		// resolver dùng để validate với yup
		resolver: yupResolver(categorySchema),
	});
	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<div className="container w-2/3 mx-auto">
			<h2 className="my-3 text-2xl font-medium text-center">CreateCategory</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="name" label="Name" register={register} errors={errors.name} />
				<button>ADD</button>
			</form>
		</div>
	);
};

export default CreateCategory;
