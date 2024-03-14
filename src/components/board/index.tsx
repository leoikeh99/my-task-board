"use client";
import React, { useContext } from "react";
import BoardInfo from "./BoardInfo";
import Tasks from "./task/Tasks";
import IconCover from "../ui/IconCover";
import Image from "next/image";
import { SettingsContext } from "@/context/SettingsContext";
import { Board, Task } from "@prisma/client";

type Props = {
  board: Board & { tasks: Array<Task> };
};

const Board = ({ board }: Props) => {
  const { openSideBar } = useContext(SettingsContext);
  return (
    <div>
      <BoardInfo board={board} />
      <Tasks tasks={board.tasks} />
      <button
        className="w-full p-3 sm:p-4 rounded-xl flex justify-between gap-1 bg-[#F5E8D5]"
        onClick={() => openSideBar("add task")}
      >
        <div className="flex gap-2 sm:gap-4 items-center">
          <IconCover bg="#E9A23B">
            <Image
              src="/assets/Add_round_duotone.svg"
              alt=""
              width={0}
              height={0}
              className="h-[1.25rem] w-[1.25rem] sm:h-[1.563rem] sm:w-[1.563rem]"
            />
          </IconCover>
          <p className="font-bold sm:text-lg text-left">Add new task</p>
        </div>
      </button>
    </div>
  );
};

export default Board;
