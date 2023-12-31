interface CategoryButtonProps {
  icon: React.ReactNode;
  text?: string;
  isActive?: boolean;
}

export default function CategoryButton({
  icon,
  text,
  isActive = true,
}: CategoryButtonProps) {
  return (
    <div className="flex flex-col items-center transition-opacity duration-200 ease-in-out hover:opacity-75">
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
