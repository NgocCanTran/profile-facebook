type CardInfoType = {
  classN: string;
  description: string;
  children: ReactNode;
};

import { ReactNode } from "react";
import { MdAccessTime } from "react-icons/md";

const CardInfo = ({
  classN = "",
  description,
  children,
  ...props
}: CardInfoType) => {
  const baseClass = `flex justify-start gap-3 items-center m-2.5 cursor-pointer`;

  const classes = `${baseClass} ${classN}`;

  return (
    <div className={classes} {...props}>
      {children}
      <div className="font-semibold ">{description}</div>
    </div>
  );
};

export default CardInfo;
