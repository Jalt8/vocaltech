import React from 'react';
import { Mic, MessageCircle, PieChart, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ icon: Icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
    <Icon className="w-16 h-16 mb-6 text-blue-600" />
    <h3 className="text-3xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <ArrowRight className="text-blue-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
      Learn More
    </Link>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Mic,
      title: "Intelligent Voice Assistants",
      description: "Empower your business with AI-driven voice assistants that provide personalized experiences, increasing customer satisfaction and operational efficiency.",
      features: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-language support",
        "Customizable voice and personality"
      ]
    },
    {
      icon: MessageCircle,
      title: "Advanced Speech Recognition",
      description: "Leverage state-of-the-art speech-to-text technology for accurate transcription and real-time conversation analysis, unlocking valuable insights from every interaction.",
      features: [
        "High accuracy transcription",
        "Real-time processing",
        "Noise cancellation",
        "Speaker diarization"
      ]
    },
    {
      icon: PieChart,
      title: "Comprehensive Voice Analytics",
      description: "Gain deep insights from voice interactions to optimize processes, enhance customer experiences, and drive data-informed business decisions.",
      features: [
        "Sentiment analysis",
        "Trend identification",
        "Performance metrics",
        "Customizable dashboards"
      ]
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Effortlessly integrate our voice AI solutions with your existing systems, ensuring a smooth transition and maximizing ROI.",
      features: [
        "API-driven architecture",
        "Compatibility with major platforms",
        "Scalable infrastructure",
        "Dedicated integration support"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16">Our Voice AI Solutions</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceDetail key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;