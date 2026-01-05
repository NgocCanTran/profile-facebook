import React, { ReactNode } from "react";

type IconButtonType = {
  children: ReactNode;
  classN: string;
};

const IconButton = ({
  children,
  classN = "",
  ...props
}: IconButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = `hover:bg-gray-200 hover:border:opacity-70 rounded-lg p-2 px-4`;
  const tooltipClass = `absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity bg-black rounded-base shadow-xs opacity-0`;

  const classes = `${baseClasses} ${classN}`;

  return (
    <div className="relative group inline-block">
      <button type="button" className={classes} {...props}>
        {children}
      </button>
      <div className={tooltipClass}>Tooltip content</div>
    </div>
  );
};

export default IconButton;
