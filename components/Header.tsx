"use client";
import React, { useState } from "react";
import Image from "next/image";

import MainButton from "./MainButton";
import MenuHeader from "./MenuHeader";
import Logo from "../public/logo.png";
import Facebook from "../public/icon_fb.png";
import Instagram from "../public/icon_in.png";
import Tiktok from "../public/icon_tiktok.png";
import Youtube from "../public/icon_YT.png";
import LineHeader from "../public/line-header1.png";

type Props = {};

export default function Header({}: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-3 relative  h-[75px] w-full">
      <div className="flex gap-6">
        <div
          className="cursor-pointer flex-col justify-center py-2 px-4 bg-[#2e2e2e] my-auto"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MenuHeader openMenu={openMenu} />
          <p className="text-sm font-bold text-white mt-0.5">MENU</p>
        </div>
        <div className="my-auto">
          <MainButton title="Mua vé" className="px-6 py-2" />
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={Logo}
          alt="logo-img"
          className="max-w-[75px] z-50 absolute top-4 m-auto cursor-pointer"
        />
      </div>
      <div className="flex justify-end">
        <div className="grid grid-cols-4 justify-start items-center gap-4">
          <Image src={Facebook} alt="facebook" className="w-[45px]" />
          <Image src={Instagram} alt="instagram" className="w-[45px]" />
          <Image src={Tiktok} alt="tiktok" className="w-[45px]" />
          <Image src={Youtube} alt="youtube" className="w-[45px]" />
        </div>
        <div className="my-auto px-8">
          <MainButton title="Đăng nhập" className="px-3 py-2" />
        </div>
      </div>
      <div className="absolute top-[75px] right-0 bottom-0 mx-auto w-full z-30">
        <Image src={LineHeader} alt="lineheader" className="m-auto" />
      </div>
    </div>
  );
}
