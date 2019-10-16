// == Import : npm
import React from 'react';
import {
  Form,
  Button,
  Container,
  ButtonToolbar,
}
  from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { FiUpload } from 'react-icons/fi';
import { IoMdTrash } from 'react-icons/io';

// == Import : local
import './createchapter.scss';

// == Composant
const CreateChapter = () => (
  <Jumbotron fluid>
    <Container>
      <Form>
        <Form.Group controlId="formTitleStory">
          <Form.Control type="texte" placeholder="Titre de votre histoire" />
        </Form.Group>
        <Form.Group controlId="ControlTextareaDescription">
          <Form.Control as="textarea" rows="10" placeholder="Ecrivez une description de votre histoire..." />
        </Form.Group>
        <Form.Group controlId="formControlCatSelect">
          <Form.Control as="select">
            <option>Choisissez la catégorie de votre histoire...</option>
            {
              categories.map((category) => <option>{category}</option>)
            }
          </Form.Control>
        </Form.Group>
        <Form.Row className="upload">
          <Form.Group>
            <Button variant="dark"><FiUpload /> Uploadez l'image de couverture de l'histoire</Button>
          </Form.Group>
          <Form.Group>
            <Form.Label classame="publication">Statut</Form.Label>
            <BootstrapSwitchButton
              onlabel='Publié'
              offlabel='Brouillon'
              checked={false}
              width={150}
            />
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
