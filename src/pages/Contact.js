import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your submission logic
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="bg-secondary bg-black">
      <div className="container-fluid mt-3">
        <div className="cols">
          <h1 className="fw-bold text-center text-white mt-3 pt-3">CONTACT <span className="alex bg-violet">ME</span></h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <div className="social-icons">
                <a href="https://www.facebook.com/daralfeche" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.77 3.5 8.72 8.06 9.45v-6.69H7.69V12h2.38V9.54c0-2.36 1.4-3.67 3.57-3.67 1.03 0 2.15.18 2.15.18v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5V12h2.65l-.42 2.76h-2.23v6.69C18.5 20.72 22 16.77 22 12c0-5.52-4.48-10-10-10z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@dars_tv" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                    <path d="M23.65 7.57c-.26-1.88-1.06-3.33-2.2-4.47C19.33 1.62 17.22 1 12 1S4.67 1.62 2.55 3.1c-1.13 1.14-1.93 2.59-2.2 4.47C.1 9.7 0 11.85 0 12s.1 2.3.35 4.43c.26 1.88 1.06 3.33 2.2 4.47C4.67 22.38 6.78 23 12 23s7.33-.62 9.45-2.1c1.13-1.14 1.93-2.59 2.2-4.47.25-2.13.35-4.28.35-4.43s-.1-2.3-.35-4.43zM9.5 15.25v-6.5l6.5 3.25-6.5 3.25z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/alexalfeche?igsh=Mzlhc29vYnYyaWl6" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                    <path d="M12 2.5c-2.77 0-3.11.01-4.2.06-1.07.05-1.79.23-2.42.5a4.56 4.56 0 0 0-1.75 1.25A4.56 4.56 0 0 0 2.56 7c-.27.63-.45 1.35-.5 2.42C2.01 8.89 2 9.23 2 12s.01 3.11.06 4.2c.05 1.07.23 1.79.5 2.42.22.53.53.94.94 1.36.41.41.82.72 1.36.94.63.27 1.35.45 2.42.5 1.09.05 1.43.06 4.2.06s3.11-.01 4.2-.06c1.07-.05 1.79-.23 2.42-.5.53-.22.94-.53 1.36-.94.41-.41.72-.82.94-1.36.27-.63.45-1.35.5-2.42.05-1.09.06-1.43.06-4.2s-.01-3.11-.06-4.2c-.05-1.07-.23-1.79-.5-2.42a3.46 3.46 0 0 0-.94-1.36c-.41-.41-.82-.72-1.36-.94-.63-.27-1.35-.45-2.42-.5-1.09-.05-1.43-.06-4.2-.06zM12 4c2.67 0 2.99.01 4.04.06.92.04 1.42.21 1.75.34.44.18.76.39 1.11.74.35.35.56.67.74 1.11.13.33.3.83.34 1.75.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.92-.21 1.42-.34 1.75-.18.44-.39.76-.74 1.11-.35.35-.67.56-1.11.74-.33.13-.83.3-1.75.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.92-.04-1.42-.21-1.75-.34a3.45 3.45 0 0 1-1.11-.74c-.35-.35-.56-.67-.74-1.11-.13-.33-.3-.83-.34-1.75-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.92.21-1.42.34-1.75.18-.44.39-.76.74-1.11.35-.35.67-.56 1.11-.74.33-.13.83-.3 1.75-.34 1.05-.05 1.37-.06 4.04-.06zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8-12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
