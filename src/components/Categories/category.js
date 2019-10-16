/*
 * Import : npm
 */
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { FaChevronRight } from 'react-icons/fa';

/*
 * Import : local
 */
import './category.scss';

/*
 * Components
 */
const Category = () => (
  <div className="container-flippy">
    <Flippy
      flipOnHover={false} // default false
      flipOnClick // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{ marginTop: '1em' }}
      // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div }
    >
      <FrontSide style={{ padding: '0' }}>
        <div className="card">
          <img
            src="https://jeromeobiols.com/wordpress/wp-content/uploads/voie-lactee-montagne.jpg"
            alt=""
            className="card-image-category"
          />
          <h2 className="card-text-front">Categorie - <span className="card-text-front-author">auteur</span></h2>
        </div>
      </FrontSide>
      <BackSide style={{ padding: '0' }}>
        <div className="card">
          <img
            src="https://jeromeobiols.com/wordpress/wp-content/uploads/voie-lactee-montagne.jpg"
            alt=""
            className="card-image-category"
          />
          <h2 className="card-title">Synopsis</h2>
          <p className="card-text-back">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi inventore iusto tenetur, laudantium nesciunt optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptates, eaque impedit non, ad rerum consectetur id nam accusamus est, magnam mollitia. Quae nobis sed iste illo quis vitae eligendi?
          </p>
          <a href="#" className="card-link">C'est parti <FaChevronRight /></a>
        </div>
      </BackSide>
    </Flippy>
  </div>
);

/*
 * Export
 */
export default Category;
