import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="w-[580px] rounded-2xl bg-[#1C1F2E] px-8 py-16 mx-auto shadow">
        <h1 className="font-bold uppercase text-white text-xl">XZoom</h1>
        <p className=" text-xs text-slate-400 ">to continue to Xzoom</p>
        <div className="size-14 rounded-lg border border-slate-500 shadow flex justify-center mt-10 items-center text-xl font-bold text-white">
          <div className=" ">
            <Image
              src="/Icons/gLogo.svg"
              alt="Logo"
              fill
              className="custom-img"
            />
          </div>
        </div>
        <label htmlFor="email" className=" text-slate-300 text-sm block mt-10">
          Email Address
        </label>
        <input
          type="email"
          className="bg-[#252A41] w-full rounded p-2.5 mt-2 text-slate-400"
        />
        <button className=" bg-primaryLightBlue text-white w-full p-2.5 rounded mt-5 font-semibold text-sm uppercase ">
          Continue
        </button>
        <div className="flex justify-between mt-5 items-center">
          <h1 className=" text-slate-400 text-sm font-medium">
            No Account ? <span className=" text-primaryLightBlue">Sign Up</span>{" "}
          </h1>
          <div className="space-x-3 text-sm text-slate-400 font-medium">
            <span>Help</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
