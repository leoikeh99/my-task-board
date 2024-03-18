import SignInButton from "@/components/auth/SignInButton";
import Image from "next/image";
import React from "react";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) redirect("/");

  return (
    <div className="grid items-center content-center justify-center justify-items-center gap-6 h-dvh w-[min(93%,32rem)] m-auto -mt-5">
      <Image
        src="/assets/Logo.svg"
        alt="logo"
        width={0}
        height={0}
        className="h-[2.5rem] w-[2.5rem] md:h-[3.125rem] md:w-[3.125rem]"
      />
      <div className="mb-7">
        <h1 className="text-center font-medium text-4xl">
          Sign in to TaskBoard
        </h1>
        <p className="text-center text-gray-700 text-lg font-medium">
          Welcome back, sign in to continue
        </p>
      </div>
      <SignInButton provider="github">
        <div className="flex items-center justify-center gap-4 text-xl p-3 shadow-md border border-gray-400 rounded-xl w-full">
          <Image
            src="/assets/github.svg"
            alt="github"
            width={0}
            height={0}
            className="h-[1.5rem] w-[1.5rem]"
          />
          <p className="text-gray-700">Github</p>
        </div>
      </SignInButton>
    </div>
  );
}
