"use client";
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
import IconButton from "@/components/buttons/header-button";
import CardProfile from "@/components/card-profile/card-profile";
import SearchButton from "@/components/buttons/search-button";
import CardButton from "@/components/card-profile/card-button";
import BackgroundImage from "@/public/images/home.jpg";
import CardManagement from "@/components/card-profile/card-management";
import CardInfo from "@/components/card-profile/card-info";
import { MdAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import ButtonDefault from "@/components/buttons/button-default";
import { GrList } from "react-icons/gr";

const Home = () => {
  const checkButton = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <nav className="bg-white sticky z-20 w-full top-0 start-0 px-3 py-3">
        <div className="grid grid-cols-3 mx-auto items-center">
          <div className=" flex items-center">
            <Image
              src={FacePath}
              alt="logo"
              className="w-auto h-12 rounded"
            ></Image>
            <SearchButton classN={""}></SearchButton>
          </div>
          <div className="flex gap-15 justify-center ">
            <IconButton classN="">
              <IoHomeOutline className="w-6 h-auto"></IoHomeOutline>
            </IconButton>
            <IconButton classN="">
              <MdOutlineOndemandVideo className="w-6 h-auto"></MdOutlineOndemandVideo>
            </IconButton>
            <IconButton classN="">
              <IoStorefrontOutline className="w-6 h-auto"></IoStorefrontOutline>
            </IconButton>
            <IconButton classN="">
              <CgProfile className="w-6 h-auto"></CgProfile>
            </IconButton>
            <IconButton classN="">
              <LuGamepad className="w-6 h-auto"></LuGamepad>
            </IconButton>
          </div>

          <div className=" flex gap-10 justify-self-end items-center">
            <IconButton classN="" onClick={() => checkButton("value")}>
              <FiMenu className="w-6 h-auto "></FiMenu>
            </IconButton>
            <IconButton classN="">
              <TbMessageCircle className="w-6 h-auto"></TbMessageCircle>
            </IconButton>
            <IconButton classN="">
              <IoMdNotificationsOutline className="w-6 h-auto"></IoMdNotificationsOutline>
            </IconButton>
            <Image
              src={FacePath}
              alt="logo"
              className="w-auto h-12 rounded"
            ></Image>
          </div>
        </div>
      </nav>

      <main className="grid grid-rows-3 mx-36">
        <div className="container mx-auto w-full gap-2">
          <div className="container grid-rows-1 flex">
            <Image
              className="h-126 w-full"
              src={BackgroundImage}
              alt={""}
            ></Image>
          </div>
          <div className=" container mt-2 grid-rows-1 flex items-center justify-between px-6">
            <CardProfile></CardProfile>
            <CardButton></CardButton>
          </div>
          <hr className="text-gray-300 mx-3"></hr>
          <div className="grid-rows-1">
            <CardManagement></CardManagement>
            <div className=" mt-3 h-96 grid grid-cols-3 gap-4">
              <div className="grid-cols-1 border border-gray-300 rounded-lg p-2 sticky top-20">
                <div className="font-bold text-2xl">Chi tiết</div>
                <CardInfo classN={""} description={"Always open"}>
                  <MdAccessTime className="h-8 w-auto"></MdAccessTime>
                </CardInfo>
                <CardInfo classN={""} description={"Ho Chi Minh, Vietnam"}>
                  <CiLocationOn className="h-8 w-auto"></CiLocationOn>
                </CardInfo>
                <div className="font-bold text-2xl">Liên kết</div>
                <CardInfo classN={""} description={"ketnoidongthap.com"}>
                  <IoIosLink className="h-8 w-auto"></IoIosLink>
                </CardInfo>
                <div className="font-bold text-2xl">Thông tin liên hệ</div>
                <CardInfo classN={""} description={"0389600100"}>
                  <FiPhone className="h-8 w-auto"></FiPhone>
                </CardInfo>
                <CardInfo classN={""} description={"ketnoidongthap2gmail.com"}>
                  <MdMailOutline className="h-8 w-auto"></MdMailOutline>
                </CardInfo>
                <CardInfo
                  classN={""}
                  description={"Ban Liên Lạc Sinh Viên Tỉnh Đồng Tháp"}
                >
                  <BiSolidMessageRoundedDots className="h-8 w-auto"></BiSolidMessageRoundedDots>
                </CardInfo>
              </div>
              <div className="col-span-2">
                <div className="mb-4 items-center justify-between flex p-2  border border-gray-300 rounded-lg">
                  <div className="font-black">Story</div>
                  <div className="flex border-none rounded-lg py-1.5 px-2 bg-gray-200 oultine-none hover:bg-gray-300 ">
                    <ButtonDefault classN={" "} text={""}>
                      <GrList className="w-6 h-auto"></GrList>
                    </ButtonDefault>
                    Ajust
                  </div>
                </div>
                <div className=" border border-gray-300 rounded-lg p-2">
                  {" "}
                  this is new feed
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
