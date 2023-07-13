import React, { useState } from 'react';
import validateEmail from '../utils/helpers.js';
import '../styles/Contact.css';



function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } if (inputType === 'email') {
      setEmail(inputValue);
    } if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!email) {
      setErrorMessage('Email is rquired');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Your email is invalid');
      return;
    }

    if (!name) {
      setErrorMessage('Name is required');
      return;
    }

    if (!message) {
      setErrorMessage('Message is required');
      return;
    }


    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');

  }

  return (
    <section className="contact">
      <form className="form">
        <label>Name:</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"

        />
        <label>Email Address:</label>
        <input
          value={email}
          name="email"
          type="text"
          onChange={handleInputChange}

        />
        <label>Message:</label>
        <textarea
          value={message}
          name="message"
          type="textarea"
          onChange={handleInputChange}
          className="form-input w-50"

        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
