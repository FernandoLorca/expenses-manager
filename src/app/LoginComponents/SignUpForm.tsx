import { useContext } from 'react';
import { SignUpInFormContext } from '../context/SignUpInForm/SignUpInFormProvider';
import FormButton from './FormButton';
import Input from './Input';

export default function SignUpForm() {
  const { inputValues, inputValueHandler, signUpNewUser } =
    useContext(SignUpInFormContext);

  return (
    <form onSubmit={signUpNewUser}>
      <div className="flex flex-col gap-2">
        <label className="sr-only">Email</label>
        <Input
          inputType="email"
          placeholder="Email"
          inputName="email"
          inputValue={inputValues.email}
          onChangeEvent={inputValueHandler}
        />
        <label className="sr-only">Password</label>
        <Input
          inputType="password"
          placeholder="Password"
          inputName="password"
          inputValue={inputValues.password}
          onChangeEvent={inputValueHandler}
        />
        <Input
          inputType="password"
          placeholder="Repeat password"
          inputName="repeatedPassword"
          inputValue={inputValues.repeatedPassword}
          onChangeEvent={inputValueHandler}
        />
      </div>
      <div className="pt-3">
        <FormButton
          type="submit"
          text="Sign up"
          loading={inputValues.loading}
        />
        <p
          className={`pt-2 text-center text-sm text-rose-600 ${
            inputValues.errorMessage.length > 0 ? 'block' : 'hidden'
          }`}
        >
          {inputValues.errorMessage}
        </p>
      </div>
    </form>
  );
}
