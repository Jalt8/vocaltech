import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, BarChart2, Users } from 'lucide-react';

const BackgroundSVG = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#5AF7B0" stopOpacity="0.2"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)"/>
    <circle cx="5%" cy="5%" r="50" fill="#4A90E2" fillOpacity="0.1"/>
    <circle cx="95%" cy="95%" r="100" fill="#5AF7B0" fillOpacity="0.1"/>
    <path d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#4A90E2" fillOpacity="0.1"/>
  </svg>
);

const FeatureIcon = ({ Icon, text }) => (
  <div className="flex items-center mb-6 backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-3 transition-all duration-300 hover:bg-opacity-20">
    <div className="bg-blue-500 bg-opacity-20 rounded-full p-2 mr-3">
      <Icon className="text-white w-6 h-6" />
    </div>
    <span className="text-lg text-white">{text}</span>
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
      <BackgroundSVG />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              Elevate Your Business with AI-Powered Voice
            </h1>
            <p className="text-xl mb-8 animate-fade-in animation-delay-300 text-blue-100">
              Unlock the future of communication with cutting-edge voice AI. Transform customer experiences and drive growth like never before.
            </p>
            <div className="space-y-4 mb-8 animate-fade-in animation-delay-600">
              <FeatureIcon Icon={Mic} text="Intelligent Speech Recognition" />
              <FeatureIcon Icon={BarChart2} text="Insightful Real-time Analytics" />
              <FeatureIcon Icon={Users} text="Tailored User Experiences" />
            </div>
            <Link 
              to="#demo" 
              className="group bg-white text-blue-800 font-bold py-4 px-8 rounded-full hover:bg-blue-100 transition duration-300 inline-flex items-center text-lg shadow-lg animate-pulse"
            >
              Experience the Demo
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative animate-float">
              <svg className="w-full h-auto" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <g className="soundwaves" opacity="1">
                  <path className="soundwave" d="M250,250 Q300,200 350,250 T450,250" stroke="#FFFFFF" strokeWidth="4" fill="none" />
                  <path className="soundwave" d="M250,250 Q300,300 350,250 T450,250" stroke="#FFFFFF" strokeWidth="4" fill="none" />
                  <path className="soundwave" d="M50,250 Q100,200 150,250 T250,250" stroke="#FFFFFF" strokeWidth="4" fill="none" />
                  <path className="soundwave" d="M50,250 Q100,300 150,250 T250,250" stroke="#FFFFFF" strokeWidth="4" fill="none" />
                </g>
                <circle cx="250" cy="250" r="200" fill="url(#grad1)" className="animate-pulse" />
                <circle cx="250" cy="250" r="150" fill="rgba(255,255,255,0.1)" />
                <circle cx="250" cy="250" r="100" fill="rgba(255,255,255,0.2)" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <Mic className="w-16 h-16 text-white mb-4 mx-auto" />
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  VocalTech AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .soundwave {
          stroke-dasharray: 200;
          animation: dash 4s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: 1000; }
        }
      `}</style>
    </section>
  );
};

export default Hero;