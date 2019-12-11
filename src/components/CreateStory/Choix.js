// == Import : npm
import React from 'react';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  FiCornerDownRight,
  FiGitCommit,
  FiDelete,
  FiSave,
} from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Choix = ({
  changeValue, choice1, choice2, choice3, chapters, sendChoice
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  const sendNewChoice = (id) => (event) => {
    event.preventDefault();
    sendChoice(id);
  };

  return (
    <>
      <div className="choices-column">
        {/* Prepare the available choices for reader */}
        <FormGroup className="numberChoices">
          <Label for="numberChoicesSelect">Nombre de choix de décisions (0 à 3)</Label>
          {/* <ListGroup>
            <ListGroupItem active className="add-choice" tag="a" color="success" href="#" action><FiPlus /> Ajouter un choix</ListGroupItem>
          </ListGroup>
          <FormText>Nombre de choix proposés au lecteur</FormText> */}
        </FormGroup>
        <hr className="separation" />
        <FormGroup>
          <FormGroup className="choices">
            {/* Choice 1 */}
            <Label for="choice1" className="choices-label"><FiGitCommit className="choices-icon" /> Choix 1</Label>
            <Button className="save-choice" title="Sauver le choix" color="success" onClick={sendNewChoice(1)}><FiSave /></Button>
            <Button className="delete-choice" title="Supprimer le choix" color="danger">
              <FiDelete />
            </Button>
            <Input type="text" value={choice1} onChange={handleChange} name="choice1" id="choice1" placeholder="Écrivez le texte pour ce choix..." />
            <FormText>Offrez à votre lecteur une décision à prendre</FormText>
          </FormGroup>
          <FormGroup className="choices-fork">
            <FiCornerDownRight className="choices-fork-icon" />
            <Label for="destination1" className="choices-fork-icon-label">Chapitre de destination</Label>
            <Input type="select" name="destination1" onChange={handleChange} id="destination1">
              <option>Choisir un chapitre d'arrivée</option>
              {chapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.recap}</option>)}
            </Input>
            <FormText>Cette décision amène au chapitre sélectionné</FormText>
          </FormGroup>
          <hr />
          <FormGroup className="choices">
            {/* Choice 2 */}
            <Label for="choice2" className="choices-label"><FiGitCommit className="choices-icon" /> Choix 2</Label>
            <Button className="save-choice" title="Sauver le choix" color="success" onClick={sendNewChoice(2)}><FiSave /></Button>
            <Button className="delete-choice" title="Supprimer le choix" color="danger">
              <FiDelete />
            </Button>
            <Input type="text" value={choice2} onChange={handleChange} name="choice2" id="choice2" placeholder="Écrivez le texte pour ce choix..." />
            <FormText>Offrez à votre lecteur une décision à prendre</FormText>
          </FormGroup>
          <FormGroup className="choices-fork">
            <FiCornerDownRight className="choices-fork-icon" />
            <Label for="destination2" className="choices-fork-icon-label">Chapitre de destination</Label>
            <Input type="select" name="destination2" id="destination2" onChange={handleChange}>
              <option>Choisir un chapitre d'arrivée</option>
              {chapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.recap}</option>)}
            </Input>
            <FormText>Cette décision amène au chapitre sélectionné</FormText>
          </FormGroup>
          <hr />
          <FormGroup className="choices">
            {/* Choice 3 */}
            <Label for="choice3" className="choices-label"><FiGitCommit className="choices-icon" /> Choix 3</Label>
            <Button className="save-choice" title="Sauver le choix" color="success" onClick={sendNewChoice(3)}><FiSave /></Button>
            <Button className="delete-choice" title="Supprimer le choix" color="danger">
              <FiDelete />
            </Button>
            <Input type="text" value={choice3} onChange={handleChange} name="choice3" id="choice3" placeholder="Écrivez le texte pour ce choix..." />
            <FormText>Offrez à votre lecteur une décision à prendre</FormText>
          </FormGroup>
          <FormGroup className="choices-fork">
            <FiCornerDownRight className="choices-fork-icon" />
            <Label for="destination3" className="choices-fork-icon-label">Chapitre de destination</Label>
            <Input type="select" name="destination3" id="destination3" onChange={handleChange}>
              <option>Choisir un chapitre d'arrivée</option>
              {chapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.recap}</option>)}
            </Input>
            <FormText>Cette décision amène au chapitre sélectionné</FormText>
          </FormGroup>
          <hr />
        </FormGroup>
      </div>
    </>
  );
};

Choix.propTypes = {
  changeValue: PropTypes.func.isRequired,
  choice1: PropTypes.string,
  choice2: PropTypes.string,
  choice3: PropTypes.string,
  chapters: PropTypes.array,
  sendChoice: PropTypes.func.isRequired,
};

Choix.defaultProps = {
  choice1: '',
  choice2: '',
  choice3: '',
  chapters: [],
};

// == Export
export default Choix;
