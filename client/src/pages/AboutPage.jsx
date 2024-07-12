import React from 'react';
import { Check, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const benefits = [
    "Cutting-edge AI technology",
    "Tailored solutions for your industry",
    "Proven track record of success",
    "Dedicated support and continuous optimization"
  ];

  const values = [
    { icon: Users, title: "Customer-Centric", description: "We put our clients' needs at the forefront of everything we do." },
    { icon: Lightbulb, title: "Innovation", description: "We're constantly pushing the boundaries of what's possible with voice AI." },
    { icon: TrendingUp, title: "Excellence", description: "We strive for excellence in every aspect of our work." }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16">About VocalTech</h1>
        
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At VocalTech, we're passionate innovators dedicated to transforming businesses through the power of voice AI. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver tailored solutions that drive tangible results.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Founded in 2020, VocalTech has quickly become a leader in the voice AI space, serving clients across various industries including healthcare, finance, and customer service. Our mission is to make human-computer interaction more natural, efficient, and productive.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Why Choose VocalTech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
              <Check className="text-green-500 mr-4 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <value.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;