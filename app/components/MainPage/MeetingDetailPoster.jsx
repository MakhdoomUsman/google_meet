import Image from "next/image";
import React from "react";

export default function MeetingDetailPoster() {
  return (
    <div className=" w-full">
      <div className=" rounded-3xl overflow-hidden relative">
        <div className="absolute text-[#ECF0FF] top-7 left-10 p-2.5 bg-[#FFFFFF]/5 z-10">
          Upcoming Meeting at: 12:30 PM
        </div>
        <div className="absolute bottom-7 left-10 z-10">
          <h1 className=" text-[72px] leading-[72px] font-bold text-white ">
            12:04<span className=" text-2xl uppercase font-medium">PM</span>{" "}
          </h1>
          <p className=" text-2xl font-medium text-[#C9DDFF] ">
            Friday, 29 March 2024
          </p>
        </div>
        <Image
          src="/background/posterBg.svg"
          alt="Logo"
          fill
          className="custom-img"
        />
      </div>
    </div>
  );
}
