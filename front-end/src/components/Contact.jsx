import React, { useState } from 'react';
import axios from 'axios';
import back from './assets/bg5.jpg';
import contactImage from './assets/contact.png'; // Adjust the path to your uploaded image

function ContactFormCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8003/api/contacts', formData)
      .then(response => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setStatusMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-0 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8 order-2 md:order-1">
          <h2 className="text-2xl text-teal-400 font-bold mb-4 text-center">Contact Us</h2>
          {statusMessage && <p className="text-center mb-4 text-white">{statusMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-md border border-gray-600 px-3 py-2 text-white bg-gray-900 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-md border border-gray-600 px-3 py-2 text-white bg-gray-900 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-md border border-gray-600 px-3 py-2 text-white bg-gray-900 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-teal-500 text-white font-bold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-shrink-0 w-full max-w-md order-1 md:order-2">
          <img src={contactImage} alt="Contact" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ContactFormCard;
