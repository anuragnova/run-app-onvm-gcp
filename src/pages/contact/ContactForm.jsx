import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-form-section section">
      <h2>Get in Touch</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="specialization">Specialization:</label>
        <input type="text" id="specialization" name="specialization" required />

        <label htmlFor="resume">Upload Resume:</label>
        <input type="file" id="resume" name="resume" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;