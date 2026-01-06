import { ReactNode } from "react";
import {} from "react-icons/ai";

type CommentButtonType = {
  children: ReactNode;
  classN: string;
  text: string;
};

const CommentButton = ({
  classN = "",
  text,
  children,
  ...props
}: CommentButtonType) => {
  const baseClass = `mt-1 rounded-lg hover:bg-gray-200 flex justify-center w-full text-gray-600 font-semibold text-base`;
  const classes = `${baseClass} ${classN}`;
  return (
    <div className={classes} {...props}>
      <button className=" flex gap-2 items-center justify-center p-2.5 ">
        {children}
        {text}
      </button>
    </div>
  );
};

export default CommentButton;
