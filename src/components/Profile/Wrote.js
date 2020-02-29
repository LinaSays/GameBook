// == Import : npm
import React, { useState } from 'react';
import { CardDeck, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Wrote = ({
  id, title, image, deleteStory,
}) => {
  // state for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // delete story function
  const deleteOneStory = (storyId) => (event) => {
    event.preventDefault();
    deleteStory(storyId);
    document.location.href = '/profile/created';
  };

  return (
    <>
      <CardDeck className="card-story-profile-wrote">
        <Card className="menu-story">
          <Card.Img variant="top" className="menu-story-image" src={image} />
          <Card.Body className="menu-story-written">
            <Link to={`/story/${id}`} className="menu-story-title"> {title} </Link>
            <div className={`menu-story-buttons ${id}`}>
              <button type="button" className={`menu-story-delete ${id}`} onClick={handleShow}>Supprimer</button>
              <button type="button" className={`menu-story-modify ${id}`}>Modifier</button>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Est-ce que vous voulez vraiment supprimer "{title}" ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Non
          </Button>
          <Button variant="primary" onClick={deleteOneStory(id)}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


Wrote.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  deleteStory: PropTypes.func,
};

Wrote.defaultProps = {
  id: 0,
  title: '',
  image: '',
};

// == Export
export default Wrote;
