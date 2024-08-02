import React, { useState } from "react";
import albanian_flag from "../../assets/images/albanianflag.png";
import american_flag from "../../assets/images/american-flag.png";
import france_flag from "../../assets/images/France-flag.png";
import "./CustomDropdown.css";
const flags = {
  en: american_flag,
  fr: france_flag,
  al: albanian_flag,
};

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "al", label: "Albanian" },
];

const CustomDropdown = ({ locale, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (code) => {
    handleChange({ target: { value: code } });
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src={flags[locale]} alt={`${locale} flag`} className="flag" />
        {languages.find((lang) => lang.code === locale).label}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => selectLanguage(lang.code)}>
              <img
                src={flags[lang.code]}
                alt={`${lang.label} flag`}
                className="flag"
              />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
