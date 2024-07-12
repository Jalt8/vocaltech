// Services.js
import React from 'react';
import { Mic, MessageCircle, PieChart, Zap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
    <Icon className="w-16 h-16 mb-6 text-blue-600" />
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Intelligent Voice Assistants",
      description: "Empower your business with AI-driven voice assistants that provide personalized experiences, increasing customer satisfaction and operational efficiency."
    },
    {
      icon: MessageCircle,
      title: "Advanced Speech Recognition",
      description: "Leverage state-of-the-art speech-to-text technology for accurate transcription and real-time conversation analysis, unlocking valuable insights from every interaction."
    },
    {
      icon: PieChart,
      title: "Comprehensive Voice Analytics",
      description: "Gain deep insights from voice interactions to optimize processes, enhance customer experiences, and drive data-informed business decisions."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Effortlessly integrate our voice AI solutions with your existing systems, ensuring a smooth transition and maximizing ROI."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Harness the Power of Voice AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;