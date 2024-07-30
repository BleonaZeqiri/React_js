import React, { useState } from "react";
import arrow from "../../assets/images/arrow.jpg";
import arrow1 from "../../assets/images/arrow-down.jpg";

const data = [
  {
    question: "Why park a domain name in Parkname?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
  {
    question: "Why park a domain?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
  {
    question: "Why park in Parkname?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
  {
    question: "Why park a domain name in Parkname?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" key={i}>
              <div className="title" onClick={() => toggle(i)}>
                <h4>{item.question}</h4>
                <span>
                  <img
                    className="images"
                    src={selected === i ? arrow : arrow1}
                    alt={selected === i ? "Arrow Down" : "Arrow Up"}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
              </div>

              <div className={`content ${selected === i ? "show" : ""}`}>
                <hr />
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
