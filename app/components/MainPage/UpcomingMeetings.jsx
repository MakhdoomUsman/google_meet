import Image from "next/image";
import React from "react";

export default function UpcomingMeetings() {
  return (
    <div className=" grid grid-cols-2 gap-5 mt-5 ">
      <div className=" bg-[#1C1F2E] text-[#F5FCFF] p-5 rounded-2xl ">
        <div className=" w-6 ">
          <Image
            src="/meeting/meetingIcon.svg"
            alt="Logo"
            fill
            className="custom-img"
          />
        </div>
        <h1 className=" mt-5 font-bold text-2xl  ">
          Team Sync: Sprint Planning & Updates
        </h1>
        <p className=" ">March 15, 2024 - 10:00 AM</p>
        <div className="pt-7 flex justify-between ">
          <div className=" rounded-full size-10">
            <div className=" w-6 ">
              <Image
                src="/meeting/meetingIcon.svg"
                alt="Logo"
                fill
                className="custom-img"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <button className=" font-semibold text-white bg-primaryLightBlue rounded px-5 ">
              Start
            </button>
            <button className=" font-semibold text-white bg-[#252A41] rounded px-5 ">
              Copy Invitation
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#1C1F2E] text-[#F5FCFF] p-5 rounded-2xl ">
        <div className=" w-6 ">
          <Image
            src="/meeting/meetingIcon.svg"
            alt="Logo"
            fill
            className="custom-img"
          />
        </div>
        <h1 className=" mt-5 font-bold text-2xl  ">
          Team Sync: Sprint Planning & Updates
        </h1>
        <p className=" ">March 15, 2024 - 10:00 AM</p>
        <div className="pt-7 flex justify-between ">
          <div className=" rounded-full size-10">
            <div className=" w-6 ">
              <Image
                src="/meeting/meetingIcon.svg"
                alt="Logo"
                fill
                className="custom-img"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <button className=" font-semibold text-white bg-primaryLightBlue rounded px-5 ">
              Start
            </button>
            <button className=" font-semibold text-white bg-[#252A41] rounded px-5 ">
              Copy Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
