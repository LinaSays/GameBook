// == Import : npm
import React from 'react';
import {
  Button, FormGroup, Label, Input,
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
import categories from 'src/data/category';

// == Composant
const Couverture = ({ title, summary, changeValue }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  return (
    <>
      <FormGroup>
        <h5>Prenez ici, le temps de préparer la couverture de votre histoire</h5>
      </FormGroup>
      <FormGroup>
        {/* Titre de l'histoire */}
        <Label for="storyTitle">Titre</Label>
        <Input type="text" name="title" value={title} onChange={handleChange} id="storyTitle" placeholder="Titre de votre histoire..." required />
        <FormText>Votre titre doit donner envie de lire vos écrits.</FormText>
      </FormGroup>
      <FormGroup>
        {/* Synopsis de l'histoire */}
        <Label for="summaryText">Résumé</Label>
        <Input type="textarea" rows="4" name="summary" value={summary} onChange={handleChange} id="summaryText" placeholder="Ecrivez une description succincte de votre histoire..." />
        <FormText>Voyez ceci comme le texte trouvé au dos d'un livre.</FormText>
      </FormGroup>
      <FormGroup>
        {/* Choix de la catégorie */}
        <Label for="categorieSelect">Choisissez le genre de votre histoire...</Label>
        <Input type="select" name="select" id="categorieSelect">
          {
            categories.map((category) => <option key={category}>{category}</option>)
          }
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
    </>
  );
};

Couverture.propTypes = {
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

// == Export
export default Couverture;
