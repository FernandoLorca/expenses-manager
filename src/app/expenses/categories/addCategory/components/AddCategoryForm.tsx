'use client';
import { useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import GradinetTitle from '@/app/components/GradinetTitle';
import Input from '@/app/LoginComponents/Input';
import FormButton from '@/app/LoginComponents/FormButton';
import IconCategories from './IconCategories';

export default function AddCategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <GradinetTitle text="Add category" />
      <div className="flex justify-center py-5">
        <div className="w-full max-w-lg">
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <Input
            inputType="text"
            placeholder="Category name"
            registerFunctionValue="category"
            registerFunctionOptions={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
            registerFunctionErrors={errors}
            registerFunction={register}
          />
        </div>
      </div>
      <h2 className="pt-5 text-center text-2xl">Select icon</h2>
      <IconCategories />
      <div className="flex justify-center pt-5">
        <FormButton
          text="Add category"
          type="submit"
          loading={false}
          onClick={() => {
            redirect('/expenses/addExpense');
          }}
        />
      </div>
    </form>
  );
}
