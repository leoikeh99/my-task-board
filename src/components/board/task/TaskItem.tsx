"use client";
import Image from "next/image";
import React, { useContext } from "react";
import IconCover from "../../ui/IconCover";
import { icons, statusInfo } from "@/constants";
import type { Task } from "@prisma/client";
import { SettingsContext } from "@/context/SettingsContext";

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const { openSideBar } = useContext(SettingsContext);
  const { title, desc, status, icon } = task;

  const openEditTask = () => {
    openSideBar("edit task", task);
  };

  return (
    <button
      style={{ backgroundColor: statusInfo[status].bg }}
      className="p-3 sm:p-4 rounded-xl flex justify-between gap-2"
      onClick={openEditTask}
    >
      <div className="flex gap-2 sm:gap-4">
        <div className="min-w-[1.25rem] sm:min-w-[1.563rem]">
          <IconCover bg="white">
            <Image
              src={icons[icon]}
              alt=""
              width={0}
              height={0}
              className="h-[1.25rem] w-[1.25rem] sm:h-[1.563rem] sm:w-[1.563rem]"
            />
          </IconCover>
        </div>
        <div className="self-center">
          <p className="font-bold sm:text-lg text-left">{title}</p>
          {desc && (
            <p className="text-left text-sm max-w-56 xs:max-w-64 text-gray-700">
              {desc}
            </p>
          )}
        </div>
      </div>
      <IconCover bg={statusInfo[status].iconBg}>
        <Image
          src={statusInfo[status].icon}
          alt=""
          width={0}
          height={0}
          className="h-[1.25rem] w-[1.25rem] sm:h-[1.563rem] sm:w-[1.563rem]"
        />
      </IconCover>
    </button>
  );
};

export default TaskItem;
