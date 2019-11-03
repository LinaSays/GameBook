// == Import : npm
import React from 'react';
import {
  Form, FormGroup, Label, Input, FormText, CustomInput,
  Pagination, PaginationItem, PaginationLink, Button,
} from 'reactstrap';
import { CirclePicker } from 'react-color';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local
import Choix from './Choix';

// == Composant
class Chapitres extends React.Component {
  componentDidMount() {
    const { getAllChapters } = this.props;
    getAllChapters();
  }

  handleChange = (event) => {
    const { changeValue } = this.props;
    const { name, value } = event.target;
    changeValue(name, value);
  };

  handleSelect = (event) => {
    const { getSelectedChapter, getAllChapters } = this.props;
    const { name, value } = event.target;
    console.log(name, value);
    getSelectedChapter(value);
    getAllChapters();
  };


  handleChangeComplete = (color, event) => {
    document.getElementById('selectedColor').type = 'text';
    document.getElementById('selectedColor').focus();
    document.getElementById('selectedColor').value = color.hex;
    document.getElementById('selectedColor').blur();
    document.getElementById('selectedColor').type = 'hidden';
  };

  newChapter = (event) => {
    const { sendChapter, getAllChapters } = this.props;
    event.preventDefault();
    sendChapter();
    getAllChapters();
  };

  render() {
    const {
      changeValue, recap, text, title, choice, choice2, choice3, selectedColor, chapters,
    } = this.props;
    return (
      <Form id="formidable">
        {/* Contenu du Tabs 2 - les chapitres */}
        <FormGroup>
          {/* Pagination des chapitres */}
          <Input type="select" name="selectChapter" id="allchapters" onChange={this.handleSelect}>
            <option>Choisir un chapitre</option>
            {chapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.recap}</option>)}
          </Input>
          <FormText>Permet de sélectionner un chapitre déjà écrit</FormText>
        </FormGroup>
        <FormGroup>
          <h5>Maintenant il va falloir rédiger un chapitre
            et les choix qui en découlent.
          </h5>
        </FormGroup>
        <FormGroup>
          {/* Résumé du chapitre */}
          <Label for="chapterSummary">Résumé de chapitre</Label>
          <Input type="text" name="recap" value={recap} onChange={this.handleChange} id="chapterSummary" placeholder="Résumez rapidement ce chapitre" />
          <FormText>Vous aide à identifier rapidement la trame de ce chapitre</FormText>
        </FormGroup>
        <div className="columns">
          <div className="writer-column">
            <FormGroup>
              {/* Texte du chapitre */}
              <Label for="chapterText">Texte du chapitre</Label>
              <Input type="textarea" value={text} onChange={this.handleChange} rows="32" name="text" id="chapterText" />
            </FormGroup>
          </div>
          <Choix changeValue={changeValue} title={title} recap={recap} text={text} choice1={choice1} choice2={choice2} choice3={choice3} chapters={chapters} />
        </div>
        <FormGroup>
          {/* Image de fond */}
          <Label for="customImage">Sélectionnez une image de fond</Label>
          <CustomInput type="file" name="customFile" id="customImage" label="format .jpg ou .png" />
          <FormText>Une image de fond pour illustrer votre page/chapitre.</FormText>
        </FormGroup>
        <FormGroup>
          {/* Couleur de fond */}
          <Label for="colorPicker">Choisissez une couleur de fond</Label>
          <CirclePicker onChangeComplete={this.handleChangeComplete} width="100%" className="color-picker" value={selectedColor} />
          <FormText className="legendColor">Peut compléter votre image de fond et la remplacer pour la version mobile</FormText>
          <input type="hidden" onBlur={this.handleChange} name="selectedColor" value={selectedColor} id="selectedColor" />
        </FormGroup>
        <FormGroup>
          {/* Boutons supprimer sauvegarder et nouveau chapitre */}
          <Button className="trash-icon" title="Supprimer l'histoire" color="danger">
            <FiTrash />
          </Button>
          <div className="button-bar">
            <Button className="custom-button" title="Sauvegarder les changements" color="dark">
              Sauvegarder
            </Button>
            <Button className="custom-button" title="Écrire la suite" color="danger" onClick={this.newChapter}>
              <FiEdit3 /> Nouveau chapitre
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

Chapitres.propTypes = {
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  recap: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  choice: PropTypes.string,
  choice2: PropTypes.string,
  selectedColor: PropTypes.string,
  chapters: PropTypes.array,
  getSelectedChapter: PropTypes.func.isRequired,
  getAllChapters: PropTypes.func.isRequired,
  sendChapter: PropTypes.func.isRequired,
};

Chapitres.defaultProps = {
  choice: '',
  choice2: '',
  selectedColor: '',
  chapters: [],
};

// == Export
export default Chapitres;
