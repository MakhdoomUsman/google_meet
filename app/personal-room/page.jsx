import React from "react";

export default function Page() {
  return (
    <div className="mt-20 max-w-[1080px] w-full">
      <h1 className=" text-[30px] font-bold text-white ">
        Personal Meeting Room
      </h1>
      <table className=" table-auto border-separate border-spacing-y-5 border-spacing-6 text-white ">
        <tr>
          <td className=" text-[#C9DDFF] font-medium text-xl ">Topic:</td>
          <td className=" font-bold text-white ">
            JS Mastery’s Personal Meeting Room
          </td>
        </tr>
        <tr>
          <td className=" text-[#C9DDFF] font-medium text-xl ">Meeting ID:</td>
          <td className=" font-bold text-white ">324 531 3821</td>
        </tr>
        <tr>
          <td className=" text-[#C9DDFF] font-medium text-xl ">Passcode:</td>
          <td className=" font-bold text-white ">********</td>
        </tr>
        <tr>
          <td className=" text-[#C9DDFF] font-medium text-xl ">Invite Link:</td>
          <td className=" font-bold text-white ">
            https://us93web.qoom.us/345672?pwd=3f2uiui3h4un134if
          </td>
        </tr>
      </table>
      <div className="flex gap-2">
        <button className=" font-semibold py-2 text-white bg-primaryLightBlue rounded px-5 ">
          Start the meeting
        </button>
        <button className=" font-semibold py-2 text-white bg-[#252A41] rounded px-5 ">
          Copy Invitation
        </button>
        <button className=" font-semibold py-2 border border-slate-500 text-white rounded px-5 ">
          Edit
        </button>
        <button className=" font-semibold py-2 border border-slate-500 text-white rounded px-5 ">
          Delete
        </button>
      </div>
    </div>
  );
}
