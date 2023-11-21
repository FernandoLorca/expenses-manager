import Link from 'next/link';

interface IconButtonProps {
  icon: React.ReactNode;
  text: string;
}

export default function IconButton({ icon, text }: IconButtonProps) {
  return (
    <Link
      href="/expenses/daily"
      className="flex flex-col items-center hover:opacity-75"
    >
      <div className="rounded-sm border border-lime-400 bg-lime-600 p-2">
        <div className="text-slate-100">{icon}</div>
      </div>
      <p className="pt-1">{text}</p>
    </Link>
  );
}
