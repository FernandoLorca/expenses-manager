import Input from '../LoginComponents/Input';

interface FormProps {
  inputs: JSX.Element;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formButton: JSX.Element;
}

export default function Form({
  inputs,
  onSubmit,
  formButton,
}: FormProps): JSX.Element {
  return (
    <form onSubmit={signInWithEmail}>
      <div className="flex flex-col gap-2">{inputs}</div>
      <div className="pt-3">
        <FormButton type="submit" text="Sign in" />
        <p
          className={`pt-2 text-center text-sm text-rose-600 ${
            inputValues.errorMessage.length > 0 ? 'block' : 'hidden'
          }`}
        >
          {inputValues.errorMessage}
        </p>
      </div>
    </form>
  );
}
