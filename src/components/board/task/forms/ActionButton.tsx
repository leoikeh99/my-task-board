"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  icon: string;
};

const ActionButton = ({ text, icon }: Props) => {
  const { pending } = useFormStatus();

  return (
    <button className="button bg-[#3662E3]" disabled={pending}>
      {text}
      {!pending ? (
        <Image src={icon} alt="" width={25} height={25} />
      ) : (
        <span className="w-6 h-6 rounded-full border-[3px] border-white border-t-transparent animate-spin" />
      )}
    </button>
  );
};

export default ActionButton;
