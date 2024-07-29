import React from "react";
import TaskItem from "../components/TaskItem/TaskItem";
import dog from "../assets/images/dog.png";
import shipa from "../assets/images/shiba.png";

import "./../components/TaskItem/TaskItem.css";

const TaskList = [
  {
    name: "Domain Length",
    desc: "Does the domain extension math the anguage of the domein neme?",
    img: dog,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math  ",
    img: dog,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension  ",
    img: dog,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
  {
    name: "Domain Length2",
    desc: "Does the domain extension math the anguage of the domein neme?2 ",
    img: shipa,
  },
];
export const FirstTask = () => {
  return (
    <div className="Items">
      <div className="box">
        {TaskList.map((task) => {
          return <TaskItem item={task} />;
        })}
      </div>
    </div>
  );
};
