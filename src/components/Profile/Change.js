// == Import : npm
import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Change = ({
  changeValue,
  user_name,
  email,
  // password,
  avatar,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };
  return (
    <Form className="form-change-info">
      <Form.Group controlId="formBasicName">
        <Form.Label className="form-change-info-label">Nom Prénom</Form.Label>
        <Form.Control type="text" placeholder="Nom Prénom" name="user_name" value={user_name} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="form-change-info-label">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
      </Form.Group>

      {/*
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
        </Form.Group>
      */}

      <Form.Group controlId="formBasicAvatar">
        <Form.Label className="form-change-info-label">Avatar</Form.Label>
        <Form.Control className="form-change-info-file" type="file" placeholder="Avatar" name="avatar" value={avatar} onChange={handleChange} />
      </Form.Group>
      <button variant="primary" className="change-button-form" type="submit">
        Modifier
      </button>
    </Form>
  );
};

Change.propTypes = {
  changeValue: PropTypes.func,
  user_name: PropTypes.string,
  email: PropTypes.string,
  // password: PropTypes.string,
  avatar: PropTypes.string,
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
