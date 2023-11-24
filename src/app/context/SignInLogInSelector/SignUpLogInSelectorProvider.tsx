'use client';
import { createContext, useContext, useState } from 'react';
import type { ChildrenContext } from '../types';

interface Selector {
  login: boolean;
  signup: boolean;
}

const SignUpLogInSelectorContext = createContext({
  selector: { login: true, signup: false },
  setSelector: (selector: Selector) => {},
});

export default function SignUpLogInSelectorProvider({
  children,
}: ChildrenContext): JSX.Element {
  const [selector, setSelector] = useState<Selector>({
    login: true,
    signup: false,
  });

  return (
    <SignUpLogInSelectorContext.Provider value={{ selector, setSelector }}>
      {children}
    </SignUpLogInSelectorContext.Provider>
  );
}

export const useSignUpLogInSelector = () =>
  useContext(SignUpLogInSelectorContext);
