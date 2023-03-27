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
    <div className="App"> 
    
    <Dashboard></Dashboard>  
    </div>
  );
}

export default App;
