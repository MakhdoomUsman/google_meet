import React from "react";
import UpcomingMeetings from "../components/MainPage/UpcomingMeetings";

export default function Page() {
  return (
    <div className="mt-20 max-w-[1080px] w-full">
      <h1 className=" text-[30px] font-bold text-white ">Previous Meetings</h1>
      <UpcomingMeetings />
    </div>
  );
}
