/*
 * Import : npm
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


/*
 * Import : local
 */
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

  render() {
    const { storylist } = this.props;
    return (
      <div className="categories">
        <div className="categories-header">
          {storylist.length > 0
          && (
            <>
              <img
                src={storylist[0].catpic}
                alt="Bannière"
                className="categories-header-image"
                width="100%"
              />
              <div className="categories-header-content">
                <h1 className="categories-header-title m-0">{storylist[0].category}.</h1>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="cards-group">
            <Row className="test1">
              {storylist.map((list) => (
                <>
                  <Col className="test2" key={list.description}>
                    <Category {...list} />
                  </Col>
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
export default withRouter(Categories);
