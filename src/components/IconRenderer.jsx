import React from 'react';
// Replace outline icons with solid variants
import { 
  FaTerminal, FaImage, FaGift, FaLeaf, FaQuestion,
  FaCompactDisc, FaCube, FaInfoCircle, FaGithub,
  FaGamepad, FaBook
} from 'react-icons/fa';

const IconRenderer = ({ icon }) => {
  if (!icon) return null;
  
  // Map custom icon names to React Icons components
  switch (icon.toLowerCase()) {
    case 'terminal':
      return <FaTerminal />;
    
    case 'ocarina':
      // Use a game controller for ocarina
      return <FaGamepad />;
      
    case 'evergreen':
    case 'evergreen-ils':
      return <FaBook />;
      
    case 'fieldday':
    case 'field-day':
      // Better icon for wildlife research: leaf represents nature/field work
      return <FaLeaf />;
      
    case 'gift':
      return <FaGift />;
      
    case 'gamecontroller':
    case 'game-controller':
      return <FaGamepad />;
      
    case 'recordvinyl':
    case 'record-vinyl':
      return <FaCompactDisc />;
      
    case 'cube':
      return <FaCube />;
      
    case 'image':
      return <FaImage />;
      
    case 'github':
      return <FaGithub />;
      
    default:
      return <FaInfoCircle />;
  }
};

export default IconRenderer;
