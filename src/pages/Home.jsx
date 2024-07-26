import React from "react";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
const Home = () => {
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
  const addExpenseHandler = (expense) => {
    console.log("in Home.jsx");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;
