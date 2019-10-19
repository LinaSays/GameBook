// == Import : npm
import React from 'react';
import {
  Jumbotron, Container, Button, Form, FormGroup, Label,
  Input, FormFeedback, FormText, CustomInput, Breadcrumb, BreadcrumbItem,
}
  from 'reactstrap';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local
import './createchapter.scss';


// == Composant
const CreateChapter = () => (
  <Jumbotron fluid>
    <h1 className="title">Les chapitres s'enchaînent...</h1>
    <p className="lead">armez-vous de patience et d'organisation pour arriver à bout de votre création</p>
    <Container fluid>
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#">Accueil</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Mon profil</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Créer une histoire</BreadcrumbItem>
          <BreadcrumbItem active tag="span">Chapitres</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Form>
        <FormGroup>
          <h4>Maintenant il va falloir rédiger une chapitre et les choix qui en découlent.</h4>
        </FormGroup>
        <FormGroup>
          <Label for="customImage">Sélectionnez une image de fond</Label>
          <CustomInput type="file" name="customFile" id="customImage" label="format .jpg ou .png" />
          <FormFeedback valid>Image de fond sélectionnée !</FormFeedback>
          <FormFeedback invalid>
          Cette image ne répond pas aux formats ou poids autorisés.
          </FormFeedback>
          <FormText>Une image de fond pour illustrer votre page/chapitre.</FormText>
        </FormGroup>
        <FormGroup>
          <Button className="trash-icon" title="Supprimer l'histoire" color="danger">
            <FiTrash />
          </Button>
          <div className="button-bar">
            <Button className="custom-button" title="Sauvegarder les changements" color="dark">
              Sauvegarder
            </Button>
            <Button className="custom-button" title="Commencer l'écriture" color="danger">
              <FiEdit3 /> Nouveau chapitre
            </Button>
          </div>
          <Button className="trash-icon-mobile" title="Supprimer l'histoire" color="danger">
            <FiTrash />
          </Button>
        </FormGroup>
      </Form>
    </Container>
  </Jumbotron>
);
// == Export
export default CreateChapter;
Jumbotron.propTypes = {
  fluid: PropTypes.bool,
};
Input.propTypes = {
  type: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  className: PropTypes.string,
};
CustomInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired, // radio, checkbox, select, range, switch, file.
  label: PropTypes.string, // used for checkbox and radios
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};
FormFeedback.propTypes = {
  valid: PropTypes.bool,
};
Button.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
};
Container.propTypes = {
  fluid: PropTypes.bool,
};
Breadcrumb.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
};
BreadcrumbItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
};
