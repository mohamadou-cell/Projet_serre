import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Navbarre from "./navbarre";
import './styles/parametre.css'

function parametre() {
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
        <Form.Select>
            <option></option>
            <option>Laitue</option>
            <option>Sauge</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Nombre d'arrosage</Form.Label>
        <Form.Control type="number" placeholder="par jour" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Durée de l'arrosage</Form.Label>
        <Form.Control type="number" placeholder="par secondes" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mt-3" id='btn'>
        Appliquer
      </Button>
      <a href="" className='lien'>Personnaliser</a>
    </Form>
    </Card>
    </div>
    </div>
  )
}

export default parametre
