// Import : Npm
import React from 'react';

// Import : local
import './mentions.scss';

// Component

const Mentions = () => (
  <>
    <div className="container-fluid p-0">
      <div className="mentions-container-image">
        <img src="https://i.imgur.com/4vNRUsC.jpg" className="image-mentions" width="100%" alt="banniere mentions" />
        <h1 className="image-mentions-title">Mentions légales du site Gamebook</h1>
        <p className="image-mentions-descrip">nous espérons que vous trouverez la réponse à votre question.</p>
      </div>
      <div className="mentions-wrapper">
        <span className="mentions-wrapper-span">Propriété intellectuelle</span>
        <p className="mentions-wrapper-text">Toutes les données de : textes, photographies, illustrations, icônes, bases de données, etc… Sont la propriété exclusive de GameBook. Toute utilisation, fait l’objet d’une autorisation spécifique à demander auprès de GameBook.</p>
        <span className="mentions-wrapper-span">Confidentialité</span>
        <p className="mentions-wrapper-text">GameBook n’enregistre pas d’informations personnelles permettant l’identification, à l’exception des formulaires que l’utilisateur est libre de remplir. Ces informations ne seront pas utilisées sans votre accord, nous les utiliserons seulement pour vous adresser des courriers, des brochures, des devis ou vous contacter. « Les informations recueillies sur les sites bénéficient de la protection de la loi « Informatique et Libertés » n° 78-17 du 06 janvier 1978. Elles bénéficient d’un droit d’accès, de rectification, d’opposition à communication et de suppression sur simple demande à Monsieur GameBook via le formulaire de contact.
        GameBook pourra procéder à des analyses statistiques sans que celles-ci soient nominatives et pourra en informer des tiers (organismes d’évaluation de fréquentation) sous une forme résumée et non nominative.
        Ce site est la propriété de GameBook - FRANCE.
        </p>
        <span className="mentions-wrapper-span">Utilisation de cookies</span>
        <p className="mentions-wrapper-text">La gestion des commandes nécessite l’utilisation de cookies. Des informations non personnelles sont enregistrées par ce système de cookies (fichiers texte utilisés pour reconnaître un utilisateur et ainsi faciliter son utilisation du site). Ceux-ci n’ont aucune signification en dehors de leur utilisation sur le site http://www.gamebook.tech/ et http://gamebook.tech/.</p>
        <span className="mentions-wrapper-span">Liens hypertexte</span>
        <p className="mentions-wrapper-text">GameBook ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l’utilisation de ces sites incombent pleinement à l’utilisateur. Il se conformera à leurs conditions d’utilisation.</p>
        <span className="mentions-wrapper-span">Hébergement</span>
        <p className="mentions-wrapper-text">Amazon Web Services Amazon.com Legal Department 410 Terry Avenue North P.O. Box 81226 Seattle, WA 98108-1226 - USA http://aws.amazon.com</p>
      </div>
    </div>
  </>
);


// Export
export default Mentions;
