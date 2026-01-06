import HomeImage from "@/public/images/home.jpg";
import Iamge1 from "@/public/images/image1.jpg";
import Iamge3 from "@/public/images/image3.jpg";
import Iamge4 from "@/public/images/image4.jpg";
// object  >  ten, src, alt

import Image from "next/image";

const CardImages = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 justify-items-stretch items-stretch mt-3">
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={HomeImage}
          alt="Home"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge3}
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge4}
          alt="Image 4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-32 w-auto bg-blue-500 text-white">
        <Image
          src={Iamge1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardImages;
