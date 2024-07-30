import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card-content">
      <div className="card-content__p">
        <p>{item.document_number}</p>
        <p>{item.date}</p>
      </div>
      <div className="card-content__section">
        <div className={`type-${item.type.toLowerCase()}`}>{item.type}</div>
        <img src={item.img} alt="dog" />
        <p>{item.name}</p>
      </div>
      <p className="Paragraph">{item.desc}</p>
      <button className="card-content__button">download</button>
    </div>
  );
};

export default Card;
