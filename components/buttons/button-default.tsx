import { Children, ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  classN: string;
  text: string;
};

const ButtonDefault = ({
  classN = "",
  text,
  children,
  ...props
}: ButtonType) => {
  const baseClass = `font-semibold text-sm flex flex-wrap items-center gap-2 shadow-xs focus:outline-none`;

  const classes = `${baseClass} ${classN}`;
  return (
    <div className={classes} {...props}>
      {children}
      <button>{text}</button>
    </div>
  );
};

export default ButtonDefault;
