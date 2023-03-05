import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="w-full bg-neutral-900 p-5">
      <div className="flex flex-col justify-center gap-y-2">
        <header className="flex justify-between">
          <h2 className="text-3xl font-normal text-neutral-50">
            {task.taskName}
          </h2>
          <button
            className="text-xl font-normal text-red-500"
            onClick={() => {
              completeTask(task.taskName);
            }}
          >
            Delete
          </button>
        </header>
        <p className="text-xl font-normal text-sky-400">{task.description}</p>
      </div>
    </div>
  );
};

export default TodoTask;
