// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './signup.scss';

// == Composant
const Signup = ({
  changeValue,
  user_name,
  email,
  password,
  confirm,
  createUser,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  return (
    <div className="signup">
      <div className="testing1">
        <form className="signup-left" onSubmit={handleSubmit}>
          <h2 className="signup-left-title">GAMEBook</h2>
          <h3 className="signup-left-subtitle">Commencer l'aventure</h3>
          <div className="signup-left-field">
            <input type="text" placeholder="Nom Prénom" value={user_name} onChange={handleChange} className="signup-left-input" name="user_name" required />
          </div>
          <div className="signup-left-field">
            <input type="email" placeholder="Email" value={email} onChange={handleChange} className="signup-left-input" name="email" required />
          </div>
          <div className="signup-left-field">
            <input type="password" placeholder="Mot de passe" value={password} onChange={handleChange} className="signup-left-input" name="password" required />
          </div>
          <div className="signup-left-field">
            <input type="password" placeholder="Confirmer mot de passe" value={confirm} onChange={handleChange} className="signup-left-input" name="confirm" required />
          </div>

          <div className="signup-left-field d-flex ">
            <span>Vous êtes ici pour :</span>
            <div className="signup-left-radio mx-3">
              <label htmlFor="read"><input type="radio" id="read" name="choice" value="1" onChange={handleChange} /> Lire</label>
            </div>
            <div className="signup-left-radio">
              <label htmlFor="write"><input type="radio" id="write" name="choice" value="2" onChange={handleChange} /> Ecrire</label>
            </div>
          </div>

          <div>
            <input type="checkbox" name="condition" id="condition" required /> <a className="signup-left-label" href="">Accepter les conditions d'utilisation</a>
          </div>
          <button type="submit" className="signup-left-button">S'inscrire</button>
          <div className="signup-right">
            <span className="signin-left-subscribe">Déjà un compte ?</span> <Link to="/signin" className="signup-right-link">Se connecter</Link>
          </div>
        </form>
        <div className="signup-right-desktop">
          <h2 className="signup-right-title text-white">GAMEBook</h2>
          <img
            className="signup-right-img"
            alt=""
            src="https://images.unsplash.com/photo-1553077858-ece05605b27e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80"
          />
          <Link to="/signin" className="signup-right-link">Se connecter</Link>
        </div>

      </div>
    </div>
  );
};


Signup.propTypes = {
  changeValue: PropTypes.func.isRequired,
  user_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  createUser: PropTypes.func.isRequired,
};

// == Export
export default Signup;
