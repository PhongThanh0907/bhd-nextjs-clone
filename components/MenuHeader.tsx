import React from "react";

type Props = {
  openMenu: boolean;
};

export default function MenuHeader({ openMenu }: Props) {
  return (
    <div className="h-6 relative flex justify-center z-30">
      <div
        className={`h-1.5 w-9 bg-gradient-to-r from-[#ADFF2F] to-mgreen absolute rounded-sm  ${
          openMenu
            ? "top-0 bottom-0 rotate-45 my-auto duration-500"
            : "top-0 duration-300"
        } `}
      />
      <div
        className={`h-1.5 w-9 bg-gradient-to-r from-[#ADFF2F] to-mgreen absolute top-0 bottom-0 m-auto line-center duration-300 rounded-sm ${
          openMenu ? " opacity-0" : "opacity-100 "
        }`}
      />
      <div
        className={`h-1.5 w-9 bg-gradient-to-r from-[#ADFF2F] to-mgreen absolute  line-bottom rounded-sm ${
          openMenu
            ? "top-0 bottom-0 -rotate-45 my-auto duration-500"
            : "bottom-0 duration-300"
        }`}
      />
    </div>
  );
}
