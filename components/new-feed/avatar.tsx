import Image from "next/image";
import AvataImage from "@/public/images/image1.jpg";
import { BiWorld } from "react-icons/bi";

const Avatar = () => {
  return (
    <div className="flex">
      <div className="flex mr-2">
        <Image
          src={AvataImage}
          alt="Avatar"
          className="w-13 h-13 rounded-full object-cover"
        />
      </div>
      <div className="flex-2">
        <div className="text-black font-semibold">
          Ban Liên Lạc Sinh Viên Tỉnh Đồng Tháp
        </div>
        <div className="flex gap-1 items-center">
          <div className="text-sm font-semibold text-gray-600">13h</div>
          <div>
            <BiWorld className="text-gray-600"></BiWorld>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
