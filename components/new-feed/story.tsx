import { FaListUl } from "react-icons/fa";
import Avatar from "./avatar";
import IamgeNewFeed from "@/public/images/home.jpg";
import Image from "next/image";
import CommentButton from "../comments/comment-button";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import Emotion from "../emotion/emotion";
import CommentUser from "../comments/comment-user";
import CommentActor from "../comments/comment-actor";

type StoryContent = {
  classN: string;
  content: string;
};

const Story = ({ classN = "", content }: StoryContent) => {
  const baseClass = `my-1`;

  const classes = `${baseClass} ${classN}`;

  return (
    <div className={classes}>
      <div className="flex justify-between items-start mb-2">
        <Avatar></Avatar>
        <button className="text-gray-600 items-start p-2 rounded-full hover:bg-gray-200 ">
          <FaListUl className="h-5 w-auto "></FaListUl>
        </button>
      </div>
      {content}
      <div className="mt-2">
        <Image
          src={IamgeNewFeed}
          alt="New Feed"
          className="w-full h-auto rounded-lg mb-3"
        />
        <hr className="text-gray-300"></hr>
        <Emotion></Emotion>
        <hr className="text-gray-300"></hr>
        <div className="flex justify-around gap-2.5 mx-8 mb-1">
          <CommentButton text="Like" classN={""}>
            <AiOutlineLike className="w-5 h-auto"></AiOutlineLike>
          </CommentButton>
          <CommentButton text="Comment" classN={""}>
            <FaRegComment className="w-5 h-auto"></FaRegComment>
          </CommentButton>
          <CommentButton text="Share" classN={""}>
            <IoIosShareAlt className="w-5 h-auto"></IoIosShareAlt>
          </CommentButton>
        </div>
        <hr className="text-gray-300"></hr>
        <div className="my-2 text-lg font-semibold text-gray-600 ">
          See more comments
        </div>
        <CommentUser></CommentUser>
        <CommentUser></CommentUser>
        <CommentActor></CommentActor>
        <hr className="mt-3 mb-3 "></hr>
        <div className="relative group h-36 mt-8">
          <button className="outline-none bg-blue-500 text-white p-2 rounded-lg font-medium hover:bg-blue-600">
            enter the tooltip
          </button>
          <span className=" bg-gray-900 invisible text-white p-2 transition-opacity rounded-lg absolute z-20 opacity-0 group-hover:opacity-100 group-hover:visible ">
            this is the tooltip button
          </span>
        </div>
      </div>
    </div>
  );
};

export default Story;
