import { aboutBHDCinema, termsConditions } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.png";

export default function Footer() {
  return (
    <div className="w-[80%] mx-auto py-10">
      <div>
        <Image src={Logo} alt="logo" className="mx-auto" />
      </div>
      <div className="grid grid-cols-5 gap-20 pb-16">
        <div className="col-span-1 flex flex-col">
          <h4 className="text-lg">VỀ BHD STAR</h4>
          <div className="h-0.5 bg-mygreen w-10 my-2.5" />
          {aboutBHDCinema.map((item, index) => (
            <Link
              className="text-mygreen mb-2 hover:underline duration-200 hover:text-white"
              href={item.path}
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-4 flex flex-col">
          <h4 className="text-lg">QUY ĐỊNH & ĐIỀU KHOẢN</h4>
          <div className="h-0.5 bg-mygreen w-10 my-2.5" />

          {termsConditions.map((item, index) => (
            <Link
              className="text-mygreen mb-2 hover:underline duration-200 hover:text-white"
              href={item.path}
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <hr className="h-0.5 bg-gray-300 opacity-30" />
      <p className="text-center text-sm pt-10">© 2015 BHD Star Cineplex</p>
    </div>
  );
}
