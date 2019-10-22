// == Import : npm
import React from 'react';
import {
  Jumbotron, Container, Button, Form, FormGroup, Label,
  Input, FormFeedback, FormText, CustomInput, Breadcrumb, BreadcrumbItem,
  Pagination, PaginationItem, PaginationLink,
}
  from 'reactstrap';
import { CirclePicker } from 'react-color';
import {
  FiTrash,
  FiEdit3,
  FiCornerDownRight,
  FiGitCommit,
  FiEdit,
  FiShare2,
}
  from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local
import './createchapter.scss';


// == Composant
const CreateChapter = () => {
  return (
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
            <div className="top-button-bar">
              <Button className="top-custom-button" title="Formulaire de rédaction" color="secondary">
                <FiEdit className="top-custom-icon" /> Vue rédaction
              </Button>
              <Button className="top-custom-button" title="Vue des connecteurs" color="primary">
                <FiShare2 className="top-custom-icon"/> Vue architecture
              </Button>
            </div>
          </FormGroup>
          <FormGroup>
            <Pagination aria-label="Chapter navigation" id="chapterPagination">
              <PaginationItem>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
          </FormGroup>
          <h6>Préparez le texte de votre chapitre</h6>
          <FormGroup>
            <Label for="chapterSummary">Résumé de chapitre</Label>
            <Input type="text" name="recap" id="chapterSummary" placeholder="Résumez rapidement ce chapitre" />
            <FormFeedback valid>Résumé validé !</FormFeedback>
            <FormFeedback invalid>Votre résumé est vide ou incomplet</FormFeedback>
            <FormText>Vous aide à identifier rapidement la trame de ce chapitre</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="chapterText">Texte du chapitre</Label>
            <Input type="textarea" rows="12" name="text" id="chapterText" />
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
            <Label for="colorPicker">Choisissez une couleur de fond</Label>
            <CirclePicker width="100%" className="color-picker" id="colorPicker" name="colorPicker" />
            <FormText className="legendColor">Peut compléter votre image de fond et la remplacer pour la version mobile</FormText>
          </FormGroup>
          <h6>Préparez les choix disponibles pour le lecteur</h6>
          <FormGroup className="numberChoices">
            <Label for="numberChoicesSelect">Nombre de choix de décisions</Label>
            <Input type="select" name="select" id="numberChoicesSelect">
              <option>Aucun choix</option>
              <option>1 choix</option>
              <option>2 choix</option>
              <option>3 choix</option>
              <option>4 choix</option>
            </Input>
            <FormText>Nombre de choix proposés au lecteur</FormText>
          </FormGroup>
          <hr />
          <FormGroup>
            <FormGroup className="choices">
              <Label for="choice1" className="choices-label"><FiGitCommit className="choices-icon" /> Choix 1</Label>
              <Input type="text" name="choice" id="choice1" placeholder="Écrivez le texte pour ce choix..." />
              <FormText>Offrez à votre lecteur une décision à prendre</FormText>
            </FormGroup>
            <FormGroup className="choices-fork">
              <FiCornerDownRight className="choices-fork-icon" />
              <Label for="destination1" className="choices-fork-icon-label">Chapitre de destination</Label>
              <Input type="select" name="select" id="destination1">
                <option>Choisir un chapitre d'arrivée</option>
                <option>Retour à la taverne</option>
                <option>Direction la forêt</option>
              </Input>
              <FormText>Cette décision amène au chapitre sélectionné</FormText>
            </FormGroup>
            <hr />
            <FormGroup className="choices">
              <Label for="choice2" className="choices-label"><FiGitCommit className="choices-icon" /> Choix 2</Label>
              <Input type="text" name="choice" id="choice2" placeholder="Écrivez le texte pour ce choix..." />
              <FormText>Offrez à votre lecteur une décision à prendre</FormText>
            </FormGroup>
            <FormGroup className="choices-fork">
              <FiCornerDownRight className="choices-fork-icon" />
              <Label for="destination2" className="choices-fork-icon-label">Chapitre de destination</Label>
              <Input type="select" name="select" id="destination2">
                <option>Choisir un chapitre d'arrivée</option>
                <option>Retour à la taverne</option>
                <option>Direction la forêt</option>
              </Input>
              <FormText>Cette décision amène au chapitre sélectionné</FormText>
            </FormGroup>
            <hr />
          </FormGroup>
          <FormGroup>
            <Button className="trash-icon" title="Supprimer l'histoire" color="danger">
              <FiTrash />
            </Button>
            <div className="button-bar">
              <Button className="custom-button" title="Sauvegarder les changements" color="dark">
                Sauvegarder
              </Button>
              <Button className="custom-button" title="Écrire la suite" color="danger">
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
}

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

Pagination.propTypes = {
  'aria-label': PropTypes.string,
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
};

PaginationLink.propTypes = {
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  'aria-label': PropTypes.string,
};
