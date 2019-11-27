// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './pagenotfound.scss';

// == Composant
const PageNotFound = () => (
  <div className="not-found-box">
    <div className="not-found">
      <h2 className="not-found-title">404</h2>
      <p className="not-found-text">Oups! La page que vous demandez n'existe pas.</p>
      <div className="not-found-button-nav"><NavLink to="/"><button type="button" className="not-found-button">Retourner à l'accueil</button></NavLink></div>
    </div>
  </div>

);

// == Export
export default PageNotFound;

// <img className="not-found-image" src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" alt="page404" />
