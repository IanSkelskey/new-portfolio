import React from 'react';
// Replace outline icons with solid variants
import { 
  FaTerminal, FaImage, FaGift, FaLeaf, FaQuestion,
  FaCompactDisc, FaCube, FaInfoCircle, FaGithub,
  FaGamepad, FaBook
} from 'react-icons/fa';

const IconRenderer = ({ icon }) => {
  if (!icon) return null;
  
  // Common accessibility props for all icons
  const accessibilityProps = {
    'aria-hidden': 'true',  // Hide from screen readers since they're decorative
    focusable: 'false',     // Prevent focus on SVG
    role: 'img'             // Ensure proper role
  };
  
  // Map custom icon names to React Icons components
  switch (icon.toLowerCase()) {
    case 'terminal':
      return <FaTerminal {...accessibilityProps} />;
    
    case 'ocarina':
      // Use a game controller for ocarina
      return <FaGamepad {...accessibilityProps} />;
      
    case 'evergreen':
    case 'evergreen-ils':
      return <FaBook {...accessibilityProps} />;
      
    case 'fieldday':
    case 'field-day':
      // Better icon for wildlife research: leaf represents nature/field work
      return <FaLeaf {...accessibilityProps} />;
      
    case 'gift':
      return <FaGift {...accessibilityProps} />;
      
    case 'gamecontroller':
    case 'game-controller':
      return <FaGamepad {...accessibilityProps} />;
      
    case 'recordvinyl':
    case 'record-vinyl':
      return <FaCompactDisc {...accessibilityProps} />;
      
    case 'cube':
      return <FaCube {...accessibilityProps} />;
      
    case 'image':
      return <FaImage {...accessibilityProps} />;
      
    case 'github':
      return <FaGithub {...accessibilityProps} />;
      
    default:
      return <FaInfoCircle {...accessibilityProps} />;
  }
};

export default IconRenderer;
