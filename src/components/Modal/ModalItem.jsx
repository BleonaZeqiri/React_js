import React from "react";

function ModalItem({ closeModal, modalsData }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal">
          <div className="title">
            <h5>Theme color</h5>
            <h6>Change Theme</h6>
          </div>

          {modalsData.map((modal, index) => (
            <div>
              <div key={index} className="body">
                <p>{modal.paragraph}</p>
                <div className="body-content">
                  <p>{modal.background}</p>
                  <div
                    className="body-content__background"
                    style={{ backgroundColor: modal.background }}
                  ></div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button
            className="confirmBtn"
            onClick={() => {
              console.log("Saved!");
              closeModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalItem;
