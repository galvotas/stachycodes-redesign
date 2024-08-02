import { HappyClientsBadge } from "@/components/HappyClientsBadge";
import Image from "next/image";
import React from "react";
import AntanasImg from "@/public/antanas.jpeg";
import { purify } from "@/utils/misc";

export interface ContactDetailsProps {
  title: string;
  description: string;
  happyClientLabel: string;
}

export const ContactDetails = ({
  title,
  description,
  happyClientLabel,
}: ContactDetailsProps) => {
  return (
    <div>
      <div className="inline-block rounded-full border border-white overflow-hidden mb-4">
        <Image src={AntanasImg} alt="stachy" width={100} height={100} />
      </div>
      <h2
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: purify(title) }}
      />
      <p
        className="text-lg mb-4"
        dangerouslySetInnerHTML={{ __html: purify(description) }}
      ></p>
      <HappyClientsBadge text={happyClientLabel} />
    </div>
  );
};
