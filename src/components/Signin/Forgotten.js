// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

// == Import : local
import './signin_for.scss';

// == Composant
const Forgotten = ({ changeValue, changeEmail }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };
  return (
    <div className="signin-forgotten">
      <div className="signin-left-forgotten_image" />
      <form className="signin-forgotten-right">
        <h3 className="signin-forgotten-right-title-change text-center">Vous avez oublié votre mot de passe ?</h3>
        <div className="signin-forgotten-right-field">
          <input type="email" value={changeEmail} onChange={handleChange} placeholder="Email" name="changeEmail" className="signin-right-input" />
        </div>
        <input type="button" value="Changer le mot de passe" className="signin-forgotten-right-change" />
        <div className="text-center"><Link to="/signin" className="signin-forgotten-back"><MdArrowBack /> Retour à la connexion</Link></div>

      </form>
    </div>
  );
};

Forgotten.propTypes = {
  changeValue: PropTypes.func.isRequired,
  changeEmail: PropTypes.string.isRequired,
};

// == Export
export default Forgotten;
