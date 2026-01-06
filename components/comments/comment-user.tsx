import Image from "next/image";
import AvataImage from "@/public/images/image1.jpg";
import { IoDiamondOutline } from "react-icons/io5";

const CommentUser = () => {
  return (
    <div className="flex gap-2 my-3">
      <div className="w-10 h-10">
        <Image
          src={AvataImage}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="p-2 rounded-lg bg-gray-200 text-black">
        <div className="flex gap-1.5 items-center text-gray-500 font-bold text-xs">
          <IoDiamondOutline className="w-4 h-auto"></IoDiamondOutline>
          <div>Fan cứng</div>
        </div>
        <div className="font-semibold">Nguyen Van A</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default CommentUser;
