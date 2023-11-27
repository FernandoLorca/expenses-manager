'use client';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useSignUpLogInSelector } from './context/SignInLogInSelector/SignUpLogInSelectorProvider';
import GradinetTitle from './components/GradinetTitle';
import OAuthSingIn from './LoginComponents/OAuthSingIn';
import SignUpLogInSelector from './LoginComponents/SignUpLogInSelector';
import SignInForm from './LoginComponents/SignInForm';
import SignUpForm from './LoginComponents/SignUpForm';

export default function Home(): JSX.Element {
  const { selector } = useSignUpLogInSelector();

  return (
    <main className="flex h-screen flex-col items-center">
      <GradinetTitle text="Expenses manager" />
      <div className="my-5 flex w-full max-w-lg flex-col rounded-sm border bg-gray-950/20 p-5">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <OAuthSingIn icon={<FaGoogle />} text="Log in with Google" />
          <OAuthSingIn icon={<FaFacebook />} text="Log in with Facebook" />
        </div>
        <div className="flex justify-center py-5">
          <hr className="w-72 opacity-50" />
        </div>
        <div className="mb-5 flex justify-center">
          <SignUpLogInSelector />
        </div>

        {selector.login ? <SignInForm /> : <SignUpForm />}
      </div>
    </main>
  );
}
