import React from "react";
import { TaskList } from "../components/TaskList/TaskList";
import { FileList } from "../components/FileList/FilesList";

export const FirstTask = () => {
  return (
    <main>
      <TaskList />
      <FileList />
    </main>
  );
};
