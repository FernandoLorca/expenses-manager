import { HiClipboardList, HiCalendar, HiUserCircle } from 'react-icons/hi';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import GradinetTitle from '../components/GradinetTitle';

export default function page() {
  return (
    <>
      <div className="flex flex-col items-end">
        <div className="px-5 py-2">
          <IconButton
            icon={<HiUserCircle size={20} />}
            path="/profile"
            isActive={false}
          />
        </div>
        <hr className="w-full border-gray-100/20" />
      </div>
      <div className="flex h-screen justify-center">
        <div className="max-w-xl px-5">
          <GradinetTitle text="Expenses manager" />
          <div className="flex justify-center py-10">
            <Button text="Add expense" path="/expenses/add" />
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
      </div>
    </>
  );
}
