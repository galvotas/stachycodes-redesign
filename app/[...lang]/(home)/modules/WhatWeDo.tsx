import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import BrandingImg from "@/public/branding.png";
import SpeedometerImg from "@/public/speedometer.png";
import DirectionsImg from "@/public/directions.png";
import ResponsiveImg from "@/public/responsive.png";
import SeoImg from "@/public/seo.png";
import MoneyImg from "@/public/money.png";
import { purify } from "@/utils/misc";

export interface WhatWeDo {
  section_title: string;
  description: string;
  features: Feature[];
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
}

export const WhatWeDo = (dict: WhatWeDo) => {
  const data = dict.features.map((f, i) => {
    return {
      ...f,
      image: images[i],
    };
  });

  return (
    <section className="bg-lightGray py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-0 max-w-6xl">
        <h2
          className="text-center mb-6"
          dangerouslySetInnerHTML={{
            __html: purify(dict.section_title),
          }}
        />
        <p className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          {dict.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xs">
              <div className="inline-block rounded bg-gradient-to-r from-green to-[#50e2d3] p-4 mb-2">
                <Image src={item.image} alt="icon" width={24} height={24} />
              </div>
              <h3 className="mb-4">{item.title}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: purify(item.description) }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button label={dict.cta} />
        </div>
      </div>
    </section>
  );
};

const images = [
  BrandingImg,
  SpeedometerImg,
  DirectionsImg,
  SeoImg,
  ResponsiveImg,
  MoneyImg,
];
