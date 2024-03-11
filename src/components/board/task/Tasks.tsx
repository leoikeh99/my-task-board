"use client";
import React from "react";
import TaskItem from "./TaskItem";

type Props = {};

const Tasks = (props: Props) => {
  return (
    <div className="grid gap-5 mb-5">
      <TaskItem
        icon="alarm-clock"
        status="in-progress"
        title="Task in progress"
      />
      <TaskItem icon="weight-lift" status="completed" title="Task completed" />
      <TaskItem icon="coffee-cup" status="wont-do" title="Task wont do" />
      <TaskItem
        icon="books"
        status="to-do"
        title="Task to do"
        desc="Work on a challenge on devchallenges.io, learn Typescript"
      />
    </div>
  );
};

export default Tasks;
