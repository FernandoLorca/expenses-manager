import Link from 'next/link';

interface ButtonProps {
  text: string;
  path: string;
}

export default function Button({ text, path }: ButtonProps) {
  return (
    <Link
      href={path}
      className="rounded-sm border border-lime-400 bg-lime-600 px-4 py-1 text-center transition-opacity duration-200 ease-in-out hover:opacity-75"
    >
      {text}
    </Link>
  );
}
