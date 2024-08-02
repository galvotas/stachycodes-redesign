import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Navigation } from "@/modules/Navigation";
import { HappyClientsBadge } from "@/components/HappyClientsBadge";
import MockupImg from "@/public/mockup.png";
import { Locale } from "@/i18n-config";
import { purify } from "@/utils/misc";

interface HeroDict {
  caption: string;
  title: string;
  subtitle: string;
  secondary_subtitle: string;
  cta: string;
}

export const Hero = ({ lang, dict }: { lang: Locale; dict: HeroDict }) => {
  return (
    <section className="bg-dark text-white pb-8 md:pb-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="py-4">
          <Navigation lang={lang} ctaLabel={dict.cta} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-8 md:py-16">
          <div>
            <HappyClientsBadge text={dict.caption} />
            <h1
              className="my-4"
              dangerouslySetInnerHTML={{
                __html: purify(dict.title),
              }}
            />
            <div className="max-w-xl mb-4">
              <p className="text-lg font-semibold">{dict.subtitle}</p>
              <br />
              <p className="text-lg font-semibold">{dict.secondary_subtitle}</p>
            </div>
            <Button label={dict.cta} />
          </div>
          <div className="relative">
            <Image
              priority
              src={MockupImg}
              alt="Picture of the author"
              sizes="100vw"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
