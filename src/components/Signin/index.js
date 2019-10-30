// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './signin.scss';

// == Composant
const Signin = ({
  changeValue, email, password, submitUser,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitUser();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };
  return (

    <div className="signin">
      {/* <div className="signin-left">
        <Link to="/signup" className="signin-left-link">Créer un compte</Link>
      </div> */}
      <form className="signin-right" onSubmit={handleSubmit}>
        <h2 className="signin-right-title">GameBOok</h2>
        <h3 className="signin-right-subtitle">Login into account</h3>

        <div className="signin-right-field">
          {/* <i className="fas fa-envelope signin-right-field-img" /> */}
          <input type="email" placeholder="Email" className="signin-right-input" value={email} onChange={handleChange} name="email" />
        </div>

        <div className="signin-right-field">
          {/* <i className="fas fa-unlock-alt signin-right-field-img" /> */}
          <input type="password" placeholder="Mot de passe" className="signin-right-input" value={password} onChange={handleChange} name="password" />
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <label className="signin-right-label m-0" htmlFor="connection"><input type="checkbox" name="connection" id="connection" /> Remember me</label>
          <Link to="/forgotten" className="signin-right-forgot">Mot de passe oublié ?</Link>
        </div>
        <button type="submit" className="signin-right-button">Se connecter</button>
        <div className="signin-left">
          <span className="signin-left-subscribe">Pas de compte ?</span> <Link to="/signup" className="signin-left-link">Créer un compte</Link>
        </div>

      </form>
    </div>

  );
};

Signin.propTypes = {
  changeValue: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitUser: PropTypes.func.isRequired,
};


// == Export
export default Signin;
