import Link from 'next/link';

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  path?: string | undefined;
  isActive?: boolean;
  noPath?: boolean;
}

export default function IconButton({
  icon,
  text,
  path,
  isActive = true,
  noPath = false,
}: IconButtonProps) {
  if (noPath || !path) {
    return (
      <div className="flex cursor-pointer flex-col items-center transition-opacity duration-200 ease-in-out hover:opacity-75">
        <div
          className={`rounded-sm border ${
            isActive
              ? 'border-lime-400 bg-lime-600'
              : 'border-gray-300 bg-gray-500'
          } p-2`}
        >
          <div className="text-slate-100">{icon}</div>
        </div>
        <p className="pt-1">{text}</p>
      </div>
    );
  }

  return (
    <Link
      href={path}
      className="flex flex-col items-center transition-opacity duration-200 ease-in-out hover:opacity-75"
    >
      <div
        className={`rounded-sm border ${
          isActive
            ? 'border-lime-400 bg-lime-600'
            : 'border-gray-300 bg-gray-500'
        } p-2`}
      >
        <div className="text-slate-100">{icon}</div>
      </div>
      <p className="pt-1">{text}</p>
    </Link>
  );
}
