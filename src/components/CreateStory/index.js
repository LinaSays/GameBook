// == Import : npm
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

// == Import : local


// == Composant
const CreateStory = () => (
  <Form>
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Titre de votre histoire</Form.Label>
      <Form.Control type="email" placeholder="Titre de votre histoire" />
    </Form.Group>
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">
          Uploader
        </span>
      </div>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
        />
        <label className="custom-file-label" htmlFor="inputGroupFile01">
        Sélectionnez l'image de couverture de votre histoire
        </label>
      </div>
    </div>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows="3" placeholder="Ecrivez une description de votre histoire..." />
    </Form.Group>
    <Form.Group controlId="Form.ControlCatSelect">
      <Form.Label>Catégories d'histoire</Form.Label>
      <Form.Control as="select">
        <option>Fantastique</option>
        <option>Science-fiction</option>
        <option>Contes</option>
        <option>Bit-lit</option>
        <option>Contemporain</option>
      </Form.Control>
    </Form.Group>
    <Row>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button variant="primary" type="submit">
          Supprimer
        </Button>
      </Col>
      <Col>
        <Button variant="primary" type="submit">
          Modifier
        </Button>
      </Col>
      <Col>
        <Button variant="primary" type="submit">
          Sauvegarder
        </Button>
      </Col>
    </Row>
  </Form>

);

// == Export
export default CreateStory;
