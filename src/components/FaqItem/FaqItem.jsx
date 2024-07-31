import React, { useState } from "react";
import "../FaqItem/FaqItem.css";
import faqData from "./FaqData";
import arrow from "../../assets/images/arrow-down.jpg";
import arrow1 from "../../assets/images/arrow.jpg";
import arrow_right from "../../assets/images/right.png";
import { LuUser2 } from "react-icons/lu";

const FaqItem = () => {
  const [selected, setSelected] = useState(null);
  const [showFaq, setShowFaq] = useState(false);

  const { tabTitle, paragraph, cards } = faqData;

  const toggleFaq = () => {
    setShowFaq(!showFaq);
  };

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="Faq-container">
      <div className="Faq-content">
        <div className="intro" onClick={toggleFaq}>
          <LuUser2 />
          <div className="intro-content">
            <h3>{tabTitle}</h3>
            <p className="Cards-tabs__items__p">{paragraph}</p>
          </div>
          <span>
            <img
              className="images"
              src={showFaq ? arrow1 : arrow}
              alt={showFaq ? "Collapse" : "Expand"}
              style={{ width: "20px", height: "20px" }}
            />
          </span>
        </div>

        <div className="wrapper__faq">
          {showFaq && (
            <div className="wrapper-accordion">
              {cards.map((item, i) => (
                <div className="wrapper-item" key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h4>{item.question}</h4>
                    <span>
                      <img
                        className="images"
                        src={selected === i ? arrow1 : arrow_right}
                        alt={selected === i ? "Collapse" : "Expand"}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </span>
                  </div>

                  <div className={`content ${selected === i ? "show" : ""}`}>
                    <p>{item.answer}</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
