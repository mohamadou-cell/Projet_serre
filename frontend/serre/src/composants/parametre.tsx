import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function parametre() {
  return (
    <body className='mt-5 d-flex justify-content-center align-items-center'>
        
    
    
    <Card body className='d-flex justify-content-center w-25 shadow mr-3 mb-5 bg-body' id='card'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Type de plante</Form.Label>
        <Form.Select>
            <option></option>
            <option>Laitue</option>
            <option>Sauge</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre d'arrosage</Form.Label>
        <Form.Control type="text" placeholder="par jour" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Durée de l'arrosage</Form.Label>
        <Form.Control type="text" placeholder="par secondes" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Appliquer
      </Button>
    </Form>
    </Card>
    </body>
  )
}

export default parametre
