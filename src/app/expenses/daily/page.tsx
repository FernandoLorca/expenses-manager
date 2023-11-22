import Link from 'next/link';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/Navbar';
import Expense from './components/Expense';

export default function page() {
  return (
    <main>
      <Navbar />
      <div className="p-5">
        <div className="flex flex-col items-center">
          <h2 className="py-2">October</h2>
          <div className="flex w-full max-w-2xl items-center justify-between">
            <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
              <p className="flex h-full items-center justify-center text-sm">
                01/10
              </p>
            </div>
            <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
              <p className="flex h-full items-center justify-center text-sm">
                02/10
              </p>
            </div>
            <div className="rounded-lg border-8 border-gray-300/20">
              <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
                <p className="flex h-full items-center justify-center text-sm">
                  03/10
                </p>
              </div>
            </div>
            <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
              <p className="flex h-full items-center justify-center text-sm">
                04/10
              </p>
            </div>
            <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
              <p className="flex h-full items-center justify-center text-sm">
                05/10
              </p>
            </div>
            <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
              <p className="flex h-full items-center justify-center text-sm">
                06/10
              </p>
            </div>
            <div className="h-10 w-10 max-w-sm rounded-sm border border-gray-300 bg-gray-500">
              <p className="flex h-full items-center justify-center text-sm">
                07/10
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3 text-center">
          <Link
            href="/expenses/monthly"
            className="underline decoration-lime-600 underline-offset-2"
          >
            Monthly expenses
          </Link>
        </div>
      </div>
      <div className="flex justify-center p-5">
        <Button text="Add expense" path="/expenses/addExpense" />
      </div>
      <div className="px-5">
        <Expense expense="Tomato" category="Food" amount={10} />
        <Expense expense="Meet" category="Food" amount={10} />
        <Expense expense="Github copilot" category="Food" amount={10} />
        <Expense expense="Netflix" category="Food" amount={10} />
      </div>
    </main>
  );
}
