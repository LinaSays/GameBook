// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './signin.scss';

// == Composant
const Signin = () => (
  <div className="signin">
    <div className="signin-left">
      <Link to="/signup" className="signin-left-link">Créer un compte</Link>
    </div>
    <form className="signin-right">
      <h3 className="signin-right-title">Accéder à mon compte</h3>

      <div className="signin-right-field">
        <i className="fas fa-envelope signin-right-field-img" />
        <input type="email" placeholder="Email" className="signin-right-input" name="email" />
      </div>

      <div className="signin-right-field">
        <i className="fas fa-unlock-alt signin-right-field-img" />
        <input type="password" placeholder="Mot de passe" className="signin-right-input" name="password" />
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


// == Export
export default Signin;
