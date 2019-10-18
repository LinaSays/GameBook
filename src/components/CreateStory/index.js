// == Import : npm
import React from 'react';
import {
  Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormFeedback, FormText, CustomInput, Breadcrumb, BreadcrumbItem,
}
  from 'reactstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { IoMdTrash } from 'react-icons/io';

// == Import : local
import './createstory.scss';
import categories from 'src/data/category';

// == Composant
const CreateStory = () => (
  <Jumbotron fluid>
    <h1 className="title">L'aventure démarre enfin...</h1>
    <p className="lead">révélez votre talent d'écrivain et prenez en main le destin de vos lecteurs</p>
    <Container fluid>
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#">Accueil</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Mon profil</BreadcrumbItem>
          <BreadcrumbItem active tag="span">Créer une histoire</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Form>
        <FormGroup>
          <h4>Prenez ici, le temps de configurer de votre histoire</h4>
        </FormGroup>
        <FormGroup>
          <Label for="storyTitle">Titre</Label>
          <Input type="text" name="title" id="storyTitle" placeholder="Titre de votre histoire..." />
          <FormFeedback valid>Ce titre est disponible !</FormFeedback>
          <FormFeedback invalid>Ce titre n'est malheureusement pas disponible.</FormFeedback>
          <FormText>Votre titre doit donner envie de lire vos écrits.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="summaryText">Résumé</Label>
          <Input type="textarea" rows="4" name="summary" id="summaryText" placeholder="Ecrivez une description succincte de votre histoire..." />
          <FormText>Voyez ceci comme le texte trouvé au dos d'un livre.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="categorieSelect">Choisissez le genre de votre histoire..</Label>
          <Input type="select" name="select" id="categorieSelect">
            {
              categories.map((category) => <option key={category}>{category}</option>)
            }
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="customCover">Sélectionnez une image de couverture</Label>
          <CustomInput type="file" name="customFile" id="customCover" label="formats .jpg ou .png" />
          <FormFeedback valid>Couverture d'image sélectionné !</FormFeedback>
          <FormFeedback invalid>Cette image ne répond pas aux formats ou poids autorisés.</FormFeedback>
          <FormText>C'est comme la jaquette de votre livre.</FormText>
        </FormGroup>
        <FormGroup>
          <Label className="publication">Statut de l'histoire</Label>
          <BootstrapSwitchButton
            onlabel="Publié"
            offlabel="Brouillon"
            checked={false}
            width={150}
          />
        </FormGroup>
        <FormGroup>
          <Button className="trash-icon" color="danger">
            <IoMdTrash />
          </Button>
          <div className="button-bar">
            <Button className="custom-button" color="secondary">
              Modifier
            </Button>
            <Button className="custom-button" color="dark">
              Sauvegarder
            </Button>
          </div>
          <Button className="trash-icon-mobile" color="danger">
            <IoMdTrash />
          </Button>
        </FormGroup>
      </Form>
    </Container>
  </Jumbotron>
);

// == Export
export default CreateStory;
