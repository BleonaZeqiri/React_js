import React from "react";
import "./Tabs.css";

const Tabs = ({ activeKey, children }) => {
  const [key, setKey] = React.useState(activeKey);

  return (
    <div className="tabs-container">
      <div className=" tabs-container__content">
        {children.map((item) => (
          <div
            key={item.props.aKey}
            className={`tabs-container__item ${
              key === item.props.aKey ? "active" : ""
            }`}
            onClick={() => setKey(item.props.aKey)}
          >
            {item.props.tabTitle}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {children.map((item) =>
          key === item.props.aKey ? (
            <div key={item.props.aKey} className="tab-content__cards">
              {item.props.cards.map((card, index) => (
                <div key={index} className="tab-content__items">
                  <h3>{card.cardTitle}</h3>
                  <p className=" tab-content__paragraph">{card.price}</p>
                  <p className=" tab-content__p">{card.content}</p>

                  <button>Buy Now</button>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
