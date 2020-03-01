// == Import : npm
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// == Import : local
import config from '../../../config';

// == Composant
const Change = ({
  changeValue,
  user_name,
  email,
  password,
  avatar,
  deleteProfile,
  editProfile,
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

  const editUserProfile = (event) => {
    event.preventDefault();
    editProfile();
  };

  const upload = (widget) => {
    widget.open();
  };

  const getUrl = (url) => {
    document.getElementById('avatar').type = 'text';
    document.getElementById('avatar').focus();
    document.getElementById('avatar').value = url;
    document.getElementById('avatar').blur();
    document.getElementById('avatar').type = 'hidden';
  };

  const widget = window.cloudinary.createUploadWidget({
    cloudName: config.cloudName,
    uploadPreset: config.uploadPreset }, (error, result) => { 
    if (!error && result && result.event === 'success') {
      const { url } = result.info;
      getUrl(url);
      toast.success('L\'image a bien été chargée');
    }
  });

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
          <Button id="upload_widget" className="cloudinary-button" color="info" onClick={() => upload(widget)}>Changer un avatar</Button>
          <input type="hidden" onBlur={handleChange} name="avatar" value={avatar} id="avatar" />
        </Form.Group>
        <button className="change-button-form" type="button" onClick={editUserProfile}>
          Modifier
        </button>
        <Button variant="danger" className="delete-button-form" type="button" onClick={handleShow}>
          Supprimer le compte
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Est-ce que vous voulez vraiment supprimer votre profil ?</Modal.Title>
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
  editProfile: PropTypes.func.isRequired,
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
