import React from "react";
import { Logo } from "./Logo";
import Image from "next/image";
import { ImInstagram } from "react-icons/im";
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Divider } from "@/app/[...lang]/(home)/modules/Divider";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-dark py-8 text-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded"
          />
          <div className="flex gap-4">
            <a href="#" target="_blank">
              <BsInstagram />
            </a>
            <a href="#" target="_blank">
              <BsTwitterX />
            </a>
            <a href="#" target="_blank">
              <BsLinkedin />
            </a>
            <a href="#" target="_blank">
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
