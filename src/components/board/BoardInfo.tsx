import Image from "next/image";
import React from "react";

type Props = {};

const BoardInfo = (props: Props) => {
  return (
    <div className="flex items-start gap-4 mb-10">
      <Image src="/assets/Logo.svg" alt="logo" width={50} height={50} />
      <div>
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-[2.5rem]">My Task Board</h1>
          <button>
            <Image
              src="/assets/Edit_duotone.svg"
              alt="menu"
              width={30}
              height={30}
            />
          </button>
        </div>
        <p>Tasks to keep organized.</p>
      </div>
    </div>
  );
};

export default BoardInfo;
