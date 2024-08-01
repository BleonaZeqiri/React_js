import React, { useState } from "react";
import ModalItem from "./ModalItem";
import "../Modal/Modal.css";

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

  return (
    <div className="App">
      <h1>Third Task</h1>
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      {openModal && (
        <ModalItem closeModal={setOpenModal} modalsData={modalsData} />
      )}
    </div>
  );
};

export default Modal;