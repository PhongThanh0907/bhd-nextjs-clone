/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainButton from "./MainButton";
import { TicketIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function ItemMovie({}: Props) {
  return (
    <div className="w-[200px] h-[425px] relative">
      <img
        src="https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002593?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500"
        alt="img"
        className="w-full h-[298px]"
      />
      <h1 className="text-center font-bold mt-3">SIÊU LỪA GẶP SIÊU LẦY</h1>
      <div className="absolute bottom-0 w-full">
        <MainButton
          title="Mua vé"
          className="gap-2 w-full py-2 text-sm font-bold"
          icon={<TicketIcon className="h-6 w-6" />}
        />
      </div>
    </div>
  );
}
