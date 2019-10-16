// == Import : npm
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// == Import : local

// == Composant
const Change = () => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Nom Prénom</Form.Label>
      <Form.Control type="text" placeholder="Nom Prénom" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Avatar</Form.Label>
      <Form.Control type="file" placeholder="Avatar" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Modifier
    </Button>
  </Form>
);

// == Export
export default Change;
