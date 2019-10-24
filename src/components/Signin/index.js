// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './signin.scss';

// == Composant
const Signin = ({ changeValue, email, password }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };
  return(
    <div className="signin">
      <div className="signin-left">
        <Link to="/signup" className="signin-left-link">Créer un compte</Link>
      </div>
      <form className="signin-right">
        <h3 className="signin-right-title">Accéder à mon compte</h3>

        <div className="signin-right-field">
          <i className="fas fa-envelope signin-right-field-img" />
          <input type="email" placeholder="Email" className="signin-right-input" value={email} onChange={handleChange} name="email" />
        </div>

        <div className="signin-right-field">
          <i className="fas fa-unlock-alt signin-right-field-img" />
          <input type="password" placeholder="Mot de passe" className="signin-right-input" value={password} onChange={handleChange} name="password" />
        </div>

        <div>
          <input type="checkbox" name="connection" id="connection" />
          <label className="signin-right-label" htmlFor="connection">Remember me</label>
        </div>
        <input type="button" value="Se connecter" className="signin-right-button" />
        <Link to="/forgotten" className="signin-right-forgot">Mot de passe oublié ?</Link>
      </form>
    </div>
  );
}

Signin.propTypes = {
  changeValue: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};


// == Export
export default Signin;
