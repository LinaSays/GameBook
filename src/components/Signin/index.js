// == Import : npm
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// == Import : local


// == Composant
const Signin = () => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="success" type="submit">
      Se connecter
    </Button>
  </Form>
);


// == Export
export default Signin;
