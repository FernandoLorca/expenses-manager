'use client';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import GradinetTitle from './components/GradinetTitle';
import OAuthSingIn from './components/OAuthSingIn';
import Input from './components/Input';
import FormButton from './components/FormButton';

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-center md:h-screen">
      <GradinetTitle text="Expenses manager" />
      <div className="my-5 flex w-full max-w-lg flex-col items-center rounded-sm border bg-gray-950/20">
        <div className="flex flex-col items-center gap-5 py-8 md:flex-row">
          <OAuthSingIn icon={<FaGoogle />} text="Log in with Google" />
          <OAuthSingIn icon={<FaFacebook />} text="Log in with Google" />
        </div>
        <hr className="w-60" />
        <form className="px-5 py-8">
          <div className="flex flex-col gap-2">
            <label className="sr-only">Email</label>
            <div className="md:w-[20rem]">
              <Input inputType="email" placeholder="Email" />
            </div>
            <label className="sr-only">Password</label>
            <Input inputType="password" placeholder="Password" />
          </div>
          <div className="pt-3">
            <FormButton
              type="submit"
              onClick={() => {
                console.log('submit');
              }}
              text="Log in"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
