import { Card, Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import './styles/connexion.css'
// import { React } from "react";



const Connexion = () => {

return (
<Card className="color-overlay d-flex
justify-content-center align-items-center bg">
<Form className="rounded p-4 p-sm-3" >
<Form.Group className="mb-3"
controlId="formBasicEmail">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="veillez saisr votre email" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="veillez saisr votre password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
</Form.Group>

<Button variant="primary" type="submit">
Connexion
</Button>

</Form>
</Card>
);
}

export default Connexion