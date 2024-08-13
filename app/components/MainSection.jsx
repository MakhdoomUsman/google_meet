import React from "react";
import Container from "./common/Container";
import Logo from "@/public/Icons/meetLogo.png";
import Image from "next/image";

export default function MainSection() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 items-center gap-20">
          <div className="">
            <p className=" text-[3rem]">
              Premium video meeting. Now it is available for free to everyone.
            </p>
            <p className=" text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              asperiores quis maxime quibusdam voluptatum aperiam natus sunt,
              eaque saepe excepturi.
            </p>
          </div>
          <div className=" ">
            <Image src={Logo} alt="Logo" fill className="custom-img" />
          </div>
        </div>
      </Container>
    </div>
  );
}
