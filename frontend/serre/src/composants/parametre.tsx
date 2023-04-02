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

  const choice = (choix:string) => {
    setChoix(choix)
    
    if(choix == 'Laitue'){
      setNbFois(2)
      setDuree(60)
      setLaitue(true)
      setSauge(false)
    }
    else if(choix == 'Sauge'){
      setNbFois(1)
      setDuree(30)
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
        <Form.Label>Durée de l'arrosage</Form.Label>
        <Form.Control value={duree} type="text" placeholder="par secondes" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mt-3" id='btn'>
        Appliquer
      </Button>
      <a href={`/personnaliser`} className='lien'>Personnaliser</a>
    </Form>
    </Card>
    <div className={`${!sauge ? "activer":"align"}`}>
      <img className='w-25' src={Sauge} alt="" />
      <p>à 7h 00</p>
    </div>
    <div className={`${!laitue ? "activer":"align"}`}>
      <img className='w-25' src={Laitue} alt="" />
      <p>à 7h 00 et à 17h 00</p>
    </div>
    </div>

    </div>
  )}
}

export default parametre
