import { redirect } from 'next/navigation';

export default function Home(): JSX.Element {
  redirect('/expenses');

  return <h1>Expenses manager</h1>;
}
