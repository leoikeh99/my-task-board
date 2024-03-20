import { icons } from "@/constants";
import type { $Enums } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  defaultValue: $Enums.Icon;
};

const IconRadioGroup = ({ defaultValue }: Props) => {
  return (
    <div className="icon-radio-group">
      {Object.entries(icons).map(([key, value], index) => (
        <div key={key}>
          <input
            type="radio"
            id={key}
            name="icon"
            value={key}
            defaultChecked={key === defaultValue}
          />
          <label htmlFor={key}>
            <span className="sr-only">Select {key} icon</span>
            <Image src={value} alt="" width={25} height={25} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default IconRadioGroup;
