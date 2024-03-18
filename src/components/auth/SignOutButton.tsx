import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SignOutButton = ({ children }: Props) => {
  return <button onClick={() => signOut()}>{children}</button>;
};

export default SignOutButton;
