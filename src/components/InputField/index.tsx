import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
	name: string;
	label: string;
	register: UseFormRegister<FieldValues>;
	errors: FieldError | undefined | any;
	type?: string;
	rest?: any;
}
const InputField = ({ name, label, register, errors, type = 'text', ...rest }: InputFieldProps) => {
	return (
		<div className="mb-6">
			<label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 ">
				{label}
			</label>
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				{...register(name)}
				{...rest}
				type={type}
			/>
			{errors && <span className="text-red-600">{errors.message}</span>}
		</div>
	);
};
export default InputField;
