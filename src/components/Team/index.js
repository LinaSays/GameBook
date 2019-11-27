// == Import : npm
import React from 'react';
import { Image } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

// == Import : local
// import './team.scss';
import './team.scss';

// == Composant
const Team = () => (
  <div className="container-fluid p-0">
    <div className="image-team">
      <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="image-team-contact" width="100%" alt="banniere contact" />
      <h1 className="image-team-title">Team</h1>
      <p className="image-team-descrip">L'équipe de rêve</p>
    </div>

    <div className="team container">
      <div className="team-info">
        <Image src="http://www.coldeporte.fr/upload/histoires/big/La-marmotte--774.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Christian</h2>
        <ul className="team-info-description">
          <li className="team-info-description-li text-center">Product Owner</li>
          <li className="team-info-description-li text-center">Référent Technique Node.JS</li>
        </ul>
        <a href="https://www.linkedin.com/in/christianbourgeoisdev" className="team-info-link text-center d-block"><FaLinkedin /> in/christianbourgeoisdev</a>
      </div>

      <div className="team-info ">
        <Image src="https://i.ytimg.com/vi/Gn528HiYToM/maxresdefault.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Baptiste</h2>
        <ul className="team-info-description">
          <li className="team-info-description-li text-center">Scrum master</li>
          <li className="team-info-description-li text-center">Chief Happiness Officer</li>
        </ul>
        <a href="https://www.linkedin.com/in/baptiste-parville" className="team-info-link d-block text-center"><FaLinkedin /> in/baptiste-parville</a>
      </div>

      <div className="team-info ">
        <Image src="http://www.littlegoguette.com/wp-content/uploads/2014/11/La-Marmotte.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Ismaël</h2>
        <ul className="team-info-description">
          <li className="team-info-description-li text-center">Lead dev Front</li>
          <li className="team-info-description-li text-center">Référent Technique Framework CSS</li>
        </ul>
        <a href="https://www.linkedin.com/in/ismaël-mmadi-dev" className="team-info-link d-block text-center"><FaLinkedin /> in/ismaël-mmadi-dev</a>
      </div>

      <div className="team-info ">
        <Image src="http://lunivers-des-animaux.e-monsite.com/medias/album/marmotte-des-alpes1.jpg" roundedCircle className="team-image" />
        <h2 className="team-info-title">Alina</h2>
        <ul className="team-info-description">
          <li className="team-info-description-li text-center">Lead dev Back</li>
          <li className="team-info-description-li text-center">Git Master</li>
        </ul>
        <a href="https://www.linkedin.com/in/alina-moskvina" className="team-info-link d-block text-center"><FaLinkedin /> in/alina-moskvina</a>
      </div>
    </div>
  </div>

);


// == Export
export default Team;
