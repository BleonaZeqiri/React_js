import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";

import "./ExpensesFilter.css";

function Loading() {
  return <>Loading...</>;
}

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
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
        <div className="expenses-filter">
          <div className="expenses-filter__control">
            <label>{t("Filter-by-year")}</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
      </Suspense>
    </LocaleContext.Provider>
  );
};

export default ExpensesFilter;
