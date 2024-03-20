"use client";
import type { Task } from "@prisma/client";
import { createContext, useState } from "react";

type ContextState = {
  sidebar: {
    type: "add task" | "edit task";
    taskData?: Task;
  } | null;
  dialog: "edit board" | null;
  closeSidebar: () => void;
  closeDialog: () => void;
  openDialog: (type: "edit board") => void;
  openSideBar: (type: "add task" | "edit task", taskData?: Task) => void;
};

const contextDefaultValues: ContextState = {
  sidebar: null,
  dialog: null,
  closeSidebar: () => {},
  closeDialog: () => {},
  openDialog: () => {},
  openSideBar: () => {},
};

export const SettingsContext = createContext(contextDefaultValues);

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState<ContextState["sidebar"]>(null);
  const [dialog, setDialog] = useState<ContextState["dialog"]>(null);

  const closeSidebar = () => setSidebar(null);
  const closeDialog = () => setDialog(null);

  const openSideBar = (type: "add task" | "edit task", taskData?: Task) =>
    setSidebar({ type, taskData });

  const openDialog = (type: "edit board") => setDialog(type);

  return (
    <SettingsContext.Provider
      value={{
        sidebar,
        dialog,
        closeSidebar,
        openSideBar,
        closeDialog,
        openDialog,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
