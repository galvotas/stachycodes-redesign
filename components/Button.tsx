import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
}

export const Button = ({ className, label, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-green w-full md:w-auto text-white px-4 py-4 rounded font-black text-lg disabled:bg-gray-300 ${className}`}
      {...rest}
    >
      {label} &rarr;
    </button>
  );
};
