import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16">Get in Touch</h1>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;