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
      // Custom stylized ocarina icon (Zelda-inspired)
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Ocarina body */}
          <ellipse cx="28" cy="14" rx="16" ry="8" fill="currentColor" fillOpacity="0.12" />
          <ellipse cx="28" cy="14" rx="16" ry="8" />
          {/* Mouthpiece */}
          <rect x="6" y="10" width="8" height="4" rx="2" fill="currentColor" fillOpacity="0.18" />
          <rect x="6" y="10" width="8" height="4" rx="2" />
          {/* Holes */}
          <circle cx="20" cy="14" r="1.2" fill="currentColor" />
          <circle cx="25" cy="12" r="1.2" fill="currentColor" />
          <circle cx="30" cy="15" r="1.2" fill="currentColor" />
          <circle cx="35" cy="13" r="1.2" fill="currentColor" />
          {/* Decorative shine */}
          <path d="M36 10c-2-2-8-2-10 0" stroke="currentColor" strokeOpacity="0.3" />
        </svg>
      );
      
    case 'evergreen':
    case 'evergreen-ils':
      // Stylized evergreen tree with book base, more elegant and balanced
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Tree layers */}
          <path
            d="M16 4 L10 14 H13 L8 20 H12 L6 26 H26 L20 20 H24 L19 14 H22 Z"
            fill="currentColor"
            fillOpacity="0.13"
          />
          <path
            d="M16 4 L10 14 H13 L8 20 H12 L6 26 H26 L20 20 H24 L19 14 H22 Z"
          />
          {/* Tree trunk */}
          <rect x="14.25" y="26" width="3.5" height="4" rx="1" fill="currentColor" fillOpacity="0.18" />
          <rect x="14.25" y="26" width="3.5" height="4" rx="1" />
          {/* Book base */}
          <rect x="8" y="29" width="16" height="2" rx="1" fill="currentColor" fillOpacity="0.10" />
          <rect x="8" y="29" width="16" height="2" rx="1" />
          {/* Decorative lines for book pages */}
          <line x1="12" y1="30" x2="12" y2="31" stroke="currentColor" strokeOpacity="0.5" />
          <line x1="16" y1="30" x2="16" y2="31" stroke="currentColor" strokeOpacity="0.5" />
          <line x1="20" y1="30" x2="20" y2="31" stroke="currentColor" strokeOpacity="0.5" />
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
