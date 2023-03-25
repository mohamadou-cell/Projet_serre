import Navbarre from "./navbarre";
import { useEffect, useState } from "react";
import "./styles/historique.css";

const Historique = () => {
  const [users, setUsers] = useState<any>(null);
  const [start, setStart] = useState<number>(0);
  const [active1, setActive1] = useState<boolean>(true);
  const [active2, setActive2] = useState<boolean>(false);
  const [rechercher, setRecherche] = useState<String>("");
  const [end, setEnd] = useState<number>(7);
  const [test, setTest] = useState<any>();


  useEffect(() => {
    fetch("http://localhost:5173/donnee.json")
      .then((res) => res.json())
      .then((res) => {
        setUsers(
          res.filter((_a: any, index: number) => {
            if (rechercher == "") {
              console.log(JSON.stringify(_a)); 
              return index >= start && index < end;
            } else {
              return _a.Date == rechercher;
            }
          })
        );
      });
  }, [start, end, rechercher]);


  
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
  const search = () => {
    const valeur = document.getElementById("date").value;
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

        <div className="table table_">
          <input
            onChange={() => search()}
            type="date"
            name="date"
            id="date"
          />
          <table border={1}>
            <thead className="backblue">
              <td className="td_"> Date </td>
              <td className="td_">Temperature en °C</td>
              <td className="td_">Humidité sol en %</td>
              <td className="td_">Humidité serre en %</td>
              <td className="td_">luminosité en lux</td>
            </thead>
            <Data></Data>
          </table>
        </div>
        <nav aria-label="Page navigation example" className="example">
          <ul className="pagination pagination_ ">
            <li className="page-item ">
              <a
                className=" pagenav"
                href="#"
                aria-label="Previous"
                onClick={() => {
                  setStart(0);
                  setEnd(7);
                  setActive1(true);
                  setActive2(false);
                }}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a
                className={`pagelinkupdate ${active1 ? "bg-focus" : ""}`}
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
                className={`pagelinkupdate ${active2 ? "bg-focus" : ""}`}
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
                  setStart(7);
                  setEnd(14);
                  setActive1(false);
                  setActive2(true);
                }}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Historique;
