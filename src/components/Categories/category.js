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
const Category = ({ title, image, author, description }) => {
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
                src={image}
                alt=""
                className="card-image-category"
                style={{ backgroundColor: '#000' }}
              />
              <h2 className="card-text-front">{title}</h2>
              <h3 className="card-text-front-author">{author}</h3>
              <div className="card-icon-return">Synopsis <GiReturnArrow /></div>
            </div>
          </FrontSide>
          <BackSide style={{ padding: '0' }}>
            <div className="card">
              <img
                src={image}
                alt=""
                className="card-image-category"
              />
              <h2 className="card-title-flippy">Description</h2>
              <p className="card-text-back">{description}</p>
              <a href="#" className="card-link"> Lecture <FaPlayCircle /></a>
            </div>
          </BackSide>
        </Flippy>
      </div>

      <div className="mobile">
        <container>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="button-focus"
            variant=""
            style={{ padding: '0', backgroundColor: 'none', border: 'none' }}
            
          >
            <img
              src={image}
              alt=""
              className="mobile-card-image-category"
            />
            <div className="mobile-icon-return"><IoMdArrowDropdownCircle /></div>
            <h2 className="mobile-card-text-front">{title}</h2>
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text" className="mobile-card-text">
              <h2 className="mobile-card-title">description</h2>
              {description} <br />
              <span className="mobile-card-text-front-author">{author}</span>
              <a href="#" className="mobile-card-link">Lecture <FaPlayCircle /></a>
            </div>
          </Collapse>
        </container>
      </div>
    </div>
  );
};

/*
 * Export
 */
export default Category;
