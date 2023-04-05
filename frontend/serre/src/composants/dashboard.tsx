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
import { useNavigate } from "react-router-dom";
const connection = "http://localhost:3000/";
const Dashboard = () => {
  const [donnees, setDonnee] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [cacher, setCacher] = useState<any>(null);
  const [cacher_, setCacher_] = useState<any>(null);
  const [_45, set_45] = useState<any>(false);
  const [_90, set_90] = useState<any>(false);
  const [_180, set_180] = useState<any>(false);
  const [seconde, setSeconde] = useState<string>();
  const [minute, setMinute] = useState<string>();
  const [heure, setHeure] = useState<string>();
  const [cacher_auto, setcacher_auto] = useState<boolean>(true);

  let etatBtn = false;
  let etatBtn_ = false;

  useEffect(() => {
    const socket = socketIOClient(connection);
    socket.on("connection", (data) => {
      setDonnee(Array(data));
    });
  }, []);
  //param arrosage automatique
  useEffect(() => {
    if (localStorage.getItem("_DELAI") != undefined) {
     // console.log(`rfjrjbf`);
      if (
        (minute == localStorage.getItem("_TIME1") && seconde == "30") ||
        (minute == localStorage.getItem("_TIME2") && seconde == "30") ||
        (minute == localStorage.getItem("_TIME3") && seconde == "30") 
      ) { 
        off_Arrosage();
          if (localStorage.getItem("_DELAI") == "1") {
            setTimeout(() => {
              on_Arrosage();
            }, 60000);
          }
          if (localStorage.getItem("_DELAI") == "2") {
            setTimeout(() => {
              on_Arrosage();
            }, 120000);
          }
          if (localStorage.getItem("_DELAI") == "3") {
            setTimeout(() => {
              on_Arrosage();
            }, 180000);
          }
          if (localStorage.getItem("_DELAI") == "4") {
            setTimeout(() => {
              on_Arrosage();
            }, 240000);
          }
          if (localStorage.getItem("_DELAI") == "5") {
            setTimeout(() => {
              on_Arrosage();
            }, 300000);
          }
          if (localStorage.getItem("_DELAI") == "6") {
            setTimeout(() => {
              on_Arrosage();
            }, 360000);
          }
          if (localStorage.getItem("_DELAI") == "7") {
            setTimeout(() => {
              on_Arrosage();
            }, 420000);
          }
          if (localStorage.getItem("_DELAI") == "8") {
            setTimeout(() => {
              on_Arrosage();
            }, 480000);
          }
          if (localStorage.getItem("_DELAI") == "9") {
            setTimeout(() => {
              on_Arrosage();
            }, 540000);
          }
          if (localStorage.getItem("_DELAI") == "10") {
            setTimeout(() => {
              on_Arrosage();
            }, 600000);
          }
       }
    }
  }, [seconde]);

  const perso1 = () =>{
    setcacher_auto(true)
    localStorage.removeItem("_TIME1")
    localStorage.removeItem("_TIME2")
    localStorage.removeItem("_TIME3")
    localStorage.removeItem("_DELAI")
  }
  const perso2 = () =>{
    setcacher_auto(false)
    localStorage.setItem("_DELAI", "1");
    localStorage.setItem("_TIME1", "33");
    localStorage.setItem("_TIME2", "38");
    localStorage.setItem("_TIME3", "nan");
  }


  setInterval(() => repeter(), 1000);

  const repeter = () => {
    let date = new Date();
    let seconde = date.getSeconds();
    let minute = date.getMinutes();
    let heure = date.getHours();

    setSeconde(seconde.toString());
    setMinute(minute.toString());
    setHeure(heure.toString());
  };
 
  const on_Arrosage = () => {
    setCacher(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "6");
  };
  const off_Arrosage = () => {
    setCacher(true);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "7");
  };

  const on_Ventilateur = () => {
    setCacher_(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "0");
  };
  const off_Ventilateur = () => {
    setCacher_(true);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "1");
  };
  //Les fonctions du toit l'ouverture consiste à mettre une condition
  // true sur le bonton clicker et grisser les autre en meme temps
  const ouverture_45 = () => {
    set_45(true);
    set_90(false);
    set_180(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "2");
  };

  const ouverture_90 = () => {
    set_45(false);
    set_90(true);
    set_180(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "3");
  };
  const ouverture_180 = () => {
    set_45(false);
    set_90(false);
    set_180(true);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "4");
  };
  //fermeture
  const fermeture_45 = () => {
    set_45(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "5");
  };
  const fermeture_90 = () => {
    set_90(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "5");
  };
  const fermeture_180 = () => {
    set_180(false);
    const socket = socketIOClient(connection);
    socket.emit("fanOn", "5");
  };

  const usenavigate = useNavigate();
  if (localStorage.getItem("token") == undefined) {
    usenavigate("/");
  } else {
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
                    <p className="real-time">{donnee.temperature} °C</p>
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
                    <p className="real-time">{donnee.luminosite} LUX</p>
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
                        <p>TOIT</p>
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
                          onClick={() => {
                            fermeture_45();
                          }}
                        />
                        <img
                          onClick={() => {
                            ouverture_45();
                          }}
                          className={`lesBtn ${_45 ? "cacher" : ""}`}
                          src={off_arrosage}
                          alt=""
                        />
                      </div>
                      45°
                      {/* <Form>
                      <Form.Check type="switch" id="toit2" />
                    </Form>{" "} */}
                      <div className="angle_1">
                        <img
                          onClick={() => {
                            fermeture_90();
                          }}
                          className={`lesBtn ${!_90 ? "cacher" : ""}`}
                          src={on_arrosage}
                          alt=""
                        />
                        <img
                          onClick={() => {
                            ouverture_90();
                          }}
                          className={`lesBtn ${_90 ? "cacher" : ""}`}
                          src={off_arrosage}
                          alt=""
                        />
                      </div>
                      90°
                      {/* <Form>
                      <Form.Check type="switch" id="toit3" />
                    </Form> */}
                      <div className="angle_1">
                        <img
                          onClick={() => {
                            fermeture_180();
                          }}
                          className={`lesBtn ${!_180 ? "cacher" : ""}`}
                          src={on_arrosage}
                          alt=""
                        />
                        <img
                          onClick={() => {
                            ouverture_180();
                          }}
                          className={`lesBtn ${_180 ? "cacher" : ""}`}
                          src={off_arrosage}
                          alt=""
                        />
                      </div>
                      180°
                    </div>
                  </div>
                  <div className="act">
                    <div className="parat">
                      <div className="toit">
                        <p>ARROSEUR</p>
                       {/*  arrosage automatique */}
                        <div className="switch_arro">
                        <img 
                        className={`${cacher_auto ? "cacher" : ""}`}  
                        onClick={() => {
                          perso1();
                        }}
                        src={on_arrosage}
                        alt=""
                        />
                        <p className={`text-success ${cacher_auto ? "cacher" : ""}`} >auto activé  {localStorage.getItem("CHOIX")} </p>
                        <img
                        className={`${!cacher_auto ? "cacher" : ""}`}
                        onClick={() => {
                          perso2();
                        }}
                        src={off_arrosage}
                        alt=""
                        />
                        <p className={`text-danger ${!cacher_auto ? "cacher" : ""}`}>auto désactivé</p>
                        
                        </div>
                        <img
                          id="voir"
                          className={`imga_ ${cacher ? "cacher" : ""}`}
                          src={arro}
                          alt=""
                        />
                        <img
                          id="radius"
                          className={`imga_ ${!cacher ? "cacher" : ""}`}
                          src={arrosage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="parat">
                      {/*  { <Form>
                      <Form.Check type="switch" onClick={() => {
                          switcher();
                        }}
                      id="arrosage" />
                    </Form> } */}
                      <img
                        className={`lesBtn ${!cacher ? "cacher" : ""}`}
                        onClick={() => {
                          on_Arrosage();
                        }}
                        src={on_arrosage}
                        alt=""
                      />

                      <img
                        className={`lesBtn ${cacher ? "cacher" : ""}`}
                        onClick={() => {
                          off_Arrosage();
                        }}
                        src={off_arrosage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="act">
                    <div className="parat">
                      <div className="toit">
                        <p>VENTILATEUR</p>
                        <div className="toit">
                          <img
                            className={`imga_ ${cacher_ ? "cacher" : ""}`}
                            src={vent}
                            alt=""
                          />
                          <img
                            className={`imga_ ${!cacher_ ? "cacher" : ""}`}
                            src={ventilateur}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="parat">
                      {/* <Form>
                      <Form.Check type="switch" onClick={() => {
                          switcher_();}} id="ventilateur" />
                    </Form> */}
                      <img
                        className={`lesBtn ${!cacher_ ? "cacher" : ""}`}
                        onClick={() => {
                          on_Ventilateur();
                        }}
                        src={on_arrosage}
                        alt=""
                      />

                      <img
                        className={`lesBtn ${cacher_ ? "cacher" : ""}`}
                        onClick={() => {
                          off_Ventilateur();
                        }}
                        src={off_arrosage}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
