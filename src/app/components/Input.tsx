interface InputProps {
  inputType: 'text' | 'number';
  placeholder: string;
}

export default function Input({ inputType, placeholder }: InputProps) {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className="w-full rounded-sm border border-gray-300/70 bg-transparent p-3 focus:border-gray-300/0 focus:outline-none focus:ring-2 focus:ring-lime-400"
    />
  );
}
