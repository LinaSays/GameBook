/*
 * Import : npm
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

/*
 * Import : local
 */
import Category from './category';
import './categories.scss';

/*
 * Components
 */
const Categories = () => (
  <div className="categories">
    <img
      src="https://adwebdesign.fr/wp-content/grand-media/image/banniere01.2.gif"
      alt="Bannière"
      className="image"
      width="100%"
    />
    <h1 className="categories-title">Categorie</h1>
    <div className="cards-group">
      <Row>
        <Col><Category /></Col>
        <Col><Category /></Col>
        <Col><Category /></Col>
        <Col><Category /></Col>
        <Col><Category /></Col>
        <Col><Category /></Col>
      </Row>
    </div>
  </div>
);

/*
 * Export
 */
export default Categories;
