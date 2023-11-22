import { HiUserCircle } from 'react-icons/hi';
import IconButton from './IconButton';

export default function Navbar() {
  return (
    <div className="flex flex-col items-end">
      <div className="py-2">
        <IconButton
          icon={<HiUserCircle size={20} />}
          path="/profile"
          isActive={false}
        />
      </div>
      <hr className="w-full border-gray-100/20" />
    </div>
  );
}
