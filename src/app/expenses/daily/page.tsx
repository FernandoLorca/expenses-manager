import Button from '@/app/components/Button';
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <div className="p-5">
        <div className="flex justify-between">
          <div className="h-10 w-10 max-w-sm rounded-sm border border-slate-200 bg-gray-400"></div>
          <div className="h-10 w-10 max-w-sm rounded-sm border border-slate-200 bg-gray-400"></div>
          <div className="h-10 w-10 max-w-sm rounded-sm border border-slate-200 bg-gray-400"></div>
          <div className="h-10 w-10 max-w-sm rounded-sm border border-slate-200 bg-gray-400"></div>
          <div className="h-10 w-10 max-w-sm rounded-sm border border-slate-200 bg-gray-400"></div>
        </div>
        <div className="pt-3 text-center">
          <Link href="/expenses/monthly">Monthly expenses</Link>
        </div>
      </div>
      <Button text="Add expense" path="/expenses/add" />
      <div>Lista de gastos</div>
    </div>
  );
}
