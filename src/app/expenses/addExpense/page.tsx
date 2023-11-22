import Navbar from '@/app/components/Navbar';
import AddExpenseForm from './components/AddExpenseForm';

export default function page() {
  return (
    <main>
      <Navbar />
      <AddExpenseForm />
    </main>
  );
}
