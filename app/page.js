import Container from "./components/common/Container";
import MeetingDetailPoster from "./components/MainPage/MeetingDetailPoster";
import MeetingOptions from "./components/MainPage/MeetingOptions";
import UpcomingMeetings from "./components/MainPage/UpcomingMeetings";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <main className="mt-20 max-w-[1080px] w-full h-full">
      <MeetingDetailPoster />
      <MeetingOptions />
      <div className="flex mt-7 justify-between items-center">
        <h1 className=" font-bold text-[30px] text-white ">
          Today’s Upcoming Meetings
        </h1>
        <p className=" text-lg text-[#ECF0FF] ">See all</p>
      </div>
      <UpcomingMeetings />
      {/* <MainSection /> */}
    </main>
  );
}
