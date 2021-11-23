import React from "react";
import "./Global.css";
import classes from "./Projet.module.css";

const IMGS = [
  {
    image: "/images/PizzaBuild.PNG",
    link: "https://github.com/Aurelie75FR/lab-dom-pizza-builder",
    title: "JS DOM Pizza Builder",
    description: "Pur Javascript DOM et logique",
  },
  {
    image: "/images/JS-Viking.PNG",
    link: "https://github.com/Aurelie75FR/lab-javascript-vikings",
    title: "JS Vikings",
    description: "JS entrainement sur les class",
  },
  {
    image: "/images/tripleTriad.PNG",
    link: "https://eloquent-euler-5df74e.netlify.app/",
    title: "JS Mini Jeux",
    description: "Jeux de cartes inspiré de FF8",
  },
  {
    image: "/images/mongooseRecipes.PNG",
    link: "https://github.com/Aurelie75FR/lab-mongoose-recipes",
    title: "Node Mongoose Recipes",
    description: "Entrainement sur les methods avec Mongoose",
  },
  {
    image: "/images/Artistify.PNG",
    link: "https://github.com/Aurelie75FR/artistify",
    title: "Node Artistify",
    description: "Authentification et CRUD",
  },
  {
    image: "/images/IronBeer.PNG",
    link: "https://github.com/Aurelie75FR/lab-ironbeers",
    title: "Node Ironbeers",
    description: "Beer API et CRUD",
  },
  {
    image: "/images/IronCine.PNG",
    link: "https://github.com/Aurelie75FR/lab-express-cinema",
    title: "Node Express Cinema",
    description: "Entrainement sur le Router et CRUD",
  },
  {
    image: "/images/luvIt.PNG",
    link: "https://luvit-social-app.herokuapp.com/",
    title: "Node LuvIt",
    description: "Application Marque-pages | Pinterest Clone",
  },
  {
    image: "/images/ReactIronBeers.PNG",
    link: "https://github.com/Aurelie75FR/lab-react-ironbeers",
    title: "React Ironbeers",
    description: "React Beer API et CRUD",
  },
  {
    image: "/images/wikiCounties.PNG",
    link: "https://github.com/Aurelie75FR/lab-wiki-countries",
    title: "React Wiki Countries",
    description: "Entrainement sur match.params.history/react-router-dom",
  },
  {
    image: "/images/IronContact.PNG",
    link: "https://github.com/Aurelie75FR/lab-react-ironcontacts",
    title: "React IronContacts",
    description: "Usage des methods et searchBar",
  },
  {
    image: "/images/RedoHooks.png",
    link: "https://github.com/Aurelie75FR/labRedoHooks",
    title: "Lab Redo Hooks",
    description: "Refactorisation des labs React class component en hooks",
  },
];

const Projet = () => {
  return (
      <div className={classes.git}>
          <h2 className={classes.projectTitle}>{"< "}Codes et Projets{" />"}</h2>
    <div>
        <div className={classes.flexGrid}>
        <div className={classes.gitGrid}>
      {IMGS.map((el, index) => {
        return (
          <div className={classes.gitContent} key={index}>
            <img src={el.image} alt={el.title} className={classes.gitImg} />
            <div className={classes.gitOverlay}>
              <a href={el.link} className={classes.gitLink}>
                {el.title}
              </a>
              <p className={classes.gitDescription}>{el.description}</p>
            </div>
          </div>
        );
      })}
      </div>
      </div>
    </div>
    <div className={classes.waveGit}> </div>
  </div>
  );
};

export default Projet;
