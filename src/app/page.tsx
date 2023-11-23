'use client';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import GradinetTitle from './components/GradinetTitle';
import OAuthSingIn from './components/OAuthSingIn';
import Input from './components/Input';
import FormButton from './components/FormButton';

interface InputValues {
  email: string;
  password: string;
  errorMessage: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function Home(): JSX.Element {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: '',
    password: '',
    errorMessage: '',
  });

  const inputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  async function signInWithEmail(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: inputValues.email,
        password: inputValues.password,
      });

      console.log(error);

      if (error) {
        setInputValues({
          ...inputValues,
          errorMessage: error.message,
        });
      }

      if (data.user !== null && data.session !== null && error === null) {
        setInputValues({
          email: '',
          password: '',
          errorMessage: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex flex-col items-center md:h-screen">
      <GradinetTitle text="Expenses manager" />
      <div className="my-5 flex w-full max-w-lg flex-col items-center rounded-sm border bg-gray-950/20">
        <div className="flex flex-col items-center gap-5 py-8 md:flex-row">
          <OAuthSingIn icon={<FaGoogle />} text="Log in with Google" />
          <OAuthSingIn icon={<FaFacebook />} text="Log in with Facebook" />
        </div>
        <hr className="w-60" />
        <form className="px-5 py-8" onSubmit={signInWithEmail}>
          <div className="flex flex-col gap-2">
            <label className="sr-only">Email</label>
            <div className="md:w-[20rem]">
              <Input
                inputType="email"
                placeholder="Email"
                inputName="email"
                isError={inputValues.errorMessage.length > 0 ? true : false}
                inputValue={inputValues.email}
                onChangeEvent={inputValueHandler}
              />
            </div>
            <label className="sr-only">Password</label>
            <Input
              inputType="password"
              placeholder="Password"
              inputName="password"
              isError={inputValues.errorMessage.length > 0 ? true : false}
              inputValue={inputValues.password}
              onChangeEvent={inputValueHandler}
            />
          </div>
          <div className="pt-3">
            <FormButton type="submit" text="Log in" />
            <p
              className={`pt-2 text-center text-sm text-rose-600 ${
                inputValues.errorMessage.length > 0 ? 'block' : 'hidden'
              }`}
            >
              {inputValues.errorMessage}
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
