import { useEffect, useState } from "react";
import "./styles/historique.css";

const Historique = () => {
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5173/donnee.json")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res);
      });
  }, []);


  return (
    <div className="box">
      <div className="h4-container">
        <h4>Historique</h4>
      </div>

      <div className="table table_">
        <table border={1}>
          <thead className="backblue">
            <td>Date</td>
            <td>Temperature en °C</td>
            <td>Humidité sol en %</td>
            <td>Humidité serre en %</td>
            <td>luminosité en lux</td>
          </thead>
          <tbody>
            {users?.map((user: any) => (
              <tr>
                <td>{user.Date}</td>
                <td>{user.temp}</td>
                <td>{user.humi_sol}</td>
                <td>{user.humi_serre}</td>
                <td>{user.luminosite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination_">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Historique;
