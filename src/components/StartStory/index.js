// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
import {
  MdExitToApp, MdHome, MdDone, MdPerson,
} from 'react-icons/md';
import Button from 'react-bootstrap/Button';

// == Import : local
import './startstory.scss';

// == Composant
const StartStory = () => (
  <div className="container-story">
    <div className="story">
      <div className="story-account">
        <Image
          src="https://st2.depositphotos.com/1007566/11569/v/950/depositphotos_115690782-stock-illustration-young-and-elegant-woman-avatar.jpg"
          className="story-account-img"
          roundedCircle
        />
        <div className="story-account-info">
          <p className="story-account-name">Nom / Pseudo</p>
          <a className="text-white" href="">Mon profil</a>
          <div className="story-account-nav">
            <Button className="d-flex justify-content-center align-items-center" variant="light mt-1"><MdDone className="mr-1" /> Sauvegarder</Button>
            <Button className="d-flex justify-content-center align-items-center" variant="light mt-1"><MdExitToApp className="mr-1" /> Sortir</Button>
            <Button className="d-flex justify-content-center align-items-center" variant="light mt-1"><MdHome className="mr-1" /> Retour à l'accueil</Button>
          </div>
        </div>
      </div>
      <div className="story-page">
        <div className="story-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facilis libero voluptas tempora tempore? Animi rerum illum quia optio mollitia sit reprehenderit. Vero doloribus placeat odit corporis rerum tempora? Quas earum labore voluptatum corrupti nemo ullam soluta dolorem? Recusandae odio autem sit delectus nobis eius assumenda aut dolorum sequi repellat?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus maiores incidunt veniam vitae, inventore, soluta obcaecati fugit, expedita at repudiandae quisquam! Perspiciatis pariatur ipsa veniam quis sed, ut facilis dolor laborum. Sed quibusdam, animi cumque debitis laudantium consequuntur deleniti.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima odio quod porro maiores maxime asperiores neque distinctio? Quam dolore rem nihil aliquam dolorem sapiente minus incidunt corrupti explicabo architecto error ipsum pariatur, ratione labore, eveniet laboriosam! Expedita ullam dolore excepturi, dolorum eius architecto placeat ex voluptatum? Ea, illum voluptatem?</p>
        </div>
        <div className="story-choice">
          <div className="story-choice-link">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <div className="story-choice-link">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, aliquam?</div>
          <div className="story-choice-link">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repudiandae quia delectus ad saepe.</div>
        </div>
        <div className="story-account-nav-mobile mt-4">
          <Button className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdPerson className="mr-1" />Mon profil</Button>
          <Button className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdDone className="mr-1" /> Sauvegarder</Button>
          <Button className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdExitToApp className="mr-1" /> Sortir</Button>
          <Button className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdHome className="mr-1" /> Retour à l'accueil</Button>
        </div>
      </div>
    </div>


  </div>

);


// == Export
export default StartStory;
