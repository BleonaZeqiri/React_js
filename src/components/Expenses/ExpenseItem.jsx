import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";

import "./ExpenseItem.css";

const ExpenseItem = ({ date, title: initialTitle, amount }) => {
  const [title, setTitle] = useState(initialTitle);
  console.log("ExpenseItem evaluated by React");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
