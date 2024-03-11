"use client";
import React from "react";

type Props = { children: React.ReactNode; bg: string };

const IconCover = ({ children, bg }: Props) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default IconCover;
