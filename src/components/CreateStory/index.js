// == Import : npm
import React, { useState } from 'react';
import {
  Jumbotron, Container, Button, Form, FormGroup, Label,
  Input, FormFeedback, FormText, CustomInput, Breadcrumb, BreadcrumbItem,
  TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col,
  Pagination, PaginationItem, PaginationLink,
  ListGroup, ListGroupItem,
}
  from 'reactstrap';
import classnames from 'classnames';
import { CirclePicker } from 'react-color';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {
  FiTrash,
  FiEdit3,
  FiClipboard,
  FiBookOpen,
  FiSend,
  FiCornerDownRight,
  FiGitCommit,
  FiHome,
  FiDelete,
  FiPlus,
  FiSave,
}
  from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local
import './createstory.scss';
import categories from 'src/data/category';

// == Composant
const CreateStory = ({ changeValue, title, summary, recap, text, choice, choice2 }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

 

  return (
    <Jumbotron fluid className="writer-background">
      <h1 className="title">L'aventure démarre enfin...</h1>
      <p className="lead">révélez votre talent d'écrivain et prenez en main le destin de vos lecteurs</p>
      <Container fluid className="container-box">
        <div>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="#">Accueil</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Mon profil</BreadcrumbItem>
            <BreadcrumbItem active tag="span">Créer une histoire</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  <FiClipboard /> Le début
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  <FiBookOpen /> Les chapitres
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  <FiSend /> Publication
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <FormGroup>
                  <h5>Prenez ici, le temps de préparer la couverture de votre histoire</h5>
                </FormGroup>
                <FormGroup>
                  <Label for="storyTitle">Titre</Label>
                  <Input type="text" name="title" value={title} onChange={handleChange} id="storyTitle" placeholder="Titre de votre histoire..." required />
                  <FormFeedback valid>Ce titre est disponible !</FormFeedback>
                  <FormFeedback invalid>
                    Ce titre n'est malheureusement pas disponible.
                  </FormFeedback>
                  <FormText>Votre titre doit donner envie de lire vos écrits.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="summaryText">Résumé</Label>
                  <Input type="textarea" rows="4" name="summary" value={summary} onChange={handleChange} id="summaryText" placeholder="Ecrivez une description succincte de votre histoire..." />
                  <FormText>Voyez ceci comme le texte trouvé au dos d'un livre.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="categorieSelect">Choisissez le genre de votre histoire...</Label>
                  <Input type="select" name="select" id="categorieSelect">
                    {
                      categories.map((category) => <option key={category}>{category}</option>)
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="customCover">Sélectionnez une image de couverture</Label>
                  <CustomInput type="file" name="customFile" id="customCover" label="format .jpg ou .png" />
                  <FormFeedback valid>Couverture d'image sélectionnée !</FormFeedback>
                  <FormFeedback invalid>
                  Cette image ne répond pas aux formats ou poids autorisés.
                  </FormFeedback>
                  <FormText>C'est comme la jaquette de votre livre.</FormText>
                </FormGroup>
                <FormGroup>
                  <Button className="trash-icon" title="Supprimer l'histoire" color="danger">
                    <FiTrash />
                  </Button>
                  <div className="button-bar">
                    <Button className="custom-button" title="Sauvegarder les changements" color="dark">
                      Mettre à jour
                    </Button>
                    <Button className="custom-button" title="Commencer l'écriture" color="danger">
                      <FiEdit3 /> Commencer
                    </Button>
                  </div>
                  <Button className="trash-icon-mobile" title="Supprimer l'histoire" color="danger">
                    <FiTrash />
                  </Button>
                </FormGroup>
              </TabPane>
              <TabPane tabId="2">
                <Form>
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
                  <FormGroup>
                    <h5>Maintenant il va falloir rédiger un chapitre et les choix qui en découlent.</h5>
                  </FormGroup>
                  <FormGroup>
                    <Label for="chapterSummary">Résumé de chapitre</Label>
                    <Input type="text" name="recap" value={recap} onChange={handleChange} id="chapterSummary" placeholder="Résumez rapidement ce chapitre" />
                    <FormFeedback valid>Résumé validé !</FormFeedback>
                    <FormFeedback invalid>Votre résumé est vide ou incomplet</FormFeedback>
                    <FormText>Vous aide à identifier rapidement la trame de ce chapitre</FormText>
                  </FormGroup>
                  <div className="columns">
                    <div className="writer-column">
                      <FormGroup>
                        <Label for="chapterText">Texte du chapitre</Label>
                        <Input type="textarea" value={text} onChange={handleChange} rows="26" name="text" id="chapterText" />
                      </FormGroup>
                    </div>
                    <div className="choices-column">
                      {/* <h6>Préparez les choix disponibles pour le lecteur</h6> */}
                      <FormGroup className="numberChoices">
                        <Label for="numberChoicesSelect">Nombre de choix de décisions (0 à 3)</Label>
                        <ListGroup>
                          <ListGroupItem active className="add-choice" tag="a" color="success" href="#" action><FiPlus /> Ajouter un choix</ListGroupItem>
                        </ListGroup>
                        <FormText>Nombre de choix proposés au lecteur</FormText>
                      </FormGroup>
                      <hr className="separation" />
                      <FormGroup>
                        <FormGroup className="choices">
                          <Label for="choice1" className="choices-label"><FiGitCommit className="choices-icon" /> Choix 1</Label>
                          <Button className="save-choice" title="Sauver le choix" color="success"><FiSave /></Button>
                          <Button className="delete-choice" title="Supprimer le choix" color="danger">
                            <FiDelete />
                          </Button>
                          <Input type="text" value={choice} onChange={handleChange} name="choice" id="choice1" placeholder="Écrivez le texte pour ce choix..." />
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
                          <Button className="save-choice" title="Sauver le choix" color="success"><FiSave /></Button>
                          <Button className="delete-choice" title="Supprimer le choix" color="danger">
                            <FiDelete />
                          </Button>
                          <Input type="text" value={choice2} onChange={handleChange} name="choice2" id="choice2" placeholder="Écrivez le texte pour ce choix..." />
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
                    </div>
                  </div>
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
                    <CirclePicker width="100%" className="color-picker" id="colorPicker" />
                    <FormText className="legendColor">Peut compléter votre image de fond et la remplacer pour la version mobile</FormText>
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
              </TabPane>
              <TabPane tabId="3">
                <FormGroup>
                  <h4>La fin se rapproche petit à petit...</h4>
                </FormGroup>
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Statut de publication</CardTitle>
                      <CardText>
                        Ici vous allez choisir si votre histoire est publiée et accessible aux lecteurs ou si vous préférez la garder en mode "brouillon" pour travailler encore dessus.
                      </CardText>
                      <FormGroup className="publication-button">
                        <Label className="publication">Statut de l'histoire</Label>
                        <BootstrapSwitchButton
                          onlabel="Publié"
                          offlabel="Brouillon"
                          checked={false}
                          width={150}
                        />
                      </FormGroup>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Temps de prendre une pause ou de boucler le livre !</CardTitle>
                      <CardText>
                        Bravo ! Vous avez bien travaillez aujourd'hui. Cliquez joyeusement sur le bouton ci-dessous pour quitter l'écran de rédaction d'histoire.
                      </CardText>
                      <Button color="success"><FiHome /> J'ai fini !</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </Form>
      </Container>
    </Jumbotron>
  );
};

// == Export
export default CreateStory;

CreateStory.propTypes = {
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

Jumbotron.propTypes = {
  fluid: PropTypes.bool,
};

Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
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

FormGroup.propTypes = {
  children: PropTypes.node,
  // Applied the row class when true, does nothing when false
  row: PropTypes.bool,
  // Applied the form-check class when true, form-group when false
  check: PropTypes.bool,
  inline: PropTypes.bool,
  // Applied the disabled class when the check and disabled props are true, does nothing when false
  disabled: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.string, // default: 'div'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

Form.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};
