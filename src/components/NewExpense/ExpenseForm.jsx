import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";

import "./ExpenseForm.css";
function Loading() {
  return <>Loading...</>;
}

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">{t("Title_expenses")}</label>
              <input
                type="text"
                id="title"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">{t("Amount_expenses")}</label>
              <input
                type="number"
                id="amount"
                min="0.01"
                value={enteredAmount}
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">{t("Date_expenses")}</label>
              <input
                type="date"
                id="date"
                value={enteredDate}
                min="2019-01-01"
                max="2024-12-31"
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button type="submit">{t("Add-Expense")}</button>
            </div>
          </div>
        </form>
      </Suspense>
    </LocaleContext.Provider>
  );
};

export default ExpenseForm;
