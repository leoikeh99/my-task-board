"use client";
import { SettingsContext } from "@/context/SettingsContext";
import { Board } from "@prisma/client";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {
  board: Board;
};

const BoardInfo = ({ board }: Props) => {
  const { openDialog } = useContext(SettingsContext);
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
        <h1 className="text-[2rem] md:text-[2.5rem] mb-3">
          {board.title}{" "}
          <button onClick={() => openDialog("edit board")}>
            <Image
              src="/assets/Edit_duotone.svg"
              alt="menu"
              width={0}
              height={0}
              className="h-[1.56rem] w-[1.56rem] md:h-[1.875rem] md:w-[1.875rem]"
            />
          </button>
        </h1>
        {board.desc && <p>{board.desc}</p>}
      </div>
    </div>
  );
};

export default BoardInfo;
