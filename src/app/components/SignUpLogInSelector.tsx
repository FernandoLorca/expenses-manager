import { useState } from 'react';

interface Selector {
  login: boolean;
  signup: boolean;
}

export default function SignUpLogInSelector(): JSX.Element {
  const [selector, setSelector] = useState<Selector>({
    login: true,
    signup: false,
  });

  const selectorClass =
    'rounded-sm bg-gray-400 px-1 text-gray-900 transition-all duration-200 ease-in-out';

  const selectorHandler = (selectedOption: 'login' | 'signup') => {
    if (selectedOption === 'login' && !selector.login) {
      setSelector({
        login: true,
        signup: false,
      });
    } else if (selectedOption === 'signup' && !selector.signup) {
      setSelector({
        login: false,
        signup: true,
      });
    }
  };

  return (
    <div className="flex w-full max-w-[7.5rem] justify-between rounded-sm border border-gray-600 bg-gray-900/40 px-1 py-1 text-sm">
      <div
        className={`cursor-pointer hover:opacity-70 ${
          selector.login ? selectorClass : 'ml-1'
        }`}
        onClick={() => selectorHandler('login')}
      >
        Log in
      </div>
      <div
        className={`cursor-pointer hover:opacity-70 ${
          selector.signup ? selectorClass : 'mr-1'
        }`}
        onClick={() => selectorHandler('signup')}
      >
        Sign up
      </div>
    </div>
  );
}
