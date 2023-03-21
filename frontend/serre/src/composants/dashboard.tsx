import { Button, Form, FormCheck, Row, Col } from "react-bootstrap";
import "./styles/dashboard.css";
import temp from "../assets/high-temperature.png";
import sun from "../assets/sun.png";
import humid from "../assets/humidity.png";
import humidity from "../assets/humid_sol.png";
import toit from "../assets/toit.png";
import arrosage from "../assets/arrosage.gif";
import ventilateur from "../assets/ventilateur.gif";
import arro from "../assets/arro.png";
import vent from "../assets/vent.png";
import { useEffect, useState } from "react";
import Navbarre from "./navbarre";
const Dashboard = () => {
  const [donnees, setDonnee] = useState<any>(null);
  useEffect(() => {
    fetch("http://localhost:5173/real-time.json")
      .then((res) => res.json())
      .then((res) => {
        setDonnee(res);
        console.log(res);
      });
  }, []);
  return (
    <>
      <Navbarre></Navbarre>
      <div className="container container_">
        <div className="row">
          <div className="col-lg-4">
            <div className="card card_">
              <div className="titlee">
                <h5 className="titl">TEMPERATURE</h5>
              </div>
              <div className="icon">
                <img className="imga" src={temp} alt="" />
              </div>
              <div className="cont-temp">
                {donnees?.map((donnee: any) => (
                  <p className="real-time">{donnee.temp_serre} °C</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card_">
              <div className="titlee">
                <h5 className="titl">LUMINOSITE</h5>
              </div>
              <div className="icon">
                <img className="imga" src={sun} alt="" />
              </div>
              <div className="cont-temp">
                {donnees?.map((donnee: any) => (
                  <p className="real-time">{donnee.lum} LUX</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="card card_">
              <div className="titlee">
                <h5 className="titl">HUMIDITE</h5>
              </div>
              <div className="icon">
                <img className="imga" src={humid} alt="" />
              </div>
              <div className="cont-temp">
                {donnees?.map((donnee: any) => (
                  <p className="real-time">{donnee.humid_serre} %</p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {" "}
            <br />
            <div className=" card card_ ">
              <div className="">
                <img className="img-humid" src={humidity} alt="" />
              </div>
              <div className="cont-temp"></div>
              <div className=" ">
                {donnees?.map((donnee: any) => (
                  <p className="real-time">
                    {" "}
                    HUMIDITE : {donnee.humid_serre} %{" "}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <br />
            <div className=" card card_ ">
              <div className="h4">
                <h4 className=" card-title ">CONTROLE DU SYSTEME</h4>
              </div>
              <div className="action">
                <div className="act">
                  <div className="parat">
                    <div className="toit">
                        <p >TOIT</p>
                      <img className="imga_" src={toit} alt="" />
                    </div>
                  </div>
                  <div className="parat">
                    <Form>
                      <Form.Check type="switch" id="toit1" />
                    </Form>{" "}
                    90°
                    <Form>
                      <Form.Check type="switch" id="toit2" />
                    </Form>{" "}
                    45°
                    <Form>
                      <Form.Check type="switch" id="toit3" />
                    </Form>
                    180°
                  </div>
                </div>
                <div className="act">
                  <div className="parat">
                    <div className="toit">
                        <p>ARROSEUR</p>
                     <div className="toit-container">
                     <img className="imga_ arro" src={arro} alt="" />
                      <img className="imga_ arrosage"  src={arrosage} alt="" />
                     </div>
                  
                    </div>
                  </div>
                  <div className="parat">
                    <Form>
                      <Form.Check type="switch" id="arrosage" />
                    </Form>
                  </div>
                </div>
                <div className="act">
                  <div className="parat">
                    <div className="toit">
                    <p>ARROSEUR</p>
                      <img className="imga_" src={vent} alt="" />
                      <img className="imga_" src={ventilateur} alt="" />
                    </div>
                  </div>
                  <div className="parat">
                    <Form>
                      <Form.Check type="switch" id="ventilateur" />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
