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
import on_arrosage from "../assets/on-button.png";
import off_arrosage from "../assets/off-button.png";
import { useEffect, useState } from "react";
import Navbarre from "./navbarre";
import socketIOClient from "socket.io-client";
//const ENDPOINT = "http://localhost:8000";
const Dashboard = () => {
  const [donnees, setDonnee] = useState<any>(null);
  const [cacher, setCacher] = useState<any>(null);
  const [cacher_, setCacher_] = useState<any>(null);
  const [_45, set_45] = useState<any>(false);
  const [_90, set_90] = useState<any>(false);
  const [_180, set_180] = useState<any>(false);

  let etatBtn = false;
  let etatBtn_ = false;

/* 
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("data", (data) => {
      console.log(data);
    
  
    });
  }, []); */
  useEffect(() => {
    fetch("http://localhost:5173/real-time.json")
      .then((res) => res.json())
      .then((res) => {
        setDonnee(res);
        console.log(res);
      });
  }, []);
  const on_Arrosage = () => {
    setCacher(false);
  };
  const off_Arrosage = () => {
    setCacher(true);
  };
  const on_Ventilateur = () => {
    setCacher_(false);
  };
  const off_Ventilateur = () => {
    setCacher_(true);
  };
    //Les fonctions du toit l'ouverture consiste à mettre une condition
  // true sur le bonton clicker et grisser les autre en meme temps
  const ouverture_45 = () => {
    set_45(true);
    set_90(false);
    set_180(false);
  };
  
  const ouverture_90 = () => {
    set_45(false);
    set_90(true);
    set_180(false);
  };
  const ouverture_180 = () => {
    set_45(false);
    set_90(false);
    set_180(true);
  };
//fermeture
const fermeture_45 = () => {
  set_45(false);
};
const fermeture_90 = () => {
  set_90(false);
};
const fermeture_180 = () => {
  set_180(false);
};
  /* const switcher = () => {
    

    etatBtn == false ? (setCacher(true), etatBtn = true) : (setCacher(false), etatBtn = false);
    let voir = document.getElementById("voir");
    console.log(etatBtn, voir);
  };
  const switcher_ = () => {
    
    etatBtn_ == false ? (setCacher_(true), etatBtn_ = true) : (setCacher_(false), etatBtn_ = false);
    let voir = document.getElementById("voir");
    console.log(etatBtn, voir);
  }; */
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
                  <p className="real-time humid">
                    
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
                    {/* <Form>
                      <Form.Check type="switch" id="toit1" />
                    </Form>{" "} */}
                    <div className="angle_1">
                      <img 
                        className={`lesBtn ${!_45 ? "cacher" : ""}`}
                        src={on_arrosage}
                        alt=""
                        onClick={() => {fermeture_45()}}
                      />
                      <img onClick={() => {ouverture_45()}} className={`lesBtn ${_45 ? "cacher" : ""}`} src={off_arrosage} alt="" />
                    </div>
                    90°
                    {/* <Form>
                      <Form.Check type="switch" id="toit2" />
                    </Form>{" "} */}
                    <div className="angle_1">
                      <img
                       onClick={() => {fermeture_90()}}
                        className={`lesBtn ${!_90 ? "cacher" : ""}`}
                        src={on_arrosage}
                        alt=""
                      />
                      <img onClick={() => {ouverture_90()}} className={`lesBtn ${_90 ? "cacher" : ""}`} src={off_arrosage} alt="" />
                    </div>
                    45°
                    {/* <Form>
                      <Form.Check type="switch" id="toit3" />
                    </Form> */}
                      <div className="angle_1">
                    <img
                        onClick={() => {fermeture_180()}}
                        className={`lesBtn ${!_180 ? "cacher" : ""}`}
                        src={on_arrosage}
                        alt=""
                      />
                      <img onClick={() => {ouverture_180()}} className={`lesBtn ${_180 ? "cacher" : ""}`} src={off_arrosage} alt="" />
                    </div>
                    180°
                  </div>
                </div>
                <div className="act">
                  <div className="parat">
                    <div className="toit">
                        <p>ARROSEUR</p>
                        
                     
                     <img id="voir" className= {`imga_ ${cacher ? "cacher" : ""}`}src={arro} alt="" />
                      <img id="radius" className  ={`imga_ ${!cacher ? "cacher" : ""}`} src={arrosage} alt="" />
                     </div>
                     
                  
                    
                  </div>
                  <div className="parat">
                   {/*  { <Form>
                      <Form.Check type="switch" onClick={() => {
                          switcher();
                        }}
                      id="arrosage" />
                    </Form> } */}
                     <img    className={`lesBtn ${!cacher ? "cacher" : ""}`} onClick={() => {
                          on_Arrosage();
                        }} src={on_arrosage} alt=""  />
                        
                        <img className={`lesBtn ${cacher ? "cacher" : ""}`} onClick={() => {
                          off_Arrosage();
                        }} src={off_arrosage} alt="" />
                  </div>
                </div>
                <div className="act">
                  <div className="parat">
                    <div className="toit">
                    <p>VENTILATEUR</p>
                    <div className="toit">
                      <img  className={`imga_ ${cacher_ ? "cacher" : ""}`} src={vent} alt="" />
                      <img className={`imga_ ${!cacher_ ? "cacher" : ""}`} src={ventilateur} alt="" />
                    </div>
                    </div>
                  </div>
                  <div className="parat">
                    {/* <Form>
                      <Form.Check type="switch" onClick={() => {
                          switcher_();}} id="ventilateur" />
                    </Form> */}
                    <img    className={`lesBtn ${!cacher_ ? "cacher" : ""}`} onClick={() => {
                          on_Ventilateur();
                        }} src={on_arrosage} alt=""  />
                        
                        <img className={`lesBtn ${cacher_ ? "cacher" : ""}`} onClick={() => {
                          off_Ventilateur();
                        }} src={off_arrosage} alt="" />
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
