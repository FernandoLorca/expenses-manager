interface ExpenseProps {
  expense: string;
  category: string;
  amount: number;
}

export default function Expense({ expense, category, amount }: ExpenseProps) {
  return (
    <div className="mb-10 flex justify-around gap-8 border-b border-gray-100/20">
      <div className="grow pb-2">{expense}</div>
      <div className="">{category}</div>
      <div className="">${amount}</div>
    </div>
  );
}
