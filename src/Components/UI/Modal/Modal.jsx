import React, { useState } from "react";
import ContactForm from "../Form/ContactForm";
import { AiFillMessage } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "./Modal.module.css";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={handleClick} className={classes.message}>
        <AiFillMessage />
      </button>
      {modal && (
        <div className={classes.overlay} onClick={handleClick}>
          <div className={classes.modal}>
            <div className={classes.modalContent}>
              <h2>Blablabla</h2>
              <ContactForm />
            </div>
            <button onClick={handleClick}>
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
