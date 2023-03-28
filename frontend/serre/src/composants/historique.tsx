import Navbarre from "./navbarre";
import { useEffect, useState } from "react";
import "./styles/historique.css";

const Historique = () => {
  const [users, setUsers] = useState<any>(null);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(7);
  const [active1, setActive1] = useState<boolean>(true);
  const [active2, setActive2] = useState<boolean>(false);
  const [rechercher, setRecherche] = useState<String>("");
  const [cacher2, setCacher2] = useState<boolean>(true);



  useEffect(() => {
    fetch("http://localhost:5173/donnee.json")
      .then((res) => res.json())
      .then((res) => {
        //masquer ou afficher la pagination
          if (res.length > 7) {
              setCacher2(false);
               } 
        setUsers(
     
          res.filter((_a: any, index: number) => {
           
             
               
            if (rechercher == "") {
              return index >= start && index < end;
            } else {
              return _a.Date == rechercher;
            }
          })
        );
      });
  }, [start, end, rechercher, cacher2]);

  const fleche = () => {
    if (active1 == true) {
      setActive1(false);
      setActive2(true)
      setStart(7);
      setEnd(14);
    }
    if (active2 == true) {
      setActive1(true);
      setActive2(false);
      setStart(0);
      setEnd(7);
    }
  }

  const Data = () => {
    return (
      <tbody>
        {users?.map((user: any) => (
          <tr>
            <td className="td_">{user.Date}</td>
            <td className="td_">{user.temp}</td>
            <td className="td_">{user.humi_sol}</td>
            <td className="td_">{user.humi_serre}</td>
            <td className="td_">{user.luminosite}</td>
          </tr>
        ))}
      </tbody>
    );
  };
  const search = (chercher:any) => {
    const valeur = chercher;
  
  
    setRecherche(valeur);
    const jour = new Date().getDate();
    const mois = new Date().getMonth() + 1;
    const annee = new Date().getFullYear();
  };

  return (
    <>
      <Navbarre></Navbarre>

      <div className="container box">
        <div className="h4-container">
          <h4 className="h4_">Historique</h4>
        </div>

        <div className="table_">
        <div className="table">
          <input onChange={(e) => search(e.target.value)} type="date" name="date" id="date" />
          <table border={1}>
            <thead className="backblue">
              <td className="td_ th_"> Date </td>
              <td className="td_ th_" >Temperature en °C</td>
              <td className="td_ th_">Humidité sol en %</td>
              <td className="td_ th_">Humidité serre en %</td>
              <td className="td_ th_">luminosité en lux</td>
            </thead>
            <Data></Data>
          </table>
          <div className="box-pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination_ ">
                <li className="page-item ">
                  <a
                    className=" pagenav"
                    href="#"
                    aria-label="Previous"
                    onClick={() => {
                      /* setStart(0);
                      setEnd(7);
                      setActive1(true);
                      setActive2(false); */
                      fleche();
                    }}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className={`pagelinkupdate ${active1 ? "bg-focus" : ""} `}
                    id="un"
                    href="#"
                    onClick={() => {
                      setStart(0);
                      setEnd(7);
                      setActive1(true);
                      setActive2(false);
                    }}
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className={`pagelinkupdate ${active2 ? "bg-focus" : ""} ${cacher2 ? "cacher" : ""}`}
                    href="#"
                    onClick={() => {
                      setStart(7);
                      setEnd(14);
                      setActive1(false);
                      setActive2(true);
                    }}
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className=" pagenav"
                    href="#"
                    onClick={() => {
                    /*   setStart(7);
                      setEnd(14);
                      setActive1(false);
                      setActive2(true); */
                      fleche();
                    }}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historique;
