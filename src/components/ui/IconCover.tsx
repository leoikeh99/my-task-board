"use client";
import React from "react";
import { classNames } from "../../utils";

type Props = { children: React.ReactNode; bg: string; size?: "sm" | "lg" };

const IconCover = ({ children, bg, size }: Props) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={classNames(
        size === "sm"
          ? "h-[1.875rem] w-[1.875rem] sm:w-[2.5rem] sm:h-[2.5rem]"
          : "h-[2.5rem] w-[2.5rem] sm:w-[3.125rem] sm:h-[3.125rem]",
        "rounded-xl flex items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};

export default IconCover;
