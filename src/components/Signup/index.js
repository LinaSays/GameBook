// == Import : npm
import React, { useState } from 'react';
import { Alert } from 'reactstrap';
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

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  return (
    <div className="signup">
      <form className="signup-left" onSubmit={handleSubmit}>
        <Alert color="danger" isOpen={visible} toggle={onDismiss}>
        Votre mot de passe ne correspond pas
        </Alert>
        <h3 className="signup-left-title">Commencer l'aventure</h3>
        <div className="signup-left-field">
          <i className="fas fa-user signup-left-field-img" />
          <input type="text" placeholder="Nom Prénom" value={user_name} onChange={handleChange} className="signup-left-input" name="user_name" />
        </div>

        <div className="signup-left-field">
          <i className="fas fa-envelope signup-left-field-img" />
          <input type="email" placeholder="Email" value={email} onChange={handleChange} className="signup-left-input" name="email" />
        </div>

        <div className="signup-left-field">
          <i className="fas fa-unlock-alt signup-left-field-img" />
          <input type="password" placeholder="Mot de passe" value={password} onChange={handleChange} className="signup-left-input" name="password" />
        </div>

        <div className="signup-left-field">
          <i className="fas fa-unlock-alt signup-left-field-img" />
          <input type="password" placeholder="Confirmer mot de passe" value={confirm} onChange={handleChange} className="signup-left-input" name="confirm" />
        </div>
        {/* <div>
          <div>Vous êtes ici pour :</div>
          <div className="signup-left-radio">
            <input type="radio" id="read" name="choice" value="1" />
            <label htmlFor="1">Lire</label>
          </div>
          <div className="signup-left-radio">
            <input type="radio" id="write" name="choice" value="2" />
            <label htmlFor="2">Ecrire</label>
          </div>
        </div> */}
        <div>
          <input type="checkbox" name="condition" id="condition" required />
          <a className="signup-left-label" href="">Accepter les conditions d'utilisation</a>
        </div>
        <button type="submit" className="signup-left-button">S'inscrire</button>
      </form>
      <div className="signup-right">
        <Link to="/signin" className="signup-right-link">J'ai déjà un compte</Link>
      </div>
    </div>
  );
}


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
