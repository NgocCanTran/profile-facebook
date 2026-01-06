import { RiUserCommunityFill } from "react-icons/ri";

const CardManagement = () => {
  return (
    <div className=" flex flex-wrap bg-white items-center justify-between mt-4  border border-gray-300  rounded-lg p-3 ">
      <div className="text-black items-start flex gap-3">
        <RiUserCommunityFill className="w-6 h-auto text-gray-600"></RiUserCommunityFill>
        Chuyển sang Trang của Ban Liên Lạc Sinh Viên Tỉnh Đồng Tháp để bắt đầu
        quản lý.
      </div>
      <button className="bg-blue-500 px-6 py-2 rounded-lg text-white font-bold ">
        Navigate
      </button>
    </div>
  );
};

export default CardManagement;
