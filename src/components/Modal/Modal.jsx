import React from "react";
import ReactDOM from "react-dom";

import Card from "../../layouts/Card";

import styles from "./Modal.module.css";

const Backdrop = ({ isOpen }) => {
  return <>{isOpen && <div className={styles.backdrop} />}</>;
};

const ModalOverlay = ({ isOpen, onCloseModal, onRemoveExpense }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className={styles["modal"]} onClick={onCloseModal}>
            <Card className={styles["modal-content"]}>
              <div>
                <h4>Would you like to remove the expense?</h4>
              </div>
              <div className={styles["modal-content__modal-controls"]}>
                <button onClick={onCloseModal}>Cancel</button>
                <button onClick={onRemoveExpense}>Remove</button>
              </div>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

const Modal = ({ isOpen, onCloseModal, onRemoveExpense }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop isOpen={isOpen} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          isOpen={isOpen}
          onCloseModal={onCloseModal}
          onRemoveExpense={onRemoveExpense}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
