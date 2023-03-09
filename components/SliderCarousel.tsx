import React, { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import ItemMovie from "./ItemMovie";

type Props = {};

export default function SliderCarousel({}: Props) {
  const slideRef = useRef<any>(null);

  const scrollLeft = () => {
    if (slideRef.current?.scrollLeft && slideRef.current?.scrollLeft >= 0) {
      return (slideRef.current.scrollLeft -= 400);
    }
  };
  const scrollRight = () => {
    if (slideRef.current?.scrollLeft || slideRef.current.scrollLeft >= 0) {
      return (slideRef.current.scrollLeft += 400);
    }
  };

  return (
    <div className="relative">
      <button className="p-2 m-2 rounded-full absolute top-0 bottom-0 left-10 text-gray-500 hover:text-white duration-200">
        <ChevronLeftIcon className="h-10 w-10" onClick={() => scrollLeft()} />
      </button>
      <button className="p-2 m-2 rounded-full absolute top-0 bottom-0 right-10 text-gray-500 hover:text-white duration-200">
        <ChevronRightIcon className="h-10 w-10" onClick={() => scrollRight()} />
      </button>
      <div
        id="content"
        ref={slideRef}
        className="flex max-w-7xl mx-auto overflow-x-auto scroll-smooth scrollbar-hide gap-6"
      >
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
        <div>
          <ItemMovie />
        </div>
      </div>
    </div>
  );
}
