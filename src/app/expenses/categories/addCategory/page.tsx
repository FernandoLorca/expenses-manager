'use client';
import { HiCake } from 'react-icons/hi';
import { BiSolidParty } from 'react-icons/bi';
import { IoLogoGameControllerB, IoIosGift } from 'react-icons/io';
import { AiFillDollarCircle, AiFillEuroCircle } from 'react-icons/ai';
import { FaBook, FaPlane } from 'react-icons/fa';
import {
  FaCircle,
  FaSquare,
  FaDiamond,
  FaCartShopping,
  FaShirt,
  FaTicket,
} from 'react-icons/fa6';
import { IoTriangleSharp } from 'react-icons/io5';
import { redirect } from 'next/navigation';
import GradinetTitle from '@/app/components/GradinetTitle';
import IconButton from '@/app/components/IconButton';
import Input from '@/app/components/Input';
import FormButton from '@/app/components/FormButton';

export default function page(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center">
      <form>
        <GradinetTitle text="Add category" />
        <div className="flex justify-center py-5">
          <div className="w-full max-w-lg">
            <Input inputType="text" placeholder="Category name" />
          </div>
        </div>
        <h2 className="pt-5 text-center text-2xl">Select icon</h2>
        <div className="grid grid-cols-4 gap-5 py-5 md:grid-cols-5 ">
          <IconButton icon={<HiCake />} isActive={false} noPath={true} />
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
          <IconButton
            icon={<AiFillEuroCircle />}
            isActive={false}
            noPath={true}
          />
          <IconButton icon={<FaCircle />} isActive={false} noPath={true} />
          <IconButton icon={<FaSquare />} isActive={false} noPath={true} />
          <IconButton
            icon={<IoTriangleSharp />}
            isActive={false}
            noPath={true}
          />
          <IconButton icon={<FaDiamond />} isActive={false} noPath={true} />
          <IconButton icon={<FaBook />} isActive={false} noPath={true} />
          <IconButton icon={<FaPlane />} isActive={false} noPath={true} />
          <IconButton
            icon={<FaCartShopping />}
            isActive={false}
            noPath={true}
          />
          <IconButton icon={<FaShirt />} isActive={false} noPath={true} />
          <IconButton icon={<FaTicket />} isActive={false} noPath={true} />
        </div>
        <div className="flex justify-center pt-5">
          <FormButton
            text="Add category"
            type="submit"
            onClick={() => {
              redirect('/expenses/addExpense');
            }}
          />
        </div>
      </form>
    </div>
  );
}
