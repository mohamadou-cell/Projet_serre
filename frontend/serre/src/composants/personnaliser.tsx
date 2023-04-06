import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Navbarre from "./navbarre";
import "./styles/parametre.css";
import { useNavigate } from "react-router-dom";

function Personnaliser() {
  const [nombre_arrosage, setChoix] = useState<string>("");
  const [un, setUn] = useState<boolean>(false);
  const [deux, setDeux] = useState<boolean>(false);
  const [trois, setTrois] = useState<boolean>(false);
  const [heure_arrosage1, setHeure1] = useState("");
  const [heure_arrosage2, setHeure2] = useState("");
  const [heure_arrosage3, setHeure3] = useState("");
  const [duree, setDuree] = useState("");

  const params = () => {
    if (heure_arrosage1 == "" || duree == "") {
      console.log("required");
    } else {
      localStorage.removeItem("_DELAI");
      localStorage.removeItem("_TIME1");
      localStorage.removeItem("_TIME2");
      localStorage.removeItem("_TIME3");
      localStorage.removeItem("CHOIX");
      localStorage.setItem("CHOIX", "personnaliser");
      localStorage.setItem("_DELAI", duree);
      localStorage.setItem("_TIME1", heure_arrosage1);
      localStorage.setItem("_TIME2", heure_arrosage2);
      localStorage.setItem("_TIME3", heure_arrosage3);
      usenavigate("/Dashboard");
    }
  };

  /*  const handleSubmit = (e:any) => {
      
        e.preventDefault();
  
        console.log(nombre_arrosage, heure_arrosage1, heure_arrosage2, heure_arrosage3, duree);
        fetch("http://localhost:3000/parametre", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            nombre_arrosage, 
            heure_arrosage1, 
            heure_arrosage2, 
            heure_arrosage3, 
            duree
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            window.location.reload();
          });
      
    }; */

  const choice = (nombre_arrosage: string) => {
    setChoix(nombre_arrosage);
    console.log(nombre_arrosage);
    if (nombre_arrosage == "1") {
      setUn(true);
      setDeux(false);
      setTrois(false);
    } else if (nombre_arrosage == "2") {
      setUn(true);
      setDeux(true);
      setTrois(false);
    } else if (nombre_arrosage == "3") {
      setUn(true);
      setDeux(true);
      setTrois(true);
    } else {
      setUn(false);
      setDeux(false);
      setTrois(false);
    }
  };
  const usenavigate = useNavigate();
  if (localStorage.getItem("token") == undefined) {
    usenavigate("/");
  } else {
    return (
      <div>
        <div>
          <Navbarre></Navbarre>
        </div>
        <div id="body">
          <Card body id="card" className="w-25">
            <h4 className="titre">PARAMETRES D'ARROSAGE</h4>
            <Form className="mt-5" /* onSubmit={handleSubmit} */>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre d'arrosage</Form.Label>
                <Form.Select onChange={(e) => choice(e.target.value)}>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className={`mb-3 ${!un ? "activer" : ""}`}
                controlId="formBasicNumber"
              >
                <Form.Label>Heures d'arrosage ( minute for test )</Form.Label>
                <div className="heure">
                  <select
                    className={`space ${!un ? "activer" : ""}`}
                    onChange={(e) => setHeure1(e.target.value)}
                  >
                    <option></option>
                    <option>05</option>
                    <option>26</option>
                    <option>55</option>
                  </select>
                  <select
                    className={`space ${!deux ? "activer" : ""}`}
                    onChange={(e) => setHeure2(e.target.value)}
                  >
                    <option></option>
                    <option>30</option>
                    <option>28</option>
                    <option>17</option>
                  </select>
                  <select
                    className={`space ${!trois ? "activer" : ""}`}
                    onChange={(e) => setHeure3(e.target.value)}
                  >
                    <option></option>
                    <option>31</option>
                    <option>25</option>
                    <option>30</option>
                  </select>
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Durée de l'arrosage ( minute )</Form.Label>
                <Form.Control
                  min="1"
                  max="9"
                  type="number"
                  placeholder="par secondes"
                  onChange={(e) => setDuree(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                /* type="submit" */ onClick={() => {
                  params();
                }}
                className="mt-3"
                id="btn"
              >
                Appliquer
              </Button>
              <a href={`/parametre`} className="lien">
                Paramètres
              </a>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Personnaliser;
