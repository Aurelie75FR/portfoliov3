import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Pages/Acceuil";
import Presentation from "./Components/Pages/Presentation";
import Projet from "./Components/Pages/Projet";
import Contact from "./Components/Pages/Contact";
import NavBar from "./Components/UI/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Acceuil
        title="Aurélie Lopez-Vicente"
        name="Web Dévellopeuse Full Stack"
        txt="MERN"
      />
      <Presentation />
      <Projet />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
