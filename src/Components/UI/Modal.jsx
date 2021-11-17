import React, { useState } from "react";
import classes from "./Modal.module.css";

const Modal = () => {
  const [modalVisible, setModalVisible] = useState();

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <button className={classes.closeModal} onClick={handleModal}>X</button>
      {modalVisible && (
        <div className={classes.overlay}>
          <div className={classes.modal}>
            <div className="modal-content">
              <h2>Message envoyé !</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
