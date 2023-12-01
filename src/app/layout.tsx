import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import SignUpLogInSelectorProvider from './context/SignInLogInSelector/SignUpLogInSelectorProvider';
import './globals.css';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Expenses manager',
  description: 'Manage your expenses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-[#333] to-[#222] text-white`}
      >
        <div className="px-5">
          <SignUpLogInSelectorProvider>{children}</SignUpLogInSelectorProvider>
        </div>
      </body>
    </html>
  );
}
