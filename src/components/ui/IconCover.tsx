"use client";
import React from "react";
import { classNames } from "../../utils";

type Props = { children: React.ReactNode; bg: string; size?: "sm" | "lg" };

const IconCover = ({ children, bg, size }: Props) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={classNames(
        size === "sm" ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]",
        "rounded-xl flex items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};

export default IconCover;
