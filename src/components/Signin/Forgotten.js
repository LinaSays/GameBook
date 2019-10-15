// == Import : npm
import React from 'react';

// == Import : local
import './signin.scss';

// == Composant
const Forgotten = () => (
  <div className="signin">
    <div className="signin-left-forgotten_image" />
    <form className="signin-right">
      <h3 className="signin-right-title">Vous avez oublié votre mot de passe ?</h3>
      <div className="signin-right-field">
        <i className="fas fa-envelope signin-right-field-img" />
        <input type="email" placeholder="Email" className="signin-right-input" />
      </div>
      <input type="button" value="Changer le mot de passe" className="signin-right-change" />
    </form>
  </div>
);


// == Export
export default Forgotten;
