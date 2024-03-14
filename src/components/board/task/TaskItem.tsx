"use client";
import Image from "next/image";
import React from "react";
import IconCover from "../../ui/IconCover";
import { icons } from "@/constants";
import { $Enums } from "@prisma/client";

type Props = {
  icon: $Enums.Icon;
  status: $Enums.Status;
  title: string;
  desc?: string;
};

const statusInfo = {
  IN_PROGRESS: {
    icon: "/assets/Time_atack_duotone.svg",
    iconBg: "#E9A23B",
    bg: "#F5D565",
  },
  TODO: { bg: "#E3E8EF" },
  COMPLETED: {
    icon: "/assets/Done_round_duotone.svg",
    iconBg: "#32D657",
    bg: "#A0ECB1",
  },
  WONT_DO: {
    icon: "/assets/close_ring_duotone.svg",
    iconBg: "#DD524C",
    bg: "#F7D4D3",
  },
};

const TaskItem = ({ icon, status, title, desc }: Props) => {
  return (
    <button
      style={{ backgroundColor: statusInfo[status].bg }}
      className="p-3 sm:p-4 rounded-xl flex justify-between gap-1"
    >
      <div className="flex gap-2 sm:gap-4">
        <IconCover bg="white">
          <Image
            src={icons[icon]}
            alt=""
            width={0}
            height={0}
            className="h-[1.25rem] w-[1.25rem] sm:h-[1.563rem] sm:w-[1.563rem]"
          />
        </IconCover>
        <div className="self-center">
          <p className="font-bold sm:text-lg text-left">{title}</p>
          {desc && (
            <p className="text-left text-sm max-w-64 text-gray-700">{desc}</p>
          )}
        </div>
      </div>
      {status !== "TODO" && (
        <IconCover bg={statusInfo[status].iconBg}>
          <Image
            src={statusInfo[status].icon}
            alt=""
            width={0}
            height={0}
            className="h-[1.25rem] w-[1.25rem] sm:h-[1.563rem] sm:w-[1.563rem]"
          />
        </IconCover>
      )}
    </button>
  );
};

export default TaskItem;
