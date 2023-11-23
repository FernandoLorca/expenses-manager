interface InputProps {
  inputType: 'text' | 'number' | 'password' | 'email';
  placeholder: string;
  inputName: string;
  inputValue: string;
  isError: boolean;
  onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputType,
  placeholder,
  inputName,
  inputValue,
  isError = false,
  onChangeEvent,
}: InputProps) {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      name={inputName}
      value={inputValue}
      onChange={onChangeEvent}
      className={`w-full rounded-sm bg-transparent p-3 focus:border-gray-300/0 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
        isError ? 'border border-rose-600' : 'border border-gray-300/70'
      }`}
    />
  );
}
