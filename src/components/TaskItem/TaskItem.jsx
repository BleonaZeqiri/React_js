import React from "react";

const TaskItem = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="Dog" />
      <div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default TaskItem;
