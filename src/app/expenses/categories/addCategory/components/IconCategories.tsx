import { BiSolidParty } from 'react-icons/bi';
import { IoLogoGameControllerB, IoIosGift } from 'react-icons/io';
import { AiFillDollarCircle, AiFillEuroCircle } from 'react-icons/ai';
import { FaBook, FaPlane, FaFirstAid, FaTools } from 'react-icons/fa';
import {
  FaBowlFood,
  FaCircle,
  FaSquare,
  FaDiamond,
  FaCartShopping,
  FaShirt,
  FaTicket,
  FaCar,
  FaTv,
  FaUser,
  FaLaptop,
  FaDog,
  FaCat,
  FaChartLine,
  FaPalette,
  FaPaintbrush,
  FaUsers,
  FaBusSimple,
  FaGraduationCap,
  FaUserDoctor,
} from 'react-icons/fa6';
import { IoTriangleSharp } from 'react-icons/io5';
import { MdOutlinePets, MdOutlineWarning } from 'react-icons/md';
import IconButton from '@/app/components/IconButton';

export default function IconCategories() {
  return (
    <div className="grid grid-cols-4 gap-5 py-5 md:grid-cols-5 ">
      <IconButton icon={<FaBowlFood />} isActive={false} noPath={true} />
      <IconButton icon={<BiSolidParty />} isActive={false} noPath={true} />
      <IconButton
        icon={<IoLogoGameControllerB />}
        isActive={false}
        noPath={true}
      />
      <IconButton icon={<IoIosGift />} isActive={false} noPath={true} />
      <IconButton
        icon={<AiFillDollarCircle />}
        isActive={false}
        noPath={true}
      />
      <IconButton icon={<AiFillEuroCircle />} isActive={false} noPath={true} />
      <IconButton icon={<FaCircle />} isActive={false} noPath={true} />
      <IconButton icon={<FaSquare />} isActive={false} noPath={true} />
      <IconButton icon={<IoTriangleSharp />} isActive={false} noPath={true} />
      <IconButton icon={<FaDiamond />} isActive={false} noPath={true} />
      <IconButton icon={<FaBook />} isActive={false} noPath={true} />
      <IconButton icon={<FaPlane />} isActive={false} noPath={true} />
      <IconButton icon={<FaCartShopping />} isActive={false} noPath={true} />
      <IconButton icon={<FaShirt />} isActive={false} noPath={true} />
      <IconButton icon={<FaTicket />} isActive={false} noPath={true} />
      <IconButton icon={<FaCar />} isActive={false} noPath={true} />
      <IconButton icon={<FaTv />} isActive={false} noPath={true} />
      <IconButton icon={<FaUser />} isActive={false} noPath={true} />
      <IconButton icon={<FaLaptop />} isActive={false} noPath={true} />
      <IconButton icon={<FaDog />} isActive={false} noPath={true} />
      <IconButton icon={<FaCat />} isActive={false} noPath={true} />
      <IconButton icon={<MdOutlinePets />} isActive={false} noPath={true} />
      <IconButton icon={<FaChartLine />} isActive={false} noPath={true} />
      <IconButton icon={<FaPalette />} isActive={false} noPath={true} />
      <IconButton icon={<FaPaintbrush />} isActive={false} noPath={true} />
      <IconButton icon={<FaUsers />} isActive={false} noPath={true} />
      <IconButton icon={<FaBusSimple />} isActive={false} noPath={true} />
      <IconButton icon={<FaGraduationCap />} isActive={false} noPath={true} />
      <IconButton icon={<FaFirstAid />} isActive={false} noPath={true} />
      <IconButton icon={<FaUserDoctor />} isActive={false} noPath={true} />
      <IconButton icon={<FaTools />} isActive={false} noPath={true} />
      <IconButton icon={<MdOutlineWarning />} isActive={false} noPath={true} />
    </div>
  );
}
