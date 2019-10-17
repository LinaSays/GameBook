// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap';

// == Import : local
import Change from './Change';
import Wrote from './Wrote';
import Read from './Read';
import Pins from './Pins';

// == Composant
const Mobile = () => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Bienvenu dans votre profile
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
        Vous êtes inscrit depuis 16/10/2019
          <Button variant="warning" className="menu-link-btn"><Link to="/createstory" className="menu-link">Ecrire une histoire</Link></Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Modifier mes infos
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body><Change /></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Les histoires créées
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body><Wrote /></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Les histoires lues
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body><Read /></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="4">
        Mes badges
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="4">
        <Card.Body><Pins /></Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);


// == Export
export default Mobile;
