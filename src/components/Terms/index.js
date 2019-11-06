// Import : Npm
import React from 'react';

// Import : local
import './terms.scss';

// Component

const Terms = () => (
  <>
    <div className="container-fluid p-0">
      <div className="mentions-container-image">
        <img src="https://i.imgur.com/I0hs4W4.jpg" className="image-mentions" width="100%" alt="banniere mentions" />
        <h1 className="image-mentions-title">CONDITIONS GÉNÉRALES DU SITE GAMEBOOK</h1>
        <p className="image-mentions-descrip">pour terminer votre inscription, merci de lire les conditions générales ci-dessous.</p>
      </div>
      <div className="mentions-wrapper">
        <p className="mentions-wrapper-text-intro">GameBook se résume à reprendre la mécanique des “Livres dont vous êtes le héros” (LDVELH) pour l'adapter à l’univers Web grâce à React, tout en ajoutant une dimension plus ouverte et donc polyvalente à notre version.
        L’utilisateur se retrouve face à une interface qui propose plusieurs histoires. Une fois, immergé dans une histoire, celle-ci est découpée en plusieurs chapitres et où chaque chapitre s'ouvre à plusieurs choix. Chaque décision a une conséquence sur le déroulé de l'histoire et bien entendu chaque décision offre l'opportunité de faire de nouveaux choix et ainsi de suite. Ce dédale de choix permet de vivre une aventure originale et personnalisée selon les choix faits par l’utilisateur.
        </p>
        <span className="mentions-wrapper-span">Vos données personnelles</span>
        <p className="mentions-wrapper-text">Vous serez uniquement informé de ce que GameBook propose en terme de nouveautés si vous vous inscrivez pour votre newsletter (en bas de notre page accueil). Nous ne divulguerons jamais votre adresse mail, ni les données de votre profil que vous nous avez confié. Cela fait partie de notre charte de confidentialité et d'éthique. À aucun moment vos données ne seront revendues, ni données à un tiers.
        Nous stockerons via les cookies vos préférences en terme d'affichage afin de continuer de travailler sur notre interface pour vous proposer la meilleure expérience de navigation possible que vous soyez sur ordinateur ou mobile.
        </p>
        <p className="mentions-wrapper-text">Ce site utilise des cookies – de petits fichiers texte qui sont placés sur votre machine pour aider le site à fournir une meilleure expérience utilisateur. En général, les cookies sont utilisés pour conserver les préférences de l’utilisateur, stocker des informations pour des choses comme les paniers d’achat et fournir des données de suivi anonymisées à des applications tierces comme Google Analytics. En règle générale, les cookies rendront votre expérience de navigation meilleure. Toutefois, vous pouvez préférer désactiver les cookies sur ce site et sur d’autres. Le moyen le plus efficace consiste à désactiver les cookies dans votre navigateur. Nous vous suggérons de consulter la section Aide de votre navigateur ou de consulter le site Web À propos des cookies (en anglais) qui propose des conseils pour tous les navigateurs modernes.
        Vous pouvez également consulter cette page pour plus d’information.
        </p>
        <span className="mentions-wrapper-span">Cookies</span>
        <p className="mentions-wrapper-text">Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.
        Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.
        En modifiant ou en publiant un article, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’identifiant de l’article que vous venez de modifier. Il expire au bout d’un jour.
        </p>
        <span className="mentions-wrapper-span">Médias</span>
        <p className="mentions-wrapper-text">Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et extraire des données de localisation depuis ces images.
        </p>
        <span className="mentions-wrapper-span">Contenu embarqué depuis d’autres sites</span>
        <p className="mentions-wrapper-text">Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.
        Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.
        </p>
        <span className="mentions-wrapper-span">Durée de stockage de vos données personnelles</span>
        <p className="mentions-wrapper-text">Pour les utilisateurs et utilisatrices qui s’enregistrent sur notre site, nous stockons également les données personnelles indiquées dans leur profil. Tous les utilisateurs et utilisatrices peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur nom d’utilisateur·ice). Les gestionnaires du site peuvent aussi voir et modifier ces informations.
        </p>
        <span className="mentions-wrapper-span">Les droits que vous avez sur vos données</span>
        <p className="mentions-wrapper-text">Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.
        </p>
        <span className="mentions-wrapper-span">Pour plus d'informations</span>
        <p className="mentions-wrapper-text">Si vous avez des questions, merci de consulter notre F.A.Q. ou alors de nous contacter par e-mail via notre formulaire de contact.
        </p>
      </div>
    </div>
  </>
);


/*
 * Export
 */
export default Terms;
