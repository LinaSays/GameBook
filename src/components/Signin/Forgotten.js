// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './signin.scss';

// == Composant
const Forgotten = ({ changeValue, changeEmail }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };
  return(
    <div className="signin">
      <div className="signin-left-forgotten_image" />
      <form className="signin-right">
        <h3 className="signin-right-title">Vous avez oublié votre mot de passe ?</h3>
        <div className="signin-right-field">
          <input type="email" value={changeEmail} onChange={handleChange} placeholder="Email" name="changeEmail" className="signin-right-input" />
        </div>
        <input type="button" value="Changer le mot de passe" className="signin-right-change" />
      </form>
    </div>
  );
}

Forgotten.propTypes = {
  changeValue: PropTypes.func.isRequired,
  changeEmail: PropTypes.string.isRequired,

};

// == Export
export default Forgotten;
