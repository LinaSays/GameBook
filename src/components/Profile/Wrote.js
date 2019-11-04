// == Import : npm
import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Wrote = ({ id, title, image, deleteStory }) => {
  const deleteOneStory = (storyId) => (event) => {
    console.log(storyId);
    event.preventDefault();
    deleteStory(storyId);
    document.location.href = '/profile/created';
  };

  return (
    // ajouter un tri des livres publiés/non publiés
    <CardDeck className="card-story-profile-wrote">
      <Card className="menu-story">
        <Card.Img variant="top" className="menu-story-image" src={image} />
        <Card.Body className="menu-story-written">
          <h2 className="menu-story-title">{title}</h2>
          <div className={`menu-story-buttons ${id}`}>
            <button type="button" className={`menu-story-delete ${id}`} onClick={deleteOneStory(id)}>Supprimer</button>
            <button type="button" className={`menu-story-modify ${id}`}>Modifier</button>
          </div>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}


Wrote.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

Wrote.defaultProps = {
  id: 0,
  title: '',
  image: '',
};

// == Export
export default Wrote;
