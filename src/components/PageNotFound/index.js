// == Import : npm
import React from 'react';

// == Import : local
import './pagenotfound.scss';

// == Composant
const PageNotFound = () => (
  <div className="not-found">
    <img src="https://image.freepik.com/vecteurs-libre/animal-marmotte-dessin-anime_11460-7906.jpg" alt="cypok404" />
    <div>404 Page Not Found
      <div className="not-found-text">et la marmotte elle met le chocolat dans le papier d’alu</div>
    </div>
  </div>
);

// == Export
export default PageNotFound;
