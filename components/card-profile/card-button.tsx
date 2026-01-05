import ButtonDefault from "../buttons/button-default";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const CardButton = () => {
  return (
    <div className="flex items-center gap-2 px-2 py-2">
      <ButtonDefault
        classN={
          "text-white bg-blue-500 p-1.5 rounded-lg border-none outline-none"
        }
        text={"Message"}
      >
        <BiSolidMessageRoundedDetail className="w-6 h-auto"></BiSolidMessageRoundedDetail>
      </ButtonDefault>
      <ButtonDefault
        classN={
          "bg-gray-200 p-1.5 rounded-lg border border-transparent outline-none box-border hover:bg-gray-400 text-black font-semibold"
        }
        text={"Following"}
      >
        <MdNotificationsActive className="w-6 h-auto"></MdNotificationsActive>
      </ButtonDefault>
      <ButtonDefault
        classN={
          "bg-gray-200 p-1.5 rounded-lg border border-transparent outline-none box-border hover:bg-gray-400"
        }
        text={"Search"}
      >
        <IoSearch className="w-6 h-auto" />
      </ButtonDefault>
    </div>
  );
};

export default CardButton;
