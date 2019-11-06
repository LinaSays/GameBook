/*
 * Import : npm
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


/*
 * Import : local
 */

import switchCat from 'src/functions/switchCat';
import Category from './category';
import './categories.scss';


/*
 * Components
 */
class Categories extends React.Component {

  componentDidMount() {
    const { getCategoryStories } = this.props;
    getCategoryStories();


  }

  componentDidUpdate() {
    const { getCategoryStories } = this.props;
    getCategoryStories();

  }

  

  render() {
    const { storylist, location } = this.props;


    // console.log(this.props.location);
    console.log(storylist);
    // console.log(this.props.category);
    return (
      <div className="categories">
        <div className="categories-header">
          {
             switchCat(location.pathname)
          }
        </div>

        {/* <h1 className="categories-title">{this.props.category}</h1> */}
        <div>
          <div className="cards-group">
            <Row className="test1">
            {storylist.map((list) => (
              <>
                <Col className="test2" key={list.title}><Category {...list} /></Col>
              </>
            ))}
          </Row>
          </div>
        </div>
      </div>
    );
  }

}

Categories.propTypes = {
  getCategoryStories: PropTypes.func.isRequired,
  storylist: PropTypes.array.isRequired,
};

/*
 * Export
 */
export default Categories;
