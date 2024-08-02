import Image from "next/image";
import React from "react";
import StarImg from "@/public/star.png";

export const HappyClientsBadge = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Image
            key={`${index}star`}
            src={StarImg}
            alt="star"
            width={16}
            height={16}
          />
        ))}
      </div>
      <p className="text-sm text-green font-bold">{text}</p>
    </div>
  );
};
