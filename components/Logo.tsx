import Image from "next/image";
import React from "react";
import LogoImg from "@/public/logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center color-white gap-2">
      <Image
        src={LogoImg}
        alt="logo"
        width={40}
        height={40}
        className="border-1 rounded"
      />
      <p className="text-xs md:text-lg font-black">STACHY CODES</p>
    </div>
  );
};
