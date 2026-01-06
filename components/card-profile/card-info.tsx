type CardInfoType = {
  classN: string;
  description: string;
  children: ReactNode;
};

import { ReactNode } from "react";

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
      <div className="font-semibold text-sm">{description}</div>
    </div>
  );
};

export default CardInfo;
