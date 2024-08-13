"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useParams, usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const params = usePathname();
  const navbar = [
    {
      name: "home",
      slug: "/",
      icon: "",
    },
    {
      name: "Upcoming",
      slug: "/upcoming-meet",
      icon: "",
    },
    {
      name: "Previous",
      slug: "/previous-meet",
      icon: "",
    },
    {
      name: "Recordings",
      slug: "/recordings",
      icon: "",
    },
    {
      name: "Personal Room",
      slug: "/personal-room",
      icon: "",
    },
  ];
  console.log(params);

  function redirectRoute(data) {
    // redirect(data?.slug);
  }
  return (
    <div className=" bg-primaryBlue p-5  w-full h-full">
      <div className=" font-bold text-xl uppercase text-white">Xzoom</div>
      <div className="pt-10">
        {navbar.map((data, id) => (
          <Link href={data?.slug} key={id}>
            <div
              //   key={id}
              // onClick={() => redirectRoute(data)}
              className={`${
                params === data?.slug && "bg-primaryLightBlue rounded-lg"
              } py-3.5 px-2.5 flex gap-2.5 items-center`}
            >
              <div className=" size-5 ">
                <Image
                  src="/Icons/gLogo.svg"
                  alt="Logo"
                  fill
                  className="custom-img"
                />
              </div>
              <h1 className=" font-medium capitalize text-[#C9DDFF]">
                {data?.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
