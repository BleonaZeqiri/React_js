import React from "react";
import shipa from "../../assets/images/shiba.png";
import dog from "../../assets/images/dog.png";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";
const tasks = [
  {
    title: "Domain Length",
    desc: "Does the domain extension math the anguage of the domein neme?",
    img: dog,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math  ",
    img: dog,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension  ",
    img: dog,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    title: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
];
export const TaskList = () => {
  return (
    <section className="Task__list">
      {tasks?.map((task, index) => {
        return <TaskItem item={task} key={`task-${index}`} />;
      })}
    </section>
  );
};
