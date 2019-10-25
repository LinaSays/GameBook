// == Import : npm
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// == Import : local

// == Composant
const Change = () => (
  <Form>
    <Form.Group controlId="formBasicName">
      <Form.Label>Nom Prénom</Form.Label>
      <Form.Control type="text" placeholder="Nom Prénom" name="user_name" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" />
    </Form.Group>
    <Form.Group controlId="formBasicAvatar">
      <Form.Label>Avatar</Form.Label>
      <Form.Control type="file" placeholder="Avatar" name="avatar" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Modifier
    </Button>
  </Form>
);

// == Export
export default Change;
