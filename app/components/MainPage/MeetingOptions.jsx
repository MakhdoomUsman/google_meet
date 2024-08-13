import Image from "next/image";
import React from "react";

export default function MeetingOptions() {
  return (
    <div className=" w-full grid grid-cols-4 gap-5 mt-7">
      <div className=" rounded-2xl flex flex-col size-[260px] bg-[#FF742E] p-5 justify-between">
        <div className=" w-[56px] ">
          <Image
            src="/meeting/MeetingIcon1.svg"
            alt="Logo"
            fill
            className="custom-img"
          />
        </div>
        <div className=" text-white ">
          <h1 className=" text-2xl font-bold">New Meeting</h1>
          <h1 className=" text-lg">Setup a new recording</h1>
        </div>
      </div>
      <div className=" rounded-2xl flex flex-col size-[260px] bg-[#0E78F9] p-5 justify-between">
        <div className=" w-[56px] ">
          <Image
            src="/meeting/MeetingIcon2.svg"
            alt="Logo"
            fill
            className="custom-img"
          />
        </div>
        <div className=" text-white ">
          <h1 className=" text-2xl font-bold">Join Meeting</h1>
          <h1 className=" text-lg">via invitation link</h1>
        </div>
      </div>
      <div className=" rounded-2xl flex flex-col size-[260px] bg-[#830EF9] p-5 justify-between">
        <div className=" w-[56px] ">
          <Image
            src="/meeting/MeetingIcon3.svg"
            alt="Logo"
            fill
            className="custom-img"
          />
        </div>
        <div className=" text-white ">
          <h1 className=" text-2xl font-bold">Schedule Meeting</h1>
          <h1 className=" text-lg">Plan your meeting</h1>
        </div>
      </div>
      <div className=" rounded-2xl flex flex-col size-[260px] bg-[#F9A90E] p-5 justify-between">
        <div className=" w-[56px] ">
          <Image
            src="/meeting/MeetingIcon4.svg"
            alt="Logo"
            fill
            className="custom-img"
          />
        </div>
        <div className=" text-white ">
          <h1 className=" text-2xl font-bold">View Recordings</h1>
          <h1 className=" text-lg">Meeting recordings</h1>
        </div>
      </div>
    </div>
  );
}
