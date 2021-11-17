import React from "react";
import classes from "./Global.module.css";

const Acceuil = ({ title, name, txt }) => {
  return (
    <div className={classes.home}>
      <div className={classes.txt}>
        <h1 className={classes.intro}>{title}</h1>
        <p className={classes.subtitle}>{name}</p>
        <p className={classes.subtitle}>{txt}</p>
      </div>
      <div className={classes.waveOne}>{" "}</div>
    </div>
  );
};

export default Acceuil;
