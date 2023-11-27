'use client';
import { createClient } from '@supabase/supabase-js';
import { createContext, useState } from 'react';
import type { ChildrenContext } from '../types';
import { useEmailValidation } from '@/app/hooks/useEmailValidation';

interface InputValues {
  email: string;
  password: string;
  repeatedPassword: string;
  errorMessage: string;
  loading: boolean;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const SignUpInFormContext = createContext({
  inputValues: {
    email: '',
    password: '',
    repeatedPassword: '',
    errorMessage: '',
    loading: false,
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
    loading: false,
  });

  const inputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const emailValidationMessage = useEmailValidation(inputValues.email);

  const signInWithEmail = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (emailValidationMessage !== '') {
      setInputValues({
        ...inputValues,
        errorMessage: emailValidationMessage,
      });
      return;
    } else {
      setInputValues({
        ...inputValues,
        errorMessage: '',
      });
    }

    setInputValues({
      ...inputValues,
      loading: true,
    });

    const { data, error } = await supabase.auth.signInWithPassword({
      email: inputValues.email,
      password: inputValues.password,
    });

    console.log(data);
    console.log(error);

    if (error) {
      setInputValues({
        ...inputValues,
        errorMessage: error.message,
      });
      return;
    }

    if (data.user !== null && data.session !== null && error === null) {
      setInputValues({
        email: '',
        password: '',
        repeatedPassword: '',
        errorMessage: '',
        loading: false,
      });
    }
  };

  const signUpNewUser = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (emailValidationMessage !== '') {
      setInputValues({
        ...inputValues,
        errorMessage: emailValidationMessage,
      });
      return;
    } else {
      setInputValues({
        ...inputValues,
        errorMessage: '',
      });
    }

    if (inputValues.password === '' || inputValues.repeatedPassword === '') {
      setInputValues({
        ...inputValues,
        errorMessage: 'Password cannot be empty',
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

    setInputValues({
      ...inputValues,
      loading: true,
    });

    const { data, error } = await supabase.auth.signUp({
      email: inputValues.email,
      password: inputValues.password,
      options: {
        emailRedirectTo: 'http://localhost:3000/expenses',
      },
    });

    console.log(data);
    console.log(error);

    if (data.user === null && data.session === null) {
      setInputValues({
        ...inputValues,
        errorMessage: "Couldn't sign up",
        loading: false,
      });
      return;
    } else {
      setInputValues({
        email: '',
        password: '',
        repeatedPassword: '',
        errorMessage: '',
        loading: false,
      });
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
