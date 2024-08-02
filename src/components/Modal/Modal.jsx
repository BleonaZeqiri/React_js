import React, { useState, Suspense } from "react";
import LocaleContext from "../LocaleContext";
import { useTranslation } from "react-i18next";
import ModalItem from "./ModalItem";
import i18n from "../i18n";
import "../Modal/Modal.css";

function Loading() {
  return <>Loading...</>;
}

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  const modalsData = [
    {
      paragraph: "Font Color",
      background: "#333333",
    },
    {
      paragraph: "Background Color",
      background: "#EEEEEE",
    },
    {
      paragraph: "Background Color",
      background: "#FFFFFF",
    },
    {
      paragraph: "Background Color",
      background: "#323232",
    },
  ];

  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <h1>{t("Page-Third-Task")}</h1>
          <button className="openModalBtn" onClick={() => setOpenModal(true)}>
            {t("Open-Modal_modal")}
          </button>
          {openModal && (
            <ModalItem closeModal={setOpenModal} modalsData={modalsData} />
          )}
        </div>
      </Suspense>
    </LocaleContext.Provider>
  );
};

export default Modal;
