import logo from "./logo.svg";
import "./App.css";
import React from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "b1",
      title: "Toilet Paper",
      amount: 22.22,
      date: new Date(2020, 7, 14),
    },
    {
      id: "b2",
      title: "Paper",
      amount: 12.22,
      date: new Date(2021, 7, 14),
    },
    {
      id: "b3",
      title: "Car Insurance",
      amount: 23.22,
      date: new Date(2022, 7, 14),
    },
    {
      id: "b4",
      title: "Book",
      amount: 32.22,
      date: new Date(2023, 7, 14),
    },
  ];
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );

  {
    /* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */
  }
};

export default App;
