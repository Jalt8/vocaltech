// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const About = () => {
  const benefits = [
    "Cutting-edge AI technology",
    "Tailored solutions for your industry",
    "Proven track record of success",
    "Dedicated support and continuous optimization"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose VocalTech?</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At VocalTech, we're not just another AI company. We're passionate innovators dedicated to transforming businesses through the power of voice AI. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver tailored solutions that drive tangible results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Check className="text-green-500 mr-2 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="#contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
              Discover How We Can Help You
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;