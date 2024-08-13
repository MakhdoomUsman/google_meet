import Image from "next/image";
import React from "react";
import Logo from "@/public/Icons/meetLogo.png";
import Container from "./Container";
import Link from "next/link";
export default function Header() {
  return (
    <Container>
      {/* <div className="flex py-5 items-center justify-between">
        <div className=" flex gap-2 items-center">
          <div className="w-12 ">
            <Image src={Logo} alt="Logo" fill className="custom-img" />
          </div>
          <p className=" font-lg text-[27px]">Google Meet</p>
          <ul className=" flex gap-5 items-center text-sm font-bold text-gray-500">
            <li>At a glance</li>
            <li>How it works</li>
            <li>Plan and Price</li>
          </ul>
        </div>
        <div className="flex gap-2.5 items-center">
          <Link href="/" className="text-sm font-bold text-gray-500">
            Sign In
          </Link>
          <button className=" border px-5 py-3 rounded-lg font-bold text-white text-sm bg-blue-600">
            {" "}
            Join meeting
          </button>
          <button className=" border px-5 py-3 rounded-lg font-bold text-white text-sm bg-blue-600">
            {" "}
            Start a meeting
          </button>
        </div>
      </div> */}
    </Container>
  );
}
