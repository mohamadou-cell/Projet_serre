import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Navbarre from "./navbarre";
import Sauge from '../assets/sauge.png';
import Laitue from '../assets/laitue.png'
import './styles/parametre.css'
import { useNavigate } from 'react-router-dom';

function parametre() {
  const [choix, setChoix] = useState<string>('');
  const [nb_fois, setNbFois] = useState<any>(null);
  const [duree, setDuree] = useState<any>(null);
  const [laitue, setLaitue] = useState<boolean>(false);
  const [sauge, setSauge] = useState<boolean>(false);
  const [vide, setVide] = useState<boolean>(true);


  const appliquer = ()=>{
    if (nb_fois == '' || duree == null) {
      console.log("champs requis")
      setVide(false);
    }//les temps en  minute for test )
    else{
      localStorage.removeItem("_DELAI");
      localStorage.removeItem("_TIME1");
      localStorage.removeItem("_TIME2");
      localStorage.removeItem("_TIME3");
      localStorage.removeItem("CHOIX");
      if (choix == "Sauge") {
        localStorage.setItem("CHOIX", "sauge");
        localStorage.setItem("_DELAI", "1");
        localStorage.setItem("_TIME1", "0");
        localStorage.setItem("_TIME2", "nan");
        localStorage.setItem("_TIME3", "nan");
      }
      if (choix == "Laitue") {
        localStorage.setItem("CHOIX", "laitue");
        localStorage.setItem("_DELAI", "1");
        localStorage.setItem("_TIME1", "0");
        localStorage.setItem("_TIME2", "30");
        localStorage.setItem("_TIME3", "nan");
      }
      usenavigate("/Dashboard");
    }
  }

  const choice = (choix:string) => {
    setChoix(choix)
    
    if(choix == 'Laitue'){
      setNbFois(2)
      setDuree(1)
      setLaitue(true)
      setSauge(false)
    }
    else if(choix == 'Sauge'){
      setNbFois(1)
      setDuree(1)
      setLaitue(false)
      setSauge(true)
    }
    else{
      setNbFois('')
      setDuree('')
      setLaitue(false)
      setSauge(false)
    }
  }
  const usenavigate = useNavigate();
  if (localStorage.getItem("token") == undefined) {
    usenavigate("/");
  }
  else{
  return (
    <div>
      <div>
        <Navbarre></Navbarre>
      </div>
    <div id='body'>
    <Card body id='card' className='w-25'>
      <h4 className='titre'>PARAMETRES D'ARROSAGE</h4>

      <Form className="mt-5">
      <p  className={`text-danger ${vide ? "cacher":""}`} >les champs sont requis</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Type de plantes</Form.Label>
        <Form.Select onChange={(e) => choice(e.target.value)}>
            <option></option>
            <option>Laitue</option>
            <option>Sauge</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Nombre d'arrosage</Form.Label>
        <Form.Control value={nb_fois} type="text" placeholder="par jour" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Durée de l'arrosage ( minute )</Form.Label>
        <Form.Control value={duree} type="text" placeholder="par minute" />
      </Form.Group>
      
      <Button variant="primary" onClick={()=>{appliquer()}}   className="mt-3" id='btn'>
        Appliquer
      </Button>
      <a href={`/personnaliser`} className='lien'>Personnaliser</a>
    </Form>
    </Card>
    <div className={`${!sauge ? "activer":"align"}`}>
      <img className='w-25' src={Sauge} alt="" />
      <p>à 7h 00 (pour test : à 00mn )</p>
    </div>
    <div className={`${!laitue ? "activer":"align"}`}>
      <img className='w-25' src={Laitue} alt="" />
      <p>à 7h 00 et à 17h 00 (pour test : à 00mn et 30mn)</p>
    </div>
    </div>

    </div>
  )}
}

export default parametre
