import React from 'react'
import App from './App'
import Updatepassword from './composants/update_password';
import Parametre from './composants/parametre';
import Connexion from './composants/connexion';
import Dashboard from './composants/dashboard';
import Historique from './composants/historique';
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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
