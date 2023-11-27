'use client';
import { HiHome } from 'react-icons/hi';
import { FaBowlFood } from 'react-icons/fa6';
import { IoMdBicycle } from 'react-icons/io';
import type { FormSectionsType } from '../types';
import { useState } from 'react';
import FormButton from '@/app/LoginComponents/FormButton';
import Input from '@/app/LoginComponents/Input';
import DirectionArrows from './DirectionArrows';
import CategoryButton from '@/app/components/CategoryButton';
import Button from '@/app/components/Button';

export default function AddExpenseForm(): JSX.Element {
  const [formSections, setFormSections] = useState<FormSectionsType>({
    addExpense: true,
    selectCategory: false,
    addAmount: false,
  });

  return (
    <form className="flex h-screen items-center justify-center">
      {formSections.addExpense && (
        <div className="flex flex-col">
          <h2 className="text-center text-5xl font-bold">Add expense</h2>
          <div className="py-5">
            <Input inputType="text" placeholder="Add expense" />
          </div>
          <div className="flex justify-end">
            <DirectionArrows
              direction="next"
              formSections={formSections}
              setFormSections={setFormSections}
            />
          </div>
        </div>
      )}

      {formSections.selectCategory && (
        <div>
          <h2 className="text-center text-5xl font-bold">Select category</h2>
          <div className="grid grid-cols-3 gap-5 py-10">
            <CategoryButton icon={<HiHome />} text="Home" />
            <CategoryButton icon={<FaBowlFood />} text="Food" />
            <CategoryButton icon={<IoMdBicycle />} text="Sport" />
          </div>
          <div className="flex justify-center">
            <Button
              text="Add new category"
              path="/expenses/categories/addCategory"
            />
          </div>
          <div className="flex justify-between">
            <DirectionArrows
              direction="prev"
              formSections={formSections}
              setFormSections={setFormSections}
            />
            <DirectionArrows
              direction="next"
              formSections={formSections}
              setFormSections={setFormSections}
            />
          </div>
        </div>
      )}

      {formSections.addAmount && (
        <div className="flex flex-col text-center">
          <h2 className="text-5xl font-bold">Add Amount</h2>
          <div className="py-5">
            <Input inputType="number" placeholder="Amount" />
          </div>
          <div className="inline-block">
            <FormButton
              text="Add expense"
              onClick={event => {
                event.preventDefault();
                console.log('submit');
              }}
              type="submit"
            />
          </div>
          <div className="text-6xl">
            <DirectionArrows
              direction="prev"
              formSections={formSections}
              setFormSections={setFormSections}
            />
          </div>
        </div>
      )}
    </form>
  );
}
