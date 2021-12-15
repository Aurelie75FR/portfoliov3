import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Pages/Acceuil";
import Presentation from "./Components/Pages/Presentation";
import Projet from "./Components/Pages/Projet";
// import Contact from "./Components/Pages/Contact";
// import NavBar from "./Components/UI/NavBar/NavBar";


//refaire la navBar avec le nouveau router
function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Acceuil
        title="Aurélie Lopez-Vicente"
        name="Web Dévellopeuse Full Stack"
        txt="MERN"
      />
      <Presentation />
      <Projet />
    
    </>
  );
}

export default App;
