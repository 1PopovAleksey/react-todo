import React, { FC, ChangeEvent, useState } from "react";

import TodoTask from "./components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDescription(String(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      description: description,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDescription("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      }),
    );
  };

  return (
    <>
      <header className="bg-neutral-900">
        <div className="container mx-auto flex flex-col items-center justify-between gap-y-3 p-5 lg:flex-row lg:gap-0">
          <h1 className="text-3xl font-medium text-neutral-50">
            <span className="text-sky-400">React</span> Todo
          </h1>
          <div className="flex h-full w-full flex-col gap-x-1 sm:h-11 sm:flex-row lg:w-max">
            <input
              className="h-11 w-full bg-neutral-50 px-3 focus:outline-none"
              type="text"
              placeholder="Task"
              name="task"
              value={task}
              onChange={handleChange}
            />
            <input
              className="h-11 w-full bg-neutral-50 px-3 focus:outline-none"
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={handleChange}
            />
            <button
              className="w-full bg-sky-400 p-2 text-lg font-medium text-neutral-50 sm:px-3"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="">
          <div className="container mx-auto">
            <div className="flex flex-col gap-y-2 p-5">
              {todo.map((task: ITask, key: number) => {
                return (
                  <TodoTask key={key} task={task} completeTask={completeTask} />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
