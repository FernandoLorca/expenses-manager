import type { LayoutChildrens } from './types';

export default function ExpensesLayout({ children }: LayoutChildrens) {
  return <div className="m-auto w-full max-w-3xl px-5">{children}</div>;
}
