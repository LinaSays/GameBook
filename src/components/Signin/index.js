// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './signin.scss';
import logo from '../../../public/images/GameBook_blanc_200x200.png';

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
      <div className="testing">
        <div className="signin-left-desktop">
          <img src={logo} alt="" width="80" height="80" className="signup-right-logo" />
          <h2 className="signin-left-title text-white">GameBook</h2>
          <img
            className="signin-left-img"
            alt=""
            src="https://images.unsplash.com/photo-1427104227401-94b390b378b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          />
          <Link to="/signup" className="signin-right-link">Créer un compte</Link>
        </div>
        <form className="signin-right" onSubmit={handleSubmit}>
          <h2 className="signin-right-title">GameBook</h2>
          <h3 className="signin-right-subtitle">Accéder à votre compte</h3>
          <div className="signin-right-field">
            {/* <i className="fas fa-envelope signin-right-field-img" /> */}
            <input type="email" placeholder="Email" className="signin-right-input" value={email} onChange={handleChange} name="email" />
          </div>
          <div className="signin-right-field">
            {/* <i className="fas fa-unlock-alt signin-right-field-img" /> */}
            <input type="password" placeholder="Mot de passe" className="signin-right-input" value={password} onChange={handleChange} name="password" />
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <label className="signin-right-label m-0" htmlFor="connection"><input type="checkbox" name="connection" id="connection" onChange={handleChange} value="remember" /> Remember me</label>
            <Link to="/forgotten" className="signin-right-forgot">Mot de passe oublié ?</Link>
          </div>
          <button type="submit" className="signin-right-button">Se connecter</button>
          <div className="signin-left">
            <span className="signin-left-subscribe">Pas de compte ?</span> <Link to="/signup" className="signin-left-link">Créer un compte</Link>
          </div>
        </form>
      </div>
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
