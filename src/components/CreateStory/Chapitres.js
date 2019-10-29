// == Import : npm
import React from 'react';
import {
  Form, FormGroup, Label,
  Input, FormText, CustomInput,
  Pagination, PaginationItem, PaginationLink,
}
  from 'reactstrap';
import { CirclePicker } from 'react-color';
import {
  FiTrash,
  FiEdit3,
}
  from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local
import Choix from './Choix';

// == Composant
const Chapitres = ({ changeValue, recap, text, title, choice, choice2 }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  return (
    <>
      {/* Contenu du Tabs 2 - les chapitres */}
      <FormGroup>
        {/* Pagination des chapitres */}
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
        <h5>Maintenant il va falloir rédiger un chapitre
          et les choix qui en découlent.
        </h5>
      </FormGroup>
      <FormGroup>
        {/* Résumé du chapitre */}
        <Label for="chapterSummary">Résumé de chapitre</Label>
        <Input type="text" name="recap" value={recap} onChange={handleChange} id="chapterSummary" placeholder="Résumez rapidement ce chapitre" />
        <FormText>Vous aide à identifier rapidement la trame de ce chapitre</FormText>
      </FormGroup>
      <div className="columns">
        <div className="writer-column">
          <FormGroup>
            {/* Texte du chapitre */}
            <Label for="chapterText">Texte du chapitre</Label>
            <Input type="textarea" value={text} onChange={handleChange} rows="26" name="text" id="chapterText" />
          </FormGroup>
        </div>
      </div>
      <Choix changeValue={changeValue} title={title} recap={recap} text={text} />
    </>
  );
};

Chapitres.propTypes = {
  changeValue: PropTypes.func.isRequired,
  recap: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  choice: PropTypes.string,
  choice2: PropTypes.string,
};

Chapitres.defaultProps = {
  choice: '',
  choice2: '',
};

// == Export
export default Chapitres;
