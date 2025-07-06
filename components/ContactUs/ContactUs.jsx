import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        Have questions or need assistance? Feel free to reach out to us!
      </p>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
