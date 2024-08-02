"use client";

import React from "react";
import { BiCollapse, BiCollapseAlt, BiExpand } from "react-icons/bi";
import {
  BsArrowDown,
  BsArrowsCollapse,
  BsArrowsCollapseVertical,
} from "react-icons/bs";
import { CgArrowDown } from "react-icons/cg";
import { FaExpand } from "react-icons/fa";
import { FcCollapse } from "react-icons/fc";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="p-4 cursor-pointer bg-white rounded-lg shadow-sm"
      onClick={toggleOpen}
    >
      <div className="flex justify-between">
        <h6>{question}</h6>
        {isOpen ? (
          <SlArrowUp className="text-green" />
        ) : (
          <SlArrowDown className="text-green" />
        )}
      </div>

      {isOpen && <p className="text-gray-500 mt-2">{answer}</p>}
    </div>
  );
};
