"use client";
import Image from "next/image";
import React, { useState } from "react";

import ImageMember from "../public/bg-title-bhd-member.png";
import Finger from "../public/img--finger.png";
import Hand from "../public/img-hand.png";
import Star from "../public/STAR.png";
import Diamond from "../public/DIAMOND.png";
import Gold from "../public/GOLD.png";

type Props = {};

export default function CardMember({}: Props) {
  const listMemberCard = [Star, Diamond, Gold];
  const [value, setValue] = useState<any>();
  console.log(value);
  return (
    <div className="bg-[#b8d231] text-center pt-8 relative">
      <div className="mx-auto">
        <Image
          className="w-[330px] mx-auto"
          src={ImageMember}
          alt="img-title"
        />
      </div>
      <div className="z-10 relative flex justify-center gap-8 pt-6 pb-8">
        {listMemberCard.map((item, index) => (
          <Image
            className="w-[368px] cursor-pointer"
            key={index}
            src={item}
            alt="imgmembercard"
          />
        ))}
      </div>
      <div className="pb-8">
        <button className="uppercase px-4 py-2 bg-white text-mgreen rounded-3xl hover:text-white hover:bg-black font-bold text-sm duration-300">
          Đăng ký ngay
        </button>
      </div>

      <Image
        className="absolute bottom-0 w-[200px] left-32"
        src={Hand}
        alt="handimage"
      />
      <Image
        className="absolute bottom-[60px] left-[268px] w-[42px] z-20"
        src={Finger}
        alt="fingerimage"
      />
    </div>
  );
}
