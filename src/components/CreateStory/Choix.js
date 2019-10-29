// == Import : npm
import React from 'react';
import {
  Button, FormGroup, Label, Input, FormText,
  ListGroup, ListGroupItem,
}
  from 'reactstrap';
import {
  FiCornerDownRight,
  FiGitCommit,
  FiDelete,
  FiPlus,
  FiSave,
}
  from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Choix = ({ changeValue, choice, choice2 }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  return (
    <>
      <div className="choices-column">
        {/* Préparez les choix disponibles pour le lecteur */}
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
            {/* Choix 1 */}
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
            {/* Choix 2 */}
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
    </>
  );
};

Choix.propTypes = {
  changeValue: PropTypes.func.isRequired,
  choice: PropTypes.string,
  choice2: PropTypes.string,
};

Choix.defaultProps = {
  choice: '',
  choice2: '',
};

// == Export
export default Choix;
