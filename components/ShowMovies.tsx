"use client";
import React, { useState } from "react";
import Image from "next/image";

import Background from "../public/movie-details-bg.jpg";
import { showMovies } from "@/app/constants";
import SliderCarousel from "./SliderCarousel";

export default function ShowMovies() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="relative py-10 h-[650px]">
      <div className="z-10 relative">
        <div className="flex justify-center max-w-2xl mx-auto py-7 gap-8">
          {showMovies.map((item, index) => (
            <div onClick={() => setCurrentIndex(index)} key={index}>
              <a
                // href="#"
                style={{ textUnderlineOffset: "6px" }}
                className={`text-2xl hover:text-mygreen ${
                  currentIndex === index
                    ? "text-mygreen underline"
                    : "hover-underline-animation "
                }`}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <SliderCarousel />
        </div>
      </div>

      <div className="object-cover absolute top-0 h-full w-full">
        <Image src={Background} alt="background" className="h-full" />
      </div>
    </div>
  );
}
