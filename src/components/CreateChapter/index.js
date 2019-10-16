// == Import : npm
import React from 'react';
import {
  Form,
  Button,
  Container,
  ButtonToolbar,
  Row,
  Col,
}
  from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Pagination from 'react-bootstrap/Pagination';
import { FiUpload, FiPenTool, FiGitMerge } from 'react-icons/fi';
import { IoMdTrash } from 'react-icons/io';

// == Import : local
import './createchapter.scss';

// == Composant
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const CreateChapter = () => (
  <Jumbotron fluid>
    <Container>
      <Row className="views-icon">

          <Button variant="dark">
            <FiPenTool />
          </Button>


          <Button variant="dark">
            <FiGitMerge />
          </Button>

      </Row>
      <Pagination>{items}</Pagination>
      <Form>
        <Form.Group controlId="formTitleStory">
          <Form.Control type="texte" placeholder="Résumé la situation de ce chapitre..." />
        </Form.Group>
        <Form.Group controlId="ControlTextareaDescription">
          <Form.Control as="textarea" rows="10" placeholder="Ecrivez le texte de ce chapitre..." />
        </Form.Group>
        <Form.Row className="upload">
          <Form.Group>
            <Button variant="dark"><FiUpload /> Uploadez l'image de fond pour ce chapitre </Button>
          </Form.Group>
          <Form.Group>
            <Button variant="secondary">Choisir une couleur de fond</Button>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formControlChoiceNumberSelect">
            <Form.Control as="select">
              <option>Nombre de choix pour ce chapitre...</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formTextChoice">
            <Form.Control placeholder="Ecrivez le texte de ce choix..." />
          </Form.Group>

          <Form.Group controlId="formControlChoiceNumberSelect">
            <Form.Control as="select">
              <option>Rattaché au chapitre...</option>
              <option>0</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formTextChoice">
            <Form.Control placeholder="Ecrivez le texte de ce choix..." />
          </Form.Group>
          <Form.Group controlId="formControlChoiceNumberSelect">
            <Form.Control as="select">
              <option>Rattaché au chapitre...</option>
              <option>0</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Button className="trash-icon" variant="danger">
          <IoMdTrash />
        </Button>
        <ButtonToolbar>
          <Button className="custom-button-class" variant="secondary" size="sm">
            Modifier
          </Button>
          <Button className="custom-button-class" variant="info" size="sm">
            Sauvegarder
          </Button>
          <Button className="custom-button-class-delete" variant="outline-danger" size="sm">
            Supprimer
          </Button>
        </ButtonToolbar>
      </Form>
    </Container>
  </Jumbotron>
);

// == Export
export default CreateChapter;
