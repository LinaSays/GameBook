// == Import : npm
import React from 'react';
import {
  Form, FormGroup, Label, Input, FormText, CustomInput, Button,
} from 'reactstrap';
import { CirclePicker } from 'react-color';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// == Import : local
import Choix from './Choix';
import config from '../../../config';

// == Composant
class Chapitres extends React.Component {
  componentDidMount() {
    const { getAllChapters } = this.props;
    getAllChapters();
  }

  handleChange = (event) => {
    const { changeValue } = this.props;
    const { name, value } = event.target;
    console.log(name, value);
    changeValue(name, value);
  };

  handleSelect = (event) => {
    const { getSelectedChapter, getAllChapters } = this.props;
    const { name, value } = event.target;
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
    const chapterRecap = document.getElementById('chapterSummary').value;
    if (chapterRecap.length > 0) {
      sendChapter();
      getAllChapters();
    }
  };

  deleteChapter = (event) => {
    event.preventDefault();
    const id = document.getElementsByName('selectChapter')[0].value;
    const { deleteChapter } = this.props;
    deleteChapter(id);
  };

  updateChapter = (event) => {
    event.preventDefault();
    const id = document.getElementsByName('selectChapter')[0].value;
    const { findChapterToEdit } = this.props;
    findChapterToEdit(id);
    const summary = document.getElementById('chapterSummary').value;
    document.getElementsByName('selectChapter')[0].selectedOptions[0].text = summary;
  };

  upload = (widget) => {
    widget.open();
  }

  getUrl = (url) => {
    document.getElementById('customChapter').type = 'text';
    document.getElementById('customChapter').focus();
    document.getElementById('customChapter').value = url;
    document.getElementById('customChapter').blur();
    document.getElementById('customChapter').type = 'hidden';
  }

  render() {
    const {
      changeValue, recap, text, title, choice1, choice2, choice3, selectedColor, chapters, sendChoice, customFile,
    } = this.props;
    const widget = window.cloudinary.createUploadWidget({
      cloudName: config.cloudName,
      uploadPreset: config.uploadPreset }, (error, result) => { 
      if (!error && result && result.event === 'success') {
        const { url } = result.info;
        this.getUrl(url);
        toast.success('L\'image a été bien chargée');
      }
    });
    return (
      <Form id="formidable">
        {/* Content of Tabs 2 - chapters */}
        <FormGroup>
          {/* Pages of chapters */}
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
          {/* Recap of chapter */}
          <Label for="chapterSummary">Résumé de chapitre</Label>
          <Input type="text" name="recap" value={recap} onChange={this.handleChange} id="chapterSummary" placeholder="Résumez rapidement ce chapitre" />
          <FormText>Vous aide à identifier rapidement la trame de ce chapitre</FormText>
        </FormGroup>
        <div className="columns">
          <div className="writer-column">
            <FormGroup>
              {/* Text of chapter */}
              <Label for="chapterText">Texte du chapitre</Label>
              <Input type="textarea" value={text} onChange={this.handleChange} rows="32" name="text" id="chapterText" />
            </FormGroup>
          </div>
          <Choix changeValue={changeValue} title={title} recap={recap} text={text} choice1={choice1} choice2={choice2} choice3={choice3} chapters={chapters} sendChoice={sendChoice} />
        </div>
        <FormGroup>
          {/* Back image */}
          <Label for="customImage">Sélectionnez une image de fond</Label>
          <Button id="upload_widget" className="cloudinary-button" color="info" onClick={() => this.upload(widget)}>Charger une image</Button>
          <FormText>Une image de fond pour illustrer votre page/chapitre.</FormText>
          <input type="hidden" onBlur={this.handleChange} name="customFile" id="customChapter" value={customFile} />
        </FormGroup>
        <FormGroup>
          {/* Back color */}
          <Label for="colorPicker">Choisissez une couleur de fond</Label>
          <CirclePicker onChangeComplete={this.handleChangeComplete} width="100%" className="color-picker" value={selectedColor} />
          <FormText className="legendColor">Peut compléter votre image de fond et la remplacer pour la version mobile</FormText>
          <input type="hidden" onBlur={this.handleChange} name="selectedColor" value={selectedColor} id="selectedColor" />
        </FormGroup>
        <FormGroup>
          {/* Delete, Save, New chapter buttons */}
          <Button className="trash-icon" title="Supprimer l'histoire" color="danger" onClick={this.deleteChapter}>
            <FiTrash />
          </Button>
          <div className="button-bar">
            <Button className="custom-button" title="Sauvegarder les changements" color="dark" onClick={this.updateChapter}>
              Mettre à jour
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
  customFile: PropTypes.string.isRequired,
  choice1: PropTypes.string,
  choice2: PropTypes.string,
  choice3: PropTypes.string,
  selectedColor: PropTypes.string,
  chapters: PropTypes.array,
  getSelectedChapter: PropTypes.func.isRequired,
  getAllChapters: PropTypes.func.isRequired,
  sendChapter: PropTypes.func.isRequired,
  sendChoice: PropTypes.func.isRequired,
  deleteChapter: PropTypes.func.isRequired,
  findChapterToEdit: PropTypes.func.isRequired,
};

Chapitres.defaultProps = {
  choice1: '',
  choice2: '',
  choice3: '',
  selectedColor: '',
  chapters: [],
};

// == Export
export default Chapitres;
