import React from "react";
import Card from "../../layouts/Card";

import "./styles.css";

const Modal = ({ isOpen, onCloseModal, onRemoveExpense }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <Card className="modal-content">
            <div>
              <h4>Would you like to remove the expense?</h4>
            </div>
            <div className="modal-content__modal-controls">
              <button onClick={onCloseModal}>Cancel</button>
              <button onClick={onRemoveExpense}>Remove</button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Modal;
