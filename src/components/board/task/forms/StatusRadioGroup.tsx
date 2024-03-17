import IconCover from "@/components/ui/IconCover";
import { statusInfo } from "@/constants";
import { $Enums } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  defaultValue: $Enums.Status;
};

const StatusRadioGroup = ({ defaultValue }: Props) => {
  return (
    <div className="status-radio-group">
      {Object.entries(statusInfo).map(([key, value]) => (
        <div key={key}>
          <input
            type="radio"
            id={key}
            name="status"
            value={key}
            defaultChecked={key === defaultValue}
          />
          <label htmlFor={key}>
            <IconCover bg={value.iconBg}>
              <Image
                src={value.icon}
                alt={`${key} icon`}
                width={25}
                height={25}
              />
            </IconCover>
            {value.title}
            <span className="bg-[#3662E3] rounded-full h-[20px] w-[20px] flex items-center justify-center ml-auto">
              <Image
                src="/assets/done_round.svg"
                alt=""
                width={13}
                height={13}
              />
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default StatusRadioGroup;
