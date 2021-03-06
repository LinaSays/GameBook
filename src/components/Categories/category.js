/*
 * Import : npm
 */
import React, { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { FaPlayCircle } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Button, Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

/*
 * Import : local
 */
import './category.scss';

/*
 * Components
 */
const Category = ({ id, title, image, author, description }) => {
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
              {/* <h2 className="card-title-flippy">Description</h2> */}
              <p className="card-text-back">{description}</p>
              <Link to={`/story/${id}`} className="card-link"> Lecture <FaPlayCircle /></Link>
            </div>
          </BackSide>
        </Flippy>
      </div>

      <div className="mobile">
        <>
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
              <Link to={`/story/${id}`} className="mobile-card-link">Lecture <FaPlayCircle /></Link>
            </div>
          </Collapse>
        </>
      </div>
    </div>
  );
};


Category.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

/*
 * Export
 */

export default Category;
