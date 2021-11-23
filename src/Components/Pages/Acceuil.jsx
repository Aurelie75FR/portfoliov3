import React from "react";
import "./Global.css";
import classes from "./Acceuil.module.css"

const Acceuil = ({ title, name, txt }) => {
  return (
    <div className={classes.home}>
      <div className={classes.txt}>
        <h1 className={classes.name}>{title}</h1>
        <p className={classes.title}>{name}</p>
        <p className={classes.title}>{txt}</p>
      </div>
      <div className={classes.waveAcceuil}></div>
    </div>
  );
};

export default Acceuil;
