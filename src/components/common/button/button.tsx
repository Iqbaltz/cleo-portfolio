import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: Props) {
  return (
    <button
      className={`py-3 px-6 font-semibold text-xl text-white bg-primary w-fit ${className}`}
    >
      {children}
    </button>
  );
}
