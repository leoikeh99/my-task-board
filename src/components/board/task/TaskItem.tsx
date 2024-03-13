"use client";
import Image from "next/image";
import React from "react";
import IconCover from "../../ui/IconCover";
import { icons } from "@/constants";

type Props = {
  icon: Icon;
  status: Status;
  title: string;
  desc?: string;
};

const statusInfo = {
  "in-progress": {
    icon: "/assets/Time_atack_duotone.svg",
    iconBg: "#E9A23B",
    bg: "#F5D565",
  },
  "to-do": { bg: "#E3E8EF" },
  completed: {
    icon: "/assets/Done_round_duotone.svg",
    iconBg: "#32D657",
    bg: "#A0ECB1",
  },
  "wont-do": {
    icon: "/assets/close_ring_duotone.svg",
    iconBg: "#DD524C",
    bg: "#F7D4D3",
  },
};

const TaskItem = ({ icon, status, title, desc }: Props) => {
  return (
    <button
      style={{ backgroundColor: statusInfo[status].bg }}
      className="p-4 rounded-xl flex justify-between gap-1"
    >
      <div className="flex gap-4">
        <IconCover bg="white">
          <Image src={icons[icon]} alt="" width={25} height={25} />
        </IconCover>
        <div className="self-center">
          <p className="font-bold text-lg text-left">{title}</p>
          {desc && (
            <p className="text-left text-sm max-w-64 text-gray-700">{desc}</p>
          )}
        </div>
      </div>
      {status !== "to-do" && (
        <IconCover bg={statusInfo[status].iconBg}>
          <Image src={statusInfo[status].icon} alt="" width={25} height={25} />
        </IconCover>
      )}
    </button>
  );
};

export default TaskItem;
