import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SettingsProvider from "@/context/SettingsContext";
import dynamic from "next/dynamic";

const ToastProviderNoSSR = dynamic(() => import("@/components/ToastProvider"), {
  ssr: false,
});
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Board",
  description:
    "Effortlessly organize your tasks and projects with customizable boards. Streamline your workflow and stay on top of your goals with intuitive task management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SettingsProvider>
        <body className={outfit.className}>
          <ToastProviderNoSSR />
          {children}
        </body>
      </SettingsProvider>
    </html>
  );
}
