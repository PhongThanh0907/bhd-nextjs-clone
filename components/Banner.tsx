"use client";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { listImage } from "@/app/constants";
import ScrollDown from "../public/scroll-down.png";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const autoSlide = false;
  const autoSlideInterval = 3000;

  const prev = () =>
    setCurrentIndex((curr) => (curr === 0 ? listImage.length - 1 : curr - 1));
  const next = () =>
    setCurrentIndex((curr) => (curr === listImage.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

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
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {listImage.map((item) => item.image)}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeftIcon className="h-10 w-10" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRightIcon className="h-10 w-10" />
        </button>
      </div>

      <div className="absolute bottom-36 right-0 left-0">
        <div className="flex items-center justify-center gap-3">
          {listImage.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
              transition-all w-3 h-3  rounded-full cursor-pointer
              ${
                currentIndex === i
                  ? "px-4 bg-mgreen"
                  : "bg-gray-600 bg-opacity-50"
              }
            `}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0">
        <Image className="cursor-pointer" src={ScrollDown} alt="scrolldown" />
      </div>
    </div>
  );
}
