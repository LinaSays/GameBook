// == Import : npm
import React from 'react';
import {
  Jumbotron, Container, Button, Form, FormGroup, Label,
  Input, FormFeedback, FormText, CustomInput, Breadcrumb, BreadcrumbItem,
}
  from 'reactstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local
import './createchapter.scss';


// == Composant
const CreateChapter = () => (
  <Jumbotron fluid>
    <h1 className="title">L'aventure démarre enfin...</h1>
    <p className="lead">révélez votre talent d'écrivain et prenez en main le destin de vos lecteurs</p>
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
          <h4>Prenez ici, le temps de configurer de votre histoire</h4>
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
