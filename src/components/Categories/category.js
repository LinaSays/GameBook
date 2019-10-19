/*
 * Import : npm
 */
import React, { useState } from 'react';
// import {
//   UncontrolledCollapse, Button, CardBody, Card,
// } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { FaChevronRight, FaPlayCircle } from 'react-icons/fa';
import { GiReturnArrow, GiPlainArrow } from 'react-icons/gi';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

import { Button, Collapse } from 'react-bootstrap';

/*
 * Import : local
 */
import './category.scss';

/*
 * Components
 */
const Category = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container-flippy">
      <div className="flippy">
        <Flippy
          flipOnHover={false} // default false
          flipOnClick // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ marginTop: '1em' }}
        >
          <FrontSide style={{ padding: '0' }}>
            <div className="card">
              <img
                src="https://jeromeobiols.com/wordpress/wp-content/uploads/voie-lactee-montagne.jpg"
                alt=""
                className="card-image-category"
              />
              <h2 className="card-text-front">Titre de l'histoire</h2>
              <h3 className="card-text-front-author">auteur</h3>
              <div className="card-icon-return">Commencer <GiReturnArrow /></div>
            </div>
          </FrontSide>
          <BackSide style={{ padding: '0' }}>
            <div className="card">
              <img
                src="https://jeromeobiols.com/wordpress/wp-content/uploads/voie-lactee-montagne.jpg"
                alt=""
                className="card-image-category"
              />
              <h2 className="card-title">description</h2>
              <p className="card-text-back">
              Ayant marre de garder vos chèvres, de mouler vos fromages et de passer vos soirées à la taverne du village à écouter les mêmes vieilles histoires tourner en boucle, vous décidez qu’il est temps pour vous de bousculer votre quotidien !
              </p>
              <a href="#" className="card-link"> <FaPlayCircle /></a>
            </div>
          </BackSide>
        </Flippy>
      </div>

      <div className="mobile">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="button-focus"
          variant=""
          style={{ padding: '0', backgroundColor: 'none', border: 'none' }}
        >
          <div className="mobile-icon-return"><IoMdArrowDropdownCircle /></div>
          <img
            src="https://jeromeobiols.com/wordpress/wp-content/uploads/voie-lactee-montagne.jpg"
            alt=""
            className="mobile-card-image-category"
          />
          <h2 className="mobile-card-text-front">Titre de l'histoire</h2>
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="mobile-card-text">
            <h2 className="mobile-card-title">description</h2>
          Ayant marre de garder vos chèvres, de mouler vos fromages et de passer vos soirées à la taverne du village à écouter les mêmes vieilles histoires tourner en boucle, vous décidez qu’il est temps pour vous de bousculer votre quotidien ! <br />
            <span className="mobile-card-text-front-author">auteur</span>
            <a href="#" className="mobile-card-link">Commencer <FaPlayCircle /></a>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

/*
 * Export
 */
export default Category;