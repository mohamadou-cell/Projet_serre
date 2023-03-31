import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './styles/navebarre.css'
function navbarre() {
  const [infos, setInfos] = useState<any>(null)
  useEffect(() => {
    fetch("http://localhost:5173/user.json")
      .then((res) => res.json())
      .then((res) => {
        setInfos(res);
        console.log(res);
      });
  }, []);
  return (
    <div > 
      <nav className="navbar" id='navbar'>
        <div className="nav gap-5"> 
          <img  src="../public/user4.jpg" className='img' alt="" /> 
          <div className='drop'> 
            <div className='d-flex gap-2'>
              {infos?.map((info:any)=>(
                <p className='info'>{info.prenom}</p>
              ))}
              {infos?.map((info:any)=>(
                <p className='info'>{info.nom}</p>
              ))}
              </div>
              <div className="dropdown d-flex justify-content-center">
                <li className='items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-down-fill mb-3" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                    <ul className='sous'>
                      
                      <li className="items-sous-liste"><a className='a' href={`/modifmdp`}>Modifier mot de passe</a></li>
                      <li className='items-sous-liste d-flex justify-content-center gap-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right fw-bold" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                      </svg>
                        <a className='a' href={`/connection`}>Deconnection</a>
                        </li>
                    </ul>
                  </li>
            </div>
          </div>
        </div>
        <div className='burger'>
          <li className='items'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
              <ul className='sous'>
                <li className="items-sous-liste"><a className='a' href={`/dashboard`}>DASHBOARD</a></li>
                <li className='items-sous-liste'><a className='a' href={`/historique`}>HISTORIQUE</a></li>
                <li className='items-sous-liste'><a className='a' href={`/parametre`}>PARAMETRES</a></li>
              </ul>
            </li>
          </div>
      </nav> 
    </div>
  )
}

export default navbarre
