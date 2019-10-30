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
  <>
    <div className="wrapper-button">
      <button type="button" variant="warning" className="button-createstory"><Link to="/createstory" className="button-createstory-text">Ecrire une histoire</Link></button>
    </div>
    <Accordion className="animation-menu">
      <Card>
        <Card.Header className="toggle-button">
          <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="1">
          Modifier mes infos
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="card-content-text"><Change /></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className="toggle-button">
          <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="2">
          Les histoires créées
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="card-content-text"><Wrote /></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className="toggle-button">
          <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="3">
          Les histoires lues
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="card-content-text"><Read /></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className="toggle-button">
          <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="4">
          Mes badges
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="card-content-text"><Pins /></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </>
);


// == Export
export default Mobile;
