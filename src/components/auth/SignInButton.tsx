"use client";
import { signIn } from "next-auth/react";

type Props = {
  provider: "github";
  children: React.ReactNode;
};

const GithubSignInButton = ({ provider, children }: Props) => {
  return (
    <button onClick={() => signIn(provider)} className="w-full">
      {children}
    </button>
  );
};

export default GithubSignInButton;
