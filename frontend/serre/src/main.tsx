import React from 'react'
import App from './App'
import Updatepassword from './composants/update_password';
import Parametre from './composants/parametre';
import Connexion from './composants/connexion';
import Dashboard from './composants/dashboard';
import Historique from './composants/historique';
import Personnaliser from './composants/personnaliser';
import Inscription from './composants/inscription';
import './index.css'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "historique/",
    element: <Historique />,
  },
  {
    path: "dashboard/",
    element: <Dashboard />,
  },
  {
    path: "connection/",
    element: <Connexion />,
  },
  {
    path: "parametre/",
    element: <Parametre />,
  },
  {
    path: "modifmdp/",
    element: <Updatepassword />,
  },
  {
    path: "personnaliser/",
    element: <Personnaliser />,
  },
  {
    path: "inscription/",
    element: <Inscription />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <RouterProvider router={router} />
 
)
