"use client";

import { Fragment } from "react";
import AddTask from "./forms/AddTask";
import EditTask from "./forms/EditTask";
import SidebarCover from "@/components/ui/SidebarCover";

type Props = {
  boardId: string;
};

const TaskForms = ({ boardId }: Props) => {
  return (
    <Fragment>
      <SidebarCover type="add task">
        <AddTask boardId={boardId} />
      </SidebarCover>
      <SidebarCover type="edit task">
        <EditTask />
      </SidebarCover>
    </Fragment>
  );
};

export default TaskForms;
