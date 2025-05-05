import React from 'react';

const IconRenderer = ({ icon }) => {
  // This function will render different icons based on the icon name
  // We'll support both string-based icons and direct SVG paths
  
  if (!icon) return null;
  
  switch (icon.toLowerCase()) {
    case 'terminal':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      );
    
    case 'ocarina':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"></path>
          <path d="M12 8V3"></path>
          <path d="M12 18v3"></path>
          <path d="M16 12h5"></path>
          <path d="M3 12h5"></path>
          <path d="M14.8 9.2l3.5-3.5"></path>
          <path d="M5.7 18.3l3.5-3.5"></path>
          <path d="M9.2 9.2L5.7 5.7"></path>
          <path d="M18.3 18.3l-3.5-3.5"></path>
        </svg>
      );
      
    case 'fieldday':
    case 'field-day':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      );
      
    case 'gift':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="14" rx="2"></rect>
          <path d="M12 8v14"></path>
          <path d="M19 12H5"></path>
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 10 5 12 5s3-2 4.5-2a2.5 2.5 0 0 1 0 5"></path>
        </svg>
      );
      
    case 'gamecontroller':
    case 'game-controller':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15" y2="13"></line>
          <line x1="17" y1="11" x2="17" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      );
      
    case 'recordvinyl':
    case 'record-vinyl':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="1"></circle>
          <path d="M7 12a5 5 0 0 1 5-5"></path>
          <path d="M12 17a5 5 0 0 0 5-5"></path>
        </svg>
      );
      
    case 'cube':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
        </svg>
      );
      
    case 'image':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      );
      
    default:
      // If it's not a predefined icon, return null or a default icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      );
  }
};

export default IconRenderer;
