import React from "react";
import { FileList } from "../components/FileList/FilesList";
import { TaskList } from "../components/TaskList/TaskList";

export const FirstTask = () => {
  return (
    <main>
      <TaskList />
      <FileList />
    </main>
  );
};
