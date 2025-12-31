import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuGamepad } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import FacePath from "@/public/images/face.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-blue-500 fixed z-20 w-full top-0 start-0 border-b px-3 py-3">
        <div className="max-w-screen-full grid grid-cols-3 mx-auto items-center">
          <div className=" flex gap-3 items-self-center">
            <Image src={FacePath} alt="logo" className="w-6 h-auto rounded" ></Image>
            <form>
              <input className="border border-white rounded"></input>
            </form>
          </div>
          <div className="flex gap-15 justify-center ">
            <IoHomeOutline className="hover:outline-red-500"></IoHomeOutline>
            <MdOutlineOndemandVideo></MdOutlineOndemandVideo>
            <IoStorefrontOutline></IoStorefrontOutline>
            <CgProfile></CgProfile>
            <LuGamepad></LuGamepad>
          </div>

          <div className=" flex gap-10 justify-self-end items-center">
            <button className="border border-red-500 hover:bg-red-600 rounded px-4 py-2" >
              <FiMenu className="w-6 h-auto"></FiMenu></button>
            <TbMessageCircle className="w-6 h-auto"></TbMessageCircle>
            <IoMdNotificationsOutline className="w-6 h-auto"></IoMdNotificationsOutline>
            <Image src={FacePath} alt="logo" className="w-auto h-8 rounded" ></Image>
          </div>
        </div>
      </nav >

      <div className="container bg-red-500 border h-96 mx-auto border-white"> this is container</div>
    </>
  );
}
