interface FormButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'submit' | 'button';
}

export default function FormButton({ text, onClick, type }: FormButtonProps) {
  return (
    <button
      className="w-full rounded-sm border border-lime-400 bg-lime-600 px-4 py-1 text-center transition-opacity duration-200 ease-in-out hover:opacity-75"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
