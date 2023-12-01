import { FieldError } from 'react-hook-form';
import type { InputProps } from './types';

export default function Input({
  inputType,
  placeholder,
  registerFunctionValue,
  registerFunctionOptions,
  registerFunctionErrors,
  registerFunction,
}: InputProps) {
  const errors = registerFunctionErrors[registerFunctionValue] as FieldError;

  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholder}
        {...registerFunction(registerFunctionValue, registerFunctionOptions)}
        className={`w-full rounded-sm border border-gray-300/70 bg-transparent p-3 focus:border-gray-300/0 focus:outline-none focus:ring-2 focus:ring-lime-400`}
      />
      {errors && typeof errors === 'object' && 'message' in errors && (
        <p className="pt-1 text-xs text-rose-600">{errors.message}</p>
      )}
    </div>
  );
}
