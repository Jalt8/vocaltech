import React, { useState } from 'react';
import { ArrowRight, Star, Search, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyLogo = ({ company }) => {
  if (company === "TechCorp Inc.") {
    return <img src="/customer-support.svg" alt="TechCorp Inc. Logo" className="w-24 h-24 mb-4" />;
  }
  const logoId = company.toLowerCase().replace(/\s+/g, '') + '-logo';
  return (
    <svg className="w-24 h-24 mb-4">
      <use xlinkHref={`#${logoId}`} />
    </svg>
  );
};

const CaseStudyCard = ({ title, company, industry, challenge, rating }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
    <div className="p-6 flex-grow">
      <CaseStudyLogo company={company} />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{company} | {industry}</p>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
        <span className="ml-2 text-gray-600">({rating}.0)</span>
      </div>
      <p className="text-gray-700 mb-4">{challenge}</p>
      <div className="mt-auto">
        <Link to={`/case-study/${title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
          Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const caseStudies = [
    {
      title: "Revolutionizing Customer Support",
      company: "TechCorp Inc.",
      industry: "Software",
      challenge: "TechCorp faced overwhelming customer inquiries. VocalTech's AI assistant reduced wait times by 50% and boosted satisfaction by 30%.",
      rating: 5,
    },
    {
      title: "Streamlining Healthcare Communication",
      company: "MediCare Hospital",
      industry: "Healthcare",
      challenge: "MediCare struggled with missed appointments. Our voice AI cut no-shows by 40% and improved patient satisfaction by 25%.",
      rating: 4,
    },
    {
      title: "Enhancing Financial Services",
      company: "Global Bank",
      industry: "Finance",
      challenge: "Global Bank needed secure, efficient customer service. VocalTech's solution sped up query resolution by 60% and cut fraud by 45%.",
      rating: 5,
    }
  ];

  const industries = ['All', ...new Set(caseStudies.map(study => study.industry))];

  const filteredStudies = caseStudies.filter(study => 
    (selectedIndustry === 'All' || study.industry === selectedIndustry) &&
    (study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     study.challenge.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Include the SVG definitions */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          {/* MediCare Hospital Logo */}
          <symbol id="medicarehospital-logo" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#5AF7B0" />
            <path d="M30 50 H70 M50 30 V70" stroke="white" strokeWidth="10" />
          </symbol>

          {/* Global Bank Logo */}
          <symbol id="globalbank-logo" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#FFD700" />
            <path d="M25 65 Q50 25 75 65" stroke="#333" strokeWidth="8" fill="none" />
            <circle cx="50" cy="50" r="15" fill="#333" />
          </symbol>
        </svg>

        <h1 className="text-5xl font-bold text-center mb-4">Real Results, Real Impact</h1>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Discover how VocalTech's AI-powered voice solutions have transformed businesses, driving efficiency and enhancing experiences across industries.
        </p>
        
        {/* Search and filter components */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search case studies..."
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative w-full md:w-auto">
            <select
              className="appearance-none w-full md:w-48 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:border-blue-500"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <p className="text-center text-gray-700 text-xl">No case studies match your search criteria. Please try different keywords or filters.</p>
        )}

        {/* CTA Section */}
        <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6">Join the ranks of industry leaders who have revolutionized their operations with VocalTech's AI solutions.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Get Your Free Consultation
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: "How quickly can I see results with VocalTech?", a: "Many of our clients see significant improvements within the first month of implementation. However, the exact timeline can vary based on your specific use case and integration complexity." },
              { q: "Is VocalTech's solution suitable for small businesses?", a: "Absolutely! We offer scalable solutions that cater to businesses of all sizes, from startups to large enterprises." },
              { q: "How does VocalTech ensure data privacy and security?", a: "We prioritize data protection with end-to-end encryption, regular security audits, and compliance with industry standards like GDPR and HIPAA." }
            ].map((faq, index) => (
              <details key={index} className="bg-white p-4 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className="w-5 h-5" />
                </summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;