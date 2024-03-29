"use client";
import React from "react";
import TaskItem from "./TaskItem";
import type { Task } from "@prisma/client";

type Props = {
  tasks: Array<Task>;
};

const Tasks = ({ tasks }: Props) => {
  return (
    <div className="grid gap-3 mb-3 sm:gap-5 sm:mb-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
