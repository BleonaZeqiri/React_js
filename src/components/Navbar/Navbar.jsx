import React, { Suspense, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import "./Navbar.css";

function Loading() {
  return <>Loading...</>;
}

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
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
        <header>
          <h3>Bleona</h3>
          <nav ref={navRef}>
            <Link to="/" onClick={closeNavbar}>
              {t("Page-Home")}
            </Link>
            <Link to="/first-task" onClick={closeNavbar}>
              {t("Page-First_Task")}
            </Link>
            <Link to="/second-task" onClick={closeNavbar}>
              {t("Page-Second-Task")}
            </Link>
            <Link to="/third-task" onClick={closeNavbar}>
              {t("Page-Third-Task")}
            </Link>
            <CustomDropdown locale={locale} handleChange={handleChange} />
            <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default Navbar;
