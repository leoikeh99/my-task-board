"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const BoardInfo = (props: Props) => {
  return (
    <div className="xxs:flex items-start gap-2 xs:gap-4 mb-10">
      <Image
        src="/assets/Logo.svg"
        alt="logo"
        width={0}
        height={0}
        className="h-[2.5rem] w-[2.5rem] md:h-[3.125rem] md:w-[3.125rem]"
      />
      <div>
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-[2rem] md:text-[2.5rem]">My Task Board</h1>
          <button>
            <Image
              src="/assets/Edit_duotone.svg"
              alt="menu"
              width={0}
              height={0}
              className="h-[1.56rem] w-[1.56rem] md:h-[1.875rem] md:w-[1.875rem]"
            />
          </button>
        </div>
        <p>Tasks to keep organized.</p>
      </div>
    </div>
  );
};

export default BoardInfo;
