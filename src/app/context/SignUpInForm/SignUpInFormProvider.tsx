'use client';
import { createContext, useState } from 'react';
import type { ChildrenContext } from '../types';

interface InputValues {
  email: string;
  password: string;
  repeatedPassword: string;
  errorMessage: string;
  loading: boolean;
}

interface Session {
  session: {
    access_token: string | undefined;
    expires_at: number | undefined;
    expires_in: number | undefined;
    refresh_token: string | undefined;
    token_type: string | undefined;
  };
}

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

  const signInWithEmail = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
  };

  const signUpNewUser = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
  };

  return (
    <SignUpInFormContext.Provider
      value={{ inputValues, inputValueHandler, signInWithEmail, signUpNewUser }}
    >
      {children}
    </SignUpInFormContext.Provider>
  );
}
