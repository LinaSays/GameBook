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
      <input type="email" placeholder="Email" className="signin-right-input" />
      <input type="password" placeholder="Mot de passe" className="signin-right-input" />
      <div>
        <input type="checkbox" name="connection" id="connection" />
        <label className="signin-right-label" for="connection">Remember me</label>
      </div>
      <input type="button" value="Se connecter" className="signin-right-button" />
      <a href="" className="signin-right-forgot">Mot de passe oublié ?</a>
    </form>
  </div>
);


// == Export
export default Signin;
