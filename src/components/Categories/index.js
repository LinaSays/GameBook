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
class Categories extends React.Component {
  componentDidMount() {
    const { getCategoryStories } = this.props;
    getCategoryStories();
  }

  render() {
    const { storylist } = this.props;
    console.log(this.props);
    return (
      <div className="categories">
        <img
          src="https://adwebdesign.fr/wp-content/grand-media/image/banniere01.2.gif"
          alt="Bannière"
          className="image"
          width="100%"
        />
        <h1 className="categories-title">{}</h1>
        <div className="cards-group">
          <Row className="test1">
            {storylist.map((list) => (
              <>
                <Col className="test2" key={list.description}><Category {...list} /></Col>
              </>
            ))}
          </Row>
        </div>
      </div>
    );
  }

}


/*
 * Export
 */
export default Categories;
