"use client";
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@prisma/client";

type Props = {
  tasks: Array<Task>;
};

const Tasks = ({ tasks }: Props) => {
  return (
    <div className="grid gap-3 mb-3 sm:gap-5 sm:mb-5">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          desc={task.desc}
          icon={task.icon}
          status={task.status}
        />
      ))}
    </div>
  );
};

export default Tasks;
