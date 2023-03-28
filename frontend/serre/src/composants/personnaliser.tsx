import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Navbarre from "./navbarre";
import './styles/parametre.css'

function Personnaliser() {
    const [choix, setChoix] = useState<string>('')
    const [un, setUn] = useState<boolean>(false);
    const [deux, setDeux] = useState<boolean>(false);
    const [trois, setTrois] = useState<boolean>(false);

  const choice = (choix:string) => {
    setChoix(choix)
    console.log(choix);
    if(choix == '1'){
      setUn(true);
      setDeux(false);
      setTrois(false)
    }
    else if(choix == '2'){
      setUn(true);
      setDeux(true);
      setTrois(false)
    }
    else if(choix == '3'){
      setUn(true);
      setDeux(true);
      setTrois(true)
    }
    else{
      setUn(false);
      setDeux(false);
      setTrois(false)
    }
  }
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
      <Form.Label>Nombre d'arrosage</Form.Label>
      <Form.Select onChange={(e) => choice(e.target.value)}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
    </Form.Group>

    <Form.Group className={`mb-3 ${ !un ? "activer":""}`} controlId="formBasicNumber">
      <Form.Label>Heures d'arrosage</Form.Label>
      <div className='heure'>
      <select className={`space ${ !un ? "activer":""}`}>
          <option></option>
          <option>7h 00</option>
          <option>8h 00</option>
          <option>9h 00</option>
          <option>10h 00</option>
          <option>11h 00</option>
          <option>12h 00</option>
          <option>13h 00</option>
          <option>14h 00</option>
          <option>15h 00</option>
          <option>16h 00</option>
          <option>17h 00</option>
          <option>18h 00</option>
          <option>19h 00</option>
        </select>
        <select className={`space ${!deux ? "activer":""}`}>
          <option></option>
          <option>7h 00</option>
          <option>8h 00</option>
          <option>9h 00</option>
          <option>10h 00</option>
          <option>11h 00</option>
          <option>12h 00</option>
          <option>13h 00</option>
          <option>14h 00</option>
          <option>15h 00</option>
          <option>16h 00</option>
          <option>17h 00</option>
          <option>18h 00</option>
          <option>19h 00</option>
        </select>
        <select className={`space ${!trois ? "activer":""}`}>
          <option></option>
          <option>7h 00</option>
          <option>8h 00</option>
          <option>9h 00</option>
          <option>10h 00</option>
          <option>11h 00</option>
          <option>12h 00</option>
          <option>13h 00</option>
          <option>14h 00</option>
          <option>15h 00</option>
          <option>16h 00</option>
          <option>17h 00</option>
          <option>18h 00</option>
          <option>19h 00</option>
        </select>
        </div>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Durée de l'arrosage</Form.Label>
      <Form.Control type="number" placeholder="par secondes" />
    </Form.Group>
    
    <Button variant="primary" type="submit" className="mt-3" id='btn'>
      Appliquer
    </Button>
    <a href={`/parametre`} className='lien'>Paramètres</a>
  </Form>
  </Card>
  </div>
  </div>
  )
}

export default Personnaliser
