import FormButton from '../LoginComponents/FormButton';
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
    <form>
      <div className="flex flex-col gap-2">{inputs}</div>
      <div className="pt-3">
        <FormButton type="submit" text="Sign in" loading={false} />
      </div>
    </form>
  );
}
