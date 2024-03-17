"use client";
import { Task } from "@prisma/client";
import { createContext, useState } from "react";

type ContextState = {
  sidebar: {
    type: "add task" | "edit task";
    taskData?: Task;
  } | null;
  closeSidebar: () => void;
  openSideBar: (type: "add task" | "edit task", taskData?: Task) => void;
};

const contextDefaultValues: ContextState = {
  sidebar: null,
  closeSidebar: () => {},
  openSideBar: () => {},
};

export const SettingsContext = createContext(contextDefaultValues);

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState<ContextState["sidebar"]>(null);

  const closeSidebar = () => setSidebar(null);

  const openSideBar = (type: "add task" | "edit task", taskData?: Task) =>
    setSidebar({ type, taskData });

  return (
    <SettingsContext.Provider value={{ sidebar, closeSidebar, openSideBar }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
