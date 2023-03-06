"use client";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { listImage } from "@/app/constants";
import ScrollDown from "../public/scroll-down.png";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const bgImgStyle = {
    transition: "all 1s",
    height: "95%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? listImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === listImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="h-[500px] w-full lg:h-[880px] m-auto relative group">
      <Image
        style={bgImgStyle}
        className="duration-500"
        src={listImage[currentIndex]}
        alt="image"
      />

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[46%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon className="h-10 w-10" onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[46%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon className="h-10 w-10" onClick={nextSlide} />
      </div>
      <div className="absolute bottom-40  gap-4 left-0 right-0  flex justify-center">
        {listImage.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer"
          >
            <div
              className={`p-1.5 rounded-full  ${
                slideIndex === currentIndex
                  ? "px-4 bg-mgreen duration-300"
                  : "bg-gray-500 duration-300"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-3">
        <Image className="cursor-pointer" src={ScrollDown} alt="scrolldown" />
      </div>
    </div>
  );
}
