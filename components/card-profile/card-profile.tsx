import Profile from "@/public/images/profile.svg";
import Image from "next/image";

const CardProfile = () => {
  return (
    <div className="flex items-center gap-2.5">
      <Image className="w-32 h-auto" src={Profile} alt="image profile"></Image>
      <div className="font-medium text-black">
        <div className="font-black text-3xl">Name Profile</div>
        <div className="font-black">340 friends</div>
        <div>TPHCM</div>
      </div>
    </div>
  );
};

export default CardProfile;
