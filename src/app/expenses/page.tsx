import { HiClipboardList, HiCalendar, HiUserCircle } from 'react-icons/hi';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import GradinetTitle from '../components/GradinetTitle';
import Navbar from '../components/Navbar';

export default function page() {
  return (
    <>
      <Navbar />
      <main className="flex h-screen justify-center">
        <div className="max-w-xl px-5">
          <GradinetTitle text="Expenses manager" />
          <div className="flex justify-center py-10">
            <Button text="Add expense" path="/expenses/addExpense" />
          </div>
          <div className="flex justify-center gap-10 p-5">
            <IconButton
              icon={<HiClipboardList size={20} />}
              text="Daily"
              path="/expenses/daily"
            />
            <IconButton
              icon={<HiCalendar size={20} />}
              text="Monthly"
              path="/expenses/monthly"
            />
          </div>
        </div>
      </main>
    </>
  );
}
