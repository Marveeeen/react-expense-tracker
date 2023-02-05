import React from "react";
import Card from "../../layouts/Card";

const ExpenseModal = ({ isOpen, onCloseModal }) => {
  return (
    <>
      {isOpen && (
        <div className="new-expense__modal">
          <Card className="new-expense__modal-content">
            <span className="new-expense__close-button" onClick={onCloseModal}>
              &times;
            </span>
            <div>
              <h3>Would you like to ?</h3>
            </div>
            <div className="new-expense__modal-controls">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ExpenseModal;
