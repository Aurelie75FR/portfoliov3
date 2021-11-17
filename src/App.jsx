import "./App.css";
import Acceuil from "./Components/Pages/Acceuil";
import Presentation from "./Components/Pages/Presentation";

function App() {
  return (
    <>
      <Acceuil
        title="Aurélie Lopez-Vicente"
        name="Web Dévellopeuse Full Stack"
        txt="MERN"
      />
      <Presentation/>
    </>
  );
}

export default App;
