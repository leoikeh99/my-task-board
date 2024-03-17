"use client";

import { classNames } from "@/utils";
import Image from "next/image";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  icon: string;
  bg?: string;
  type?: "button" | "submit" | "reset";
  action?: (payload: FormData) => void;
};

const ActionButton = ({ text, icon, bg, type, action }: Props) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={classNames(bg ? bg : "bg-[#3662E3]", "button")}
      disabled={pending}
      formAction={action}
      type={type}
    >
      {text}
      <Image src={icon} alt="" width={25} height={25} />
    </button>
  );
};

export default ActionButton;
