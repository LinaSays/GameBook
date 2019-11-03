// == Import : npm
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local
import Change from './Change';
import Wrote from './Wrote';
import Read from './Read';
import Pins from './Pins';


// == Composant
const Mobile = ({ pins, read, wrote, profile }) => (
  <Accordion className="animation-menu">
    <Card>
      <Card.Header className="toggle-button">
        <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="1">
          Modifier mes infos
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body className="card-content-text"><Change {...profile} /></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header className="toggle-button">
        <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="2">
        Les histoires créées
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body className="card-content-text">
          {wrote.map((test) => (
            <Wrote key={test.image} {...test} />
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header className="toggle-button">
        <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="3">
        Les histoires lues
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body className="card-content-text">
          {read.map((test) => (
            <Read key={test.image} {...test} />
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header className="toggle-button">
        <Accordion.Toggle className="toggle-button-text" as={Button} variant="link" eventKey="4">
        Mes badges
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="4">
        <Card.Body className="card-content-text badge-ipad">
          {pins.map((test) => (
            <Pins key={test.badge} {...test} />
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

Mobile.propTypes = {
  pins: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  wrote: PropTypes.array.isRequired,
};

// == Export
export default Mobile;
