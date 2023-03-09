"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MainButton from "./MainButton";
import MenuHeader from "./MenuHeader";
import Logo from "../public/logo.png";
import Facebook from "../public/icon_fb.png";
import Instagram from "../public/icon_in.png";
import Tiktok from "../public/icon_tiktok.png";
import Youtube from "../public/icon_YT.png";
import LineHeader from "../public/line-header1.png";
import { menuHeader } from "@/app/constants";

type Props = {};

export default function Header({}: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-3 relative  h-[75px] w-full">
      <div className="flex gap-6 z-20">
        <div
          className="cursor-pointer flex-col justify-center py-2 px-4 bg-[#2e2e2e] my-auto"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="h-8">
            <MenuHeader openMenu={openMenu} />
          </div>
          <p className="text-sm font-bold text-white ">
            {openMenu ? "CLOSE" : "MENU"}
          </p>
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
      {openMenu ? (
        <div className="absolute top-[75px] z-10 text-mwhite bg-black flex flex-col pl-8 text-xl h-72 w-96 opacity-100 duration-500">
          {menuHeader.map((item, index) => (
            <div key={index} className="relative w-full py-5">
              <Link
                className="hover:text-mgreen absolute left-[10px] opacity-100"
                href={item.path}
                style={{ transition: `all ${item.delay}ms` }}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute top-[75px] z-0 text-mwhite bg-black flex flex-col pt-6 pl-8 text-xl gap-y-3  h-0 w-96 duration-500 opacity-0">
          {menuHeader.map((item, index) => (
            <div key={index} className="relative w-full py-3.5">
              <Link
                className="hover:text-mgreen absolute left-1/2 opacity-0"
                href={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
