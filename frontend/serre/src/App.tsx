import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Connexion from "./composants/connexion";
import Dashboard from "./composants/dashboard";
import Historique from "./composants/historique";
import Navbarre from "./composants/navbarre";
import Parametre from "./composants/parametre";
import Updatepassword from "./composants/update_password";

function App() {
  const [count, setCount] = useState(0);

  return (
    //Ceci c'est uniquement pour mieux commprendre le fonctionnement des coposants c'est à effacer apres
    <div className="App">
   
      <Historique></Historique>
    
    </div>
  );
}

export default App;
