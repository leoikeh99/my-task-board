import { icons } from "@/constants";
import Image from "next/image";
import React from "react";

const IconRadioGroup = () => {
  return (
    <div className="icon-radio-group">
      {Object.entries(icons).map(([key, value], index) => (
        <div key={key}>
          <input
            type="radio"
            id={key}
            name="icon"
            value={key}
            defaultChecked={index === 0}
          />
          <label htmlFor={key}>
            <Image src={value} alt={`${key} icon`} width={25} height={25} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default IconRadioGroup;
