import React, { useState } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";

const DUMMY_EXPENSES = [
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
    id: "dd4",
    title: "Pen",
    amount: 1.22,
    date: new Date(2023, 4, 14),
  },
  {
    id: "b4",
    title: "Car Insurance",
    amount: 32.22,
    date: new Date(2024, 7, 14),
  },
  {
    id: "b4",
    title: "Book",
    amount: 32.22,
    date: new Date(2024, 7, 14),
  },
  {
    id: "b4",
    title: "Car Insurance",
    amount: 32.22,
    date: new Date(2024, 7, 14),
  },
  {
    id: "b4",
    title: "Book",
    amount: 32.22,
    date: new Date(2024, 7, 14),
  },
];
const Home = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;
