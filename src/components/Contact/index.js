/*
 * Import : Npm
 */
import React from 'react';
import {
  Form, Button,
} from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


/*
 * Import : local
 */
import './contact.scss';
/*
 * Component
 */
const Contact = () => (
  <div className="contact">
    <div className="contact-form">
      {/*
        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi6rdGnmp7lAhWiAWMBHZZhA-oQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.grand-est.ars.sante.fr%2Fnous-contacter&psig=AOvVaw2v0Z66vzzq6izuni-SkpUX&ust=1571226856929702" alt="cypokContact" />
      */}
      <h1 className="contact-form-title">Nous contacter</h1>
      <p className="contact-form-desc">Envoyez un message</p>
      {/* Formulaire pour nous contacter */}
      <Form className="contact-form-form">
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Nom *" className="contact-form-input" />
          <Form.Control type="text" placeholder="Prénom *" className="contact-form-input" />
          <Form.Control type="email" placeholder="Adresse mail *" className="contact-form-input" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control as="textarea" placeholder="Message *" rows="8" className="contact-form-input-textarea" />
        </Form.Group>
        <Button variant="primary" type="submit" className="contact-form-button">
          Submit
        </Button>
      </Form>

      {/* Information, comment nous contacter */}
      <div className="info">
        <h1>Information</h1>
        <hr />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit non quidem temporibus quae tenetur laudantium maiores laborum nostrum id, iure, repellendus quo, expedita accusamus ipsa.</p>
        <p><FaMapMarkerAlt /><span>Entreprise, adresse, cp</span></p>
        <p><FaPhone /><span>(+33) 07 01 02 03 04</span></p>
        <p><FaEnvelope /><span>marmotte@gmail.com</span></p>
      </div>
    </div>
  </div>
);


/*
 * Export
 */
export default Contact;
