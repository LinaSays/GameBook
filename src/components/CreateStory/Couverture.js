// == Import : npm
import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
  FormText, CustomInput,
}
  from 'reactstrap';
import {
  FiTrash,
  FiEdit3,
}
  from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
class Couverture extends React.Component {
  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  handleChange = (event) => {
    const { changeValue } = this.props;
    const { name, value } = event.target;
    changeValue(name, value);
  };

  startWritting = (event) => {
    event.preventDefault();
    const { createNewStory, toggle } = this.props;
    createNewStory();
    const titleText = document.getElementById('storyTitle').value;
    const summaryText = document.getElementById('summaryText').value;
    if (titleText.length > 0 && summaryText.length >= 5) {
      toggle('2');
    }
  };

  deleteStory = (event) => {
    event.preventDefault();
    const storyId = sessionStorage.getItem('story');
    console.log(storyId);
    const { deleteStory } = this.props;
    deleteStory(storyId);
    if (deleteStory(storyId)) {
      document.location.href = '/profile';
    }
  };

  updateStory = (event) => {
    event.preventDefault();
    const storyId = sessionStorage.getItem('story');
    const { findStoryToEdit } = this.props;
    findStoryToEdit(storyId);
  };

  render() {
    const { title, summary, category } = this.props;
    return (
      <Form>
        <FormGroup>
          <h5>Prenez ici, le temps de préparer la couverture de votre histoire</h5>
        </FormGroup>
        <FormGroup>
          {/* Titre de l'histoire */}
          <Label for="storyTitle">Titre</Label>
          <Input type="text" name="title" value={title} onChange={this.handleChange} id="storyTitle" placeholder="Titre de votre histoire..." required />
          <FormText>Votre titre doit donner envie de lire vos écrits.</FormText>
        </FormGroup>
        <FormGroup>
          {/* Synopsis de l'histoire */}
          <Label for="summaryText">Résumé</Label>
          <Input type="textarea" rows="4" name="summary" value={summary} onChange={this.handleChange} id="summaryText" placeholder="Ecrivez une description succincte de votre histoire..." />
          <FormText>Voyez ceci comme le texte trouvé au dos d'un livre.</FormText>
        </FormGroup>
        <FormGroup>
          {/* Choix de la catégorie */}
          <Label for="categorieSelect">Choisissez le genre de votre histoire...</Label>
          <Input type="select" name="select" id="categorieSelect" onChange={this.handleChange}>
            {category.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          {/* Choix de la couverture */}
          <Label for="customCover">Sélectionnez une image de couverture</Label>
          <CustomInput type="file" name="customFile" id="customCover" label="format .jpg ou .png" />
          <FormText>C'est comme la jaquette de votre livre.</FormText>
        </FormGroup>
        <FormGroup>
          {/* Boutons supprimer, mettre à jour et commencer */}
          <Button className="trash-icon" title="Supprimer l'histoire" color="danger" onClick={this.deleteStory}>
            <FiTrash />
          </Button>
          <div className="button-bar">
            <Button className="custom-button" title="Sauvegarder les changements" color="dark" onClick={this.updateStory}>
              Mettre à jour
            </Button>
            <Button
              className="custom-button"
              title="Commencer l'écriture"
              color="danger"
              onClick={this.startWritting}
            >
              <FiEdit3 /> Commencer
            </Button>
          </div>
          <Button className="trash-icon-mobile" title="Supprimer l'histoire" color="danger">
            <FiTrash />
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

Couverture.propTypes = {
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  createNewStory: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteStory: PropTypes.func.isRequired,
  findStoryToEdit: PropTypes.func.isRequired,
};

// == Export
export default Couverture;
