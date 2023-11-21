import { HiClipboardList, HiCalendar } from 'react-icons/hi';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import GradinetTitle from '../components/GradinetTitle';

export default function page() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <GradinetTitle text="Expenses manager" />
        <div className="flex justify-center py-10">
          <Button text="Add expense" path="/expenses/add" />
        </div>
        <div className="flex h-screen justify-center gap-10 p-5">
          <IconButton icon={<HiClipboardList size={20} />} text="Daily" />
          <IconButton icon={<HiCalendar size={20} />} text="Monthly" />
        </div>
      </div>
    </div>
  );
}
