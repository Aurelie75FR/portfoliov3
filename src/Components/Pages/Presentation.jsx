import React from "react";
import Skills from "../Skills";
import classes from "./Global.module.css";

const Presentation = () => {
  return (
    <div className={classes.about}>
      <div className={classes.shadow}>
        <img src="" alt="Aurelie Avatar" className={classes.circle} />
      </div>
      <div className={classes.content}>
        <p>
          Salut ! Moi c’est Aurélie, passionnée de code depuis plusieurs années. J’ai
          intégré Ironhack en 2021 pour apprendre à être développeuse Full Stack
          avec plus d’affinité back-end.
        </p>
        <b>OS : Windows/Linux</b>
      </div>
      <div className={classes.responsiveSkill}>Mon Stack</div>
      <div className={classes.skillContainer}>
        <div className={classes.skillContent}>
          <div className={classes.categories}>
            <h2>Langues</h2>
            <div className={classes.type}>
              <h5>HTML5</h5>
              <Skills props="95" />
              <h5>CSS</h5>
              <Skills props="85" />
              <h5>JAVASCRIPT</h5>
              <Skills props="75" />
              <h5>NODE</h5>
              <Skills props="80" />
              <h5>PYTHON</h5>
              <Skills props="25" />
            </div>
          </div>
          <div className={classes.categories}>
            <h2>Langues</h2>
            <div className={classes.type}>
              <h5>HTML5</h5>
              <Skills props="95" />
              <h5>CSS</h5>
              <Skills props="85" />
              <h5>JAVASCRIPT</h5>
              <Skills props="75" />
              <h5>NODE</h5>
              <Skills props="80" />
              <h5>PYTHON</h5>
              <Skills props="25" />
            </div>
          </div>
          <div className={classes.categories}>
            <h2>Librairies/FrameWorks</h2>
            <div className={classes.type}>
              <h5>EXPRESS.JS HBS</h5>
              <Skills props="95" />
              <h5>REACT/HOOKS</h5>
              <Skills props="85" />
              <h5>API</h5>
              <Skills props="75" />
              <h5>BOOTSTRAP</h5>
              <Skills props="80" />
              <h5>BULMA</h5>
              <Skills props="25" />
            </div>
          </div>
          <div className={classes.categories}>
            <h2>Divers</h2>
            <div className={classes.type}>
              <h5>TERMINAL</h5>
              <Skills props="95" />
              <h5>NOSQL</h5>
              <Skills props="85" />
              <h5>DOCKER</h5>
              <Skills props="75" />
              <h5>MONGODB</h5>
              <Skills props="80" />
              <h5>GIT</h5>
              <Skills props="25" />
            </div>
          </div>
          <div className={classes.categories}>
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
      <div className={classes.waveTwo}> </div>
    </div>
  );
};

export default Presentation;
