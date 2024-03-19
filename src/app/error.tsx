"use client";
import "@/styles/formStyles.css";
import Image from "next/image";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="w-[min(93%,32rem)] m-auto h-dvh grid place-items-center items-center content-center gap-7 -mt-5">
      <p className="text-5xl xs:text-7xl">🙁</p>
      <h2 className="text-xl xs:text-3xl text-center">
        Oops, something went wrong!
      </h2>
      <button className="button bg-[#3662E3]" onClick={() => reset()}>
        <Image
          src="/assets/retry.svg"
          alt="menu"
          width={0}
          height={0}
          className="h-[1rem] w-[1rem]"
        />
        Try again
      </button>
    </div>
  );
}
