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
  <>
    <div className="container-fluid p-0">
      <div className="image">
        <img src="https://i.imgur.com/dWJbYAQ.jpg" className="image-contact" width="100%" alt="banniere contact" />
        <h1 className="image-title">Contact</h1>
        <p className="image-descrip">Une petit question? Contacter nous.</p>
      </div>
      <div className="contact container mx-auto">
        <div className="contact-form">
          <h1 className="contact-form-title">Nous contacter</h1>
          <p className="contact-form-desc">Envoyer un message</p>
          {/* Formulaire pour nous contacter */}
          <Form className="contact-form-form">
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Nom *" className="contact-form-input" required />
              <Form.Control type="text" placeholder="Prénom *" className="contact-form-input" required />
              <Form.Control type="email" placeholder="Adresse mail *" className="contact-form-input" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control as="textarea" placeholder="Message *" rows="8" className="contact-form-input-textarea" required />
            </Form.Group>
            <div className="text-right mt-4"><Button type="submit" className="contact-form-button mb-4 mr-3">Envoyer</Button></div>
            
          </Form>
        </div>

        {/* Information sur comment nous contacter */}
        <div className="contact-info">
          <h1 className="contact-info-title">Information</h1>
          <p className="contact-info-text-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit non quidem temporibus quae tenetur laudantium maiores laborum nostrum id, iure, repellendus quo, expedita accusamus ipsa.</p>
          <p className="contact-info-text">
            <FaMapMarkerAlt className="contact-info-icon"/>
            <span className="contact-info-text-span">
        GameBook, adresse, cp
            </span>
          </p>
          <p className="contact-info-text">
            <FaPhone className="contact-info-icon"/>
            <span className="contact-info-text-span">
        (+33) 07 01 02 03 04
            </span>
          </p>
          <p className="contact-info-text">
            <FaEnvelope className="contact-info-icon"/>
            <span className="contact-info-text-span">
        gamebook@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  </>
);


/*
 * Export
 */
export default Contact;
