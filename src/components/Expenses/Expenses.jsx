import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items?.map((expense, index) => {
        return (
          <ExpenseItem
            key={`expenseItem-${index}`}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
