import React from "react";
import Skills from "../Skills";
import "./Global.css";
import classes from "./Presentation.module.css"

const Presentation = () => {
  return (
    <div className={classes.about}>
      <div className={classes.shadow}>
        <img src="/images/avatarAurel.png" alt="Aurelie Avatar" className={classes.circle} />
      </div>
      <div className={classes.content}>
        <p>
          Salut ! Moi c’est Aurélie, passionnée de code depuis plusieurs années. J’ai
          intégré Ironhack en 2021 pour apprendre à être développeuse Full Stack
          avec plus d’affinité back-end.
        </p>
        <b>OS : Windows/Linux</b>
      </div>
      <h1 className={classes.stackTitle}>Mon Stack</h1>
      <div className={classes.skillContainer}>
        <div className={classes.skillContent}>
          <div className={classes.categories}>
            <h3>Langues</h3>
            <div className={classes.type}>
              <h5>HTML5</h5>
              <Skills props="95" />
              <h5>CSS</h5>
              <Skills props="85" />
              <h5>JAVASCRIPT</h5>
              <Skills props="75" />
              <h5>NODE</h5>
              <Skills props="50" />
              <h5>PYTHON</h5>
              <Skills props="25" />
            </div>
          </div>
          
          <div className={classes.categories}>
            <h3>Librairies/FrameWorks</h3>
            <div className={classes.type}>
              <h5>EXPRESS.JS HBS</h5>
              <Skills props="60" />
              <h5>REACT/HOOKS</h5>
              <Skills props="75" />
              <h5>API</h5>
              <Skills props="55" />
              <h5>BOOTSTRAP</h5>
              <Skills props="40" />
              <h5>BULMA</h5>
              <Skills props="30" />
            </div>
          </div>
          <div className={classes.categories}>
            <h3>Divers</h3>
            <div className={classes.type}>
              <h5>TERMINAL</h5>
              <Skills props="85" />
              <h5>NOSQL</h5>
              <Skills props="55" />
              <h5>DOCKER</h5>
              <Skills props="30" />
              <h5>MONGODB</h5>
              <Skills props="70" />
              <h5>GIT</h5>
              <Skills props="55" />
            </div>
          </div>
          <div className={classes.categories}>
            <h3>What's Next</h3>
            <div className={classes.typeNext}>
              <h5>VUE.JS</h5>
              <br />
              <h5>GATSBY</h5>
              <br />
              <h5>POSTGRESQL</h5>
              <br />
              <h5>DJANGO</h5>
              <br />
              <h5>PHP</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.wavePres}> </div>
    </div>
  );
};

export default Presentation;
