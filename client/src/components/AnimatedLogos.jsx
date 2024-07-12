import React from 'react';

const AnimatedLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" className="h-10 w-auto">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#4A90E2", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#5AF7B0", stopOpacity:1}} />
        </linearGradient>
      </defs>
      <path className="soundwave1" d="M30 60 Q45 30, 60 60 T90 60" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
      <path className="soundwave2" d="M20 60 Q40 20, 60 60 T100 60" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
      <path className="soundwave3" d="M10 60 Q35 10, 60 60 T110 60" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
      <text x="130" y="70" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="bold" fill="#333333">VocalTech</text>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        .soundwave1 {
          animation: pulse 2s infinite;
        }
        .soundwave2 {
          animation: pulse 2s infinite 0.3s;
        }
        .soundwave3 {
          animation: pulse 2s infinite 0.6s;
        }
      `}</style>
    </svg>
  );
};

export default AnimatedLogo;