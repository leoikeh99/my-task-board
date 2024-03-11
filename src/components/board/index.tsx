"use client";
import React, { useContext } from "react";
import BoardInfo from "./BoardInfo";
import Tasks from "./task/Tasks";
import IconCover from "../ui/IconCover";
import Image from "next/image";
import { SettingsContext } from "@/context/SettingsContext";

type Props = {};

const Board = (props: Props) => {
  const { openSideBar } = useContext(SettingsContext);
  return (
    <div>
      <BoardInfo />
      <Tasks />
      <button
        className="w-full p-4 rounded-xl flex justify-between gap-1 bg-[#F5E8D5]"
        onClick={() => openSideBar("add task")}
      >
        <div className="flex items-center gap-4">
          <IconCover bg="#E9A23B">
            <Image
              src="/assets/Add_round_duotone.svg"
              alt=""
              width={25}
              height={25}
            />
          </IconCover>
          <p className="font-bold text-lg text-left">Add new task</p>
        </div>
      </button>
    </div>
  );
};

export default Board;
