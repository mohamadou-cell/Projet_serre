import { useEffect, useState } from "react";
import "./styles/historique.css";

const Historique = () => {
  const [users, setUsers] = useState<any>(null);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(7);


  useEffect(() => {
    fetch("http://localhost:5173/donnee.json")
      .then((res) => res.json())
      .then((res) => {
        
        setUsers(res.filter((_:any, index: number)=> {
          return index >= start && index < end
        }));
      });
  }, [start, end]);

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

  return (
    <div className="box">
      <div className="h4-container">
        <h4 className="h4_">Historique</h4>
      </div>

      <div className="table table_">
        <table border={1}>
          <thead className="backblue">
            <td className="td_">Date</td>
            <td className="td_">Temperature en °C</td>
            <td className="td_">Humidité sol en %</td>
            <td className="td_">Humidité serre en %</td>
            <td className="td_">luminosité en lux</td>
          </thead>
          <Data></Data>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination_ ">
          <li className="page-item ">
            <a className=" pagelinkupdate" href="#" aria-label="Previous" onClick={() => {setStart(0); setEnd(7)}}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className=" pagelinkupdate" href="#" onClick={() => {setStart(0); setEnd(7)}}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className=" pagelinkupdate" href="#" onClick={() => {setStart(7); setEnd(14)}}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className=" pagelinkupdate" href="#" onClick={() => {setStart(7); setEnd(14)}} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Historique;
