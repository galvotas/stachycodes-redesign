import React from "react";
import { AccordionItem } from "./AccordionItem";
import { purify } from "@/utils/misc";

interface AccordionProps {
  items: { question: string; answer: string }[];
  caption: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, caption }) => {
  return (
    <div className="grid gap-2 md:gap-4">
      {items.map((item) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
      <p
        className="text-center text-gray-500 mt-4"
        dangerouslySetInnerHTML={{ __html: purify(caption) }}
      />
    </div>
  );
};
