/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { listImageEvent, listImagePromotion } from "@/app/constants";

type Props = {};

export default function PromotionEvent({}: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slider = React.useRef<HTMLDivElement>(null);
  const [openTab, setOpenTab] = useState(1);
  const [index, setIndex] = useState(0);
  const widthItem = 450;
  const maxWidthPromotion = widthItem * (listImagePromotion.length - 2);
  const maxWidthEvent = widthItem * (listImageEvent.length - 2);

  const slideLeft = () => {
    if (index === 0) {
      setIndex(
        openTab === 1
          ? listImagePromotion.length - 2
          : listImageEvent.length - 2
      );
      return;
    }
    setIndex(index - 1);
  };

  const slideRight = () => {
    if (
      openTab === 1
        ? index * widthItem === maxWidthPromotion
        : index * widthItem === maxWidthEvent
    ) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <div className="relative py-10">
      <div className="uppercase text-mygreen text-2xl flex gap-2 justify-center">
        <h1
          style={{ textUnderlineOffset: "6px" }}
          onClick={() => {
            setOpenTab(1);
            setCurrentIndex(0);
          }}
          className={`cursor-pointer ${
            currentIndex === 0 ? "underline" : "hover-underline-animation"
          }`}
        >
          Khuyến mãi
        </h1>
        |
        <h1
          style={{ textUnderlineOffset: "6px" }}
          onClick={() => {
            setOpenTab(2);
            setCurrentIndex(1);
          }}
          className={`cursor-pointer ${
            currentIndex === 1 ? "underline" : "hover-underline-animation"
          }`}
        >
          Sự kiện
        </h1>
      </div>
      <div
        ref={slider}
        className="relative overflow-hidden w-[80%] mx-auto py-10"
      >
        <div
          className="w-full mx-auto flex "
          style={{
            transform: `translateX(${
              openTab === 1
                ? maxWidthPromotion > widthItem * index
                  ? -widthItem * index
                  : -(slider.current?.clientWidth
                      ? listImagePromotion.length * widthItem -
                        slider.current?.clientWidth
                      : 0)
                : maxWidthEvent > widthItem * index
                ? -widthItem * index
                : -(slider.current?.clientWidth
                    ? listImageEvent.length * widthItem -
                      slider.current?.clientWidth
                    : 0)
            }px)`,
            transition: "all .8s",
          }}
        >
          {openTab === 1
            ? listImagePromotion.map((item, id) => (
                <img
                  className="w-[450px] cursor-pointer h-[250px]"
                  key={id}
                  src={item.url}
                  alt="logo"
                />
              ))
            : listImageEvent.map((item, id) => (
                <img
                  className="w-[450px] cursor-pointer h-[250px]"
                  key={id}
                  src={item.url}
                  alt="logo"
                />
              ))}
        </div>
      </div>
      <ChevronLeftIcon
        onClick={slideLeft}
        className="h-10 w-10 text-white z-50 absolute top-0 -bottom-10  my-auto left-24 opacity-40 hover:opacity-100 duration-200 cursor-pointer"
      />
      <ChevronRightIcon
        onClick={slideRight}
        className="h-10 w-10 text-white z-20 absolute top-0 -bottom-10 my-auto right-24 opacity-40 hover:opacity-100 duration-200 cursor-pointer"
      />
    </div>
  );
}
