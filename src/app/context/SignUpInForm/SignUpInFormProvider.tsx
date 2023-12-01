'use client';
import { createContext } from 'react';
import type { ChildrenContext } from '../types';

export const SignUpInFormContext = createContext({
  signInWithEmail: (event: React.FormEvent<HTMLFormElement>) => {},
  signUpNewUser: (event: React.FormEvent<HTMLFormElement>) => {},
});

export default function SignUpInFormProvider({ children }: ChildrenContext) {
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
    <SignUpInFormContext.Provider value={{ signInWithEmail, signUpNewUser }}>
      {children}
    </SignUpInFormContext.Provider>
  );
}
