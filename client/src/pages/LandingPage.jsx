import React from 'react';
import { ArrowRight, Mic, Zap, TrendingUp, Users, Phone, Settings, BarChart, Star, Check } from 'lucide-react';

const Hero = () => (
  <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Transform Your Business with AI-Powered Voice Solutions
        </h1>
        <p className="text-xl mb-8">
          Boost efficiency, enhance customer experiences, and drive growth with VocalTech's cutting-edge AI voice technology.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <Mic className="relative z-10 w-48 h-48 text-white" />
        </div>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  const benefitsList = [
    {
      icon: Zap,
      title: "Boost Efficiency",
      description: "Automate tasks and streamline processes, saving time and resources."
    },
    {
      icon: TrendingUp,
      title: "Drive Growth",
      description: "Increase customer satisfaction and loyalty, leading to business expansion."
    },
    {
      icon: Users,
      title: "Enhance Experiences",
      description: "Provide personalized, responsive interactions that delight customers."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose VocalTech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start">
    <div className="bg-blue-600 rounded-full p-3 mr-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "1. Schedule a Demo",
      description: "Get in touch with our team for a personalized demonstration of VocalTech's capabilities."
    },
    {
      icon: Settings,
      title: "2. Customize Your Solution",
      description: "We'll work with you to tailor our AI voice technology to your specific business needs."
    },
    {
      icon: BarChart,
      title: "3. See the Results",
      description: "Watch as VocalTech transforms your operations, boosting efficiency and customer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How VocalTech Works</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ quote, author, company }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{quote}</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-500">{company}</p>
  </div>
);

const Metric = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-blue-600 mb-2">{value}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);

const SocialProof = () => {
  const testimonials = [
    {
      quote: "VocalTech's AI solution has revolutionized our customer service. We've seen a 40% increase in customer satisfaction scores.",
      author: "Jane Doe",
      company: "Tech Innovators Inc."
    },
    {
      quote: "Implementing VocalTech was seamless, and the results were immediate. Our call resolution times have decreased by 50%.",
      author: "John Smith",
      company: "Global Solutions Ltd."
    }
  ];

  const metrics = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "60%", label: "Efficiency Increase" },
    { value: "45%", label: "Cost Reduction" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureList = ({ features }) => (
  <ul className="space-y-2">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center">
        <Check className="w-5 h-5 text-green-500 mr-2" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const Features = () => {
  const featuresList = [
    "Advanced Natural Language Processing",
    "Real-time Speech Recognition",
    "Multi-language Support",
    "Seamless Integration with Existing Systems",
    "Customizable Voice and Personality",
    "Comprehensive Analytics Dashboard",
    "24/7 Availability",
    "GDPR and HIPAA Compliant"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features to Transform Your Business</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/api/placeholder/600/400" alt="VocalTech Features" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <FeatureList features={featuresList} />
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Business?</h2>
      <p className="text-xl mb-8">Join the ranks of industry leaders who have transformed their operations with VocalTech.</p>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
        >
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </form>
      <p className="mt-4 text-sm opacity-80">No credit card required. Start your free 14-day trial today.</p>
    </div>
  </section>
);

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <Benefits />
      <HowItWorks />
      <SocialProof />
      <Features />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;