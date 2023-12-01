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

export interface InputProps {
  inputType: 'text' | 'number' | 'password' | 'email';
  placeholder: string;
  registerFunctionValue: string;
  registerFunctionOptions: RegisterFunctionOptionsTypes;
  registerFunctionErrors: FieldErrors<FieldValues>;
  registerFunction: UseFormRegister<FieldValues>;
}
