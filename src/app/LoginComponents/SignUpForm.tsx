import { useForm } from 'react-hook-form';
import FormButton from './FormButton';
import Input from './Input';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <Input
          inputType="email"
          placeholder="Email"
          registerFunctionValue="email"
          registerFunctionOptions={{
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email',
            },
          }}
          registerFunctionErrors={errors}
          registerFunction={register}
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <Input
          inputType="password"
          placeholder="Password"
          registerFunctionValue="password"
          registerFunctionOptions={{
            required: {
              value: true,
              message: 'This field is required',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
            maxLength: {
              value: 20,
              message: 'Password must be less than 20 characters long',
            },
          }}
          registerFunctionErrors={errors}
          registerFunction={register}
        />
        <label className="sr-only" htmlFor="repeatPassword">
          Repeat password
        </label>
        <Input
          inputType="password"
          placeholder="Repeat password"
          registerFunctionValue="repeatPassword"
          registerFunctionOptions={{
            required: {
              value: true,
              message: 'This field is required',
            },
            validate: value =>
              value === watch('password') || 'Passwords do not match',
          }}
          registerFunctionErrors={errors}
          registerFunction={register}
        />
      </div>
      <div className="pt-3">
        <FormButton type="submit" text="Sign up" loading={false} />
      </div>
    </form>
  );
}
