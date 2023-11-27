import { PiSpinner } from 'react-icons/pi';

interface FormButtonProps {
  text: string;
  type: 'submit' | 'button';
  loading: boolean;
}

export default function FormButton({ text, type, loading }: FormButtonProps) {
  return (
    <button
      className={`w-full rounded-sm border border-lime-400 bg-lime-600 px-4 py-1 text-center transition-opacity duration-200 ease-in-out hover:opacity-75 ${
        loading ? 'cursor-wait' : ''
      }`}
      type={type}
    >
      {loading ? (
        <div className="flex justify-center text-2xl">
          <PiSpinner className="animate-spin" />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
