// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './signup.scss';

// == Composant
const Signup = () => (
  <div className="signup">
    <form className="signup-left">
      <h3 className="signup-left-title">Commencer l'aventure</h3>
      <div className="signup-left-field">
        <i className="fas fa-user signup-left-field-img" />
        <input type="text" placeholder="Nom Prénom" className="signup-left-input" />
      </div>

      <div className="signup-left-field">
        <i className="fas fa-envelope signup-left-field-img" />
        <input type="email" placeholder="Email" className="signup-left-input" />
      </div>

      <div className="signup-left-field">
        <i className="fas fa-unlock-alt signup-left-field-img" />
        <input type="password" placeholder="Mot de passe" className="signup-left-input" />
      </div>

      <div className="signup-left-field">
        <i className="fas fa-unlock-alt signup-left-field-img" />
        <input type="password" placeholder="Confirmer mot de passe" className="signup-left-input" />
      </div>
      <div>
        <div>Vous êtes ici pour :</div>
        <div className="signup-left-radio">
          <input type="radio" id="read" name="choice" value="read" />
          <label for="read">Lire</label>
        </div>
        <div className="signup-left-radio">
          <input type="radio" id="write" name="choice" value="write" />
          <label for="write">Ecrire</label>
        </div>
      </div>
      <div>
        <input type="checkbox" name="condition" id="condition" />
        <a className="signup-left-label" href="">Accepter les conditions d'utilisation</a>
      </div>
      <input type="button" value="S'inscrire" className="signup-left-button" />
    </form>
    <div className="signup-right">
      <Link to="/signin" className="signup-right-link">J'ai déjà un compte</Link>
    </div>
  </div>
);


// == Export
export default Signup;
