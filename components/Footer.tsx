import React from "react";
import Image from "next/image";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import LogoImg from "@/public/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-dark py-8 text-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <Image
            src={LogoImg}
            alt="logo"
            width={40}
            height={40}
            className="rounded"
          />
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/antanasandrulis/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.youtube.com/@stachycodes"
              target="_blank"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 font-bold mt-4">
        &copy; {new Date().getFullYear()} STACHY CODES. All rights reserved.
      </p>
    </footer>
  );
};
