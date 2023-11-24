'use client';
import { createClient } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react';
import type { ChildrenContext } from '../types';

interface InputValues {
  email: string;
  password: string;
  repeatedPassword: string;
  errorMessage: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const SignUpInFormContext = createContext({
  inputValues: {
    email: '',
    password: '',
    repeatedPassword: '',
    errorMessage: '',
  },
  inputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => {},
  signInWithEmail: (event: React.FormEvent<HTMLFormElement>) => {},
  signUpNewUser: (event: React.FormEvent<HTMLFormElement>) => {},
});

export default function SignUpInFormProvider({ children }: ChildrenContext) {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: '',
    password: '',
    repeatedPassword: '',
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

  const signInWithEmail = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: inputValues.email,
        password: inputValues.password,
      });

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
          repeatedPassword: '',
          errorMessage: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUpNewUser = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(inputValues.email)) {
      setInputValues({
        ...inputValues,
        errorMessage: 'Invalid email',
      });
      return;
    } else {
      setInputValues({
        ...inputValues,
        errorMessage: '',
      });
    }

    if (inputValues.password !== inputValues.repeatedPassword) {
      setInputValues({
        ...inputValues,
        errorMessage: 'Passwords do not match',
      });
      return;
    } else {
      setInputValues({
        ...inputValues,
        errorMessage: '',
      });
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: inputValues.email,
        password: inputValues.password,
        options: {
          emailRedirectTo: 'http://localhost:3000/expenses',
        },
      });

      if (error) {
        setInputValues({
          ...inputValues,
          errorMessage: error.message,
        });
      } else {
        setInputValues({
          email: '',
          password: '',
          repeatedPassword: '',
          errorMessage: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpInFormContext.Provider
      value={{ inputValues, inputValueHandler, signInWithEmail, signUpNewUser }}
    >
      {children}
    </SignUpInFormContext.Provider>
  );
}

export const useSignUpInForm = () => useContext(SignUpInFormContext);
