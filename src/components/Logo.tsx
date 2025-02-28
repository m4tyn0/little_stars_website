import React from 'react';
import logoImage from '../assets/logo.png'; // Adjust path as needed

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img 
      src={logoImage} 
      alt="Wine Festival Logo" 
      style={{ 
        width: '150%',
        height: '150%',
        objectFit: 'contain',
      }} 
    />
  </div>
);

export default Logo;
