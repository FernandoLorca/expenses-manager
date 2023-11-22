import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';
import type { FormSectionsType } from '../types';

interface DirectionArrowsProps {
  direction: 'next' | 'prev';
  formSections: FormSectionsType;
  setFormSections: (formSections: FormSectionsType) => void;
}

export default function DirectionArrows({
  direction,
  formSections,
  setFormSections,
}: DirectionArrowsProps): JSX.Element {
  const arrowsClasses =
    'cursor-pointer text-6xl text-lime-600 transition-opacity duration-200 ease-in-out hover:opacity-75 md:text-5xl lg:text-4xl';

  const formSectionsHandler = (direction: 'next' | 'prev' = 'next'): void => {
    switch (direction) {
      case 'next':
        if (formSections.addExpense) {
          setFormSections({
            addExpense: false,
            selectCategory: true,
            addAmount: false,
          });
        } else if (formSections.selectCategory) {
          setFormSections({
            addExpense: false,
            selectCategory: false,
            addAmount: true,
          });
        } else if (formSections.addAmount) {
          setFormSections({
            addExpense: true,
            selectCategory: false,
            addAmount: false,
          });
        }
        break;
      case 'prev':
        if (formSections.addExpense) {
          setFormSections({
            addExpense: false,
            selectCategory: false,
            addAmount: true,
          });
        } else if (formSections.selectCategory) {
          setFormSections({
            addExpense: true,
            selectCategory: false,
            addAmount: false,
          });
        } else if (formSections.addAmount) {
          setFormSections({
            addExpense: false,
            selectCategory: true,
            addAmount: false,
          });
        }
        break;
    }
  };

  return direction === 'next' ? (
    <HiArrowSmRight
      onClick={() => formSectionsHandler('next')}
      className={arrowsClasses}
    />
  ) : (
    <HiArrowSmLeft
      onClick={() => formSectionsHandler('prev')}
      className={arrowsClasses}
    />
  );
}
