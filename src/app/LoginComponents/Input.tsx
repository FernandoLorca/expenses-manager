import {
  UseFormRegister,
  FieldErrors,
  FieldError,
  FieldValues,
} from 'react-hook-form';

interface RegisterFunctionOptionsTypes {
  required?: {
    value: boolean;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: string) => boolean | string | Promise<boolean | string>;
}

interface InputProps {
  inputType: 'text' | 'number' | 'password' | 'email';
  placeholder: string;
  registerFunctionValue: string;
  registerFunctionOptions: RegisterFunctionOptionsTypes;
  registerFunctionErrors: FieldErrors<FieldValues>;
  registerFunction: UseFormRegister<FieldValues>;
}

export default function Input({
  inputType,
  placeholder,
  registerFunctionValue,
  registerFunctionOptions,
  registerFunctionErrors,
  registerFunction,
}: InputProps) {
  const error = registerFunctionErrors[registerFunctionValue] as FieldError;

  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholder}
        {...registerFunction(registerFunctionValue, registerFunctionOptions)}
        className={`w-full rounded-sm border border-gray-300/70 bg-transparent p-3 focus:border-gray-300/0 focus:outline-none focus:ring-2 focus:ring-lime-400`}
      />
      {error && typeof error === 'object' && 'message' in error && (
        <p className="pt-1 text-xs text-rose-600">{error.message}</p>
      )}
    </div>
  );
}
