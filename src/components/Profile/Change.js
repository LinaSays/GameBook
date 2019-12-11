// == Import : npm
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Change = ({
  changeValue,
  user_name,
  email,
  password,
  avatar,
  deleteProfile,
}) => {
  // state for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  const deleteUserProfile = (event) => {
    event.preventDefault();
    deleteProfile();
  };

  return (
    <>
      <Form className="form-change-info">
        <Form.Group controlId="formBasicName">
          <Form.Label className="form-change-info-label">Nom Prénom</Form.Label>
          <Form.Control type="text" placeholder="Nom Prénom" name="user_name" value={user_name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-change-info-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicAvatar">
          <Form.Label className="form-change-info-label">Avatar</Form.Label>
          <Form.Control className="form-change-info-file" type="file" placeholder="Avatar" name="avatar" value={avatar} onChange={handleChange} />
        </Form.Group>
        <button className="change-button-form" type="submit">
          Modifier
        </button>
        <Button variant="danger" className="delete-button-form" type="button" onClick={handleShow}>
          Supprimer le compte
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Est-ce que vous voulez vraiment supprimer votre profile ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Non
          </Button>
          <Button variant="primary" onClick={deleteUserProfile}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Change.propTypes = {
  changeValue: PropTypes.func,
  user_name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  avatar: PropTypes.string,
  deleteProfile: PropTypes.func.isRequired,
};

Change.defaultProps = {
  changeValue: () => {},
  user_name: '',
  email: '',
  password: '',
  avatar: '',
};

// == Export
export default Change;
