// == Import : npm
import React from 'react';
import { Image } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

// == Import : local
import './team.scss';

// == Composant
const Team = () => (
  <div className="body">
    <h1 className="body-title">Team Cypok</h1>
    <div className="team">
      <div className="team-info">
        <Image src="http://www.coldeporte.fr/upload/histoires/big/La-marmotte--774.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Christian</h2>
        <ul className="team-info-description">
          <li>Product Owner</li>
          <li>Référent Technique Node.JS</li>
        </ul>
        <a href="https://www.linkedin.com/in/christian-bourgeois-94a9115" className="team-info-link"><FaLinkedin /> in/christian-bourgeois-94a9115</a>
      </div>

      <div className="team-info">
        <Image src="https://i.ytimg.com/vi/Gn528HiYToM/maxresdefault.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Baptiste</h2>
        <ul className="team-info-description">
          <li>Scrum master</li>
          <li>Chief Happiness Officer</li>
        </ul>
        <a href="https://www.linkedin.com/in/baptiste-parville" className="team-info-link"><FaLinkedin /> in/baptiste-parville</a>
      </div>

      <div className="team-info">
        <Image src="http://www.littlegoguette.com/wp-content/uploads/2014/11/La-Marmotte.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Ismaël</h2>
        <ul className="team-info-description">
          <li>Lead dev Front</li>
          <li>Référent Technique Framework CSS</li>
        </ul>
        <a href="https://www.linkedin.com/in/ismaël-mmadi-13b870195" className="team-info-link"><FaLinkedin /> in/ismaël-mmadi-13b870195</a>
      </div>

      <div className="team-info">
        <Image src="http://lunivers-des-animaux.e-monsite.com/medias/album/marmotte-des-alpes1.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Alina</h2>
        <ul className="team-info-description">
          <li>Lead dev Back</li>
          <li>Git Master</li>
        </ul>
        <a href="https://www.linkedin.com/in/alina-moskvina" className="team-info-link"><FaLinkedin /> in/alina-moskvina</a>
      </div>
    </div>
  </div>
);


// == Export
export default Team;
