import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import "../Footer/Footer.css";
function Loading() {
  return <>Loading...</>;
}
const Footer = () => {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <footer>
          <div className="footer-content">
            <div className="footer-content__items">
              <h3>Bleona</h3>
              <p>{t("about-footer")}</p>
            </div>

            <div className="footer-content__items">
              <h3>{t("contact_footer")}</h3>
              <p>
                <Link to="#">Bleona</Link>
              </p>
              <p> Pristine, Kosovo</p>
              <p>+44 444 444</p>
              <p>zbleona@gmail.com</p>
            </div>
            <div className="footer-content__items">
              <h3>{t("quick-Links_footer")}</h3>
              <p>
                <Link to="/home">{t("Page-Home")}</Link>
              </p>
              <p>
                <Link to="/first-task">{t("Page-First_Task")}</Link>
              </p>
              <p>
                <Link to="/second-task">{t("Page-Second-Task")}</Link>
              </p>
              <p>
                <Link to="/third-task">{t("Page-Third-Task")}</Link>
              </p>
            </div>
            <div className="footer-content__items">
              <h3>{t("social-Media_footer")}</h3>

              <p>
                <Link to="#">Facebook</Link>
              </p>
              <p>
                <Link to="#"> Twitter</Link>
              </p>
              <p>
                <Link to="#"> Instagram</Link>
              </p>
              <p>
                <Link to="#"> LinkedIn</Link>
              </p>
            </div>
          </div>
          <div className="footer-content__h4">
            <h4>{t("Copyright_footer")}</h4>
          </div>
        </footer>
      </Suspense>
    </LocaleContext.Provider>
  );
};

export default Footer;
