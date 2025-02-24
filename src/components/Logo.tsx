import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 400 600" 
    className={className}
    style={{ maxHeight: '100%', maxWidth: '100%' }}
  >
    <path 
      d="M200 500 L300 300 L100 300 Z" 
      fill="#FFB4EC"
    />
    <path 
      d="M180 320 C180 320, 220 320, 220 320 C220 320, 250 400, 200 400 C150 400, 180 320, 180 320 Z" 
      fill="#EFF695"
    />
    <rect x="190" y="100" width="20" height="200" fill="#482248"/>
  </svg>
);

export default Logo;