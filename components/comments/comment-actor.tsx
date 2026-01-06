import Image from "next/image";
import AvataImage from "@/public/images/image1.jpg";

const CommentActor = () => {
  return (
    <div className=" flex gap-2.5 items-center mt-5">
      <div className="w-10 h-10">
        <Image
          src={AvataImage}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full rounded-full bg-gray-200 justify-between">
        <form>
          <input
            className="h-11 w-full outline-none rounded-full p-3.5"
            type="text"
            placeholder=" This is comment from actor... "
          ></input>
        </form>
      </div>
    </div>
  );
};

export default CommentActor;
