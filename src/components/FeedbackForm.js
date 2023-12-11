import React, { useState } from 'react';
import './Input.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    const existingData = JSON.parse(localStorage.getItem('feedbackData')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('feedbackData', JSON.stringify(updatedData));

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    alert('Feedback submitted successfully!');
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form className="colorful-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            required
            placeholder="Enter your name"
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            required
            placeholder="Enter your email"
            className="form-input"
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            required
            placeholder="Enter your message"
            className="form-input"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
