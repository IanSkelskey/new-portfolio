import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, itemFadeIn } from '../animations';
import './CTASection.css';

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
  accentColor,
}) => {
  // Function to render a button (supports both Link and external anchor)
  const renderButton = (buttonConfig, buttonType, index) => {
    if (!buttonConfig) return null;

    const { text, to, href, onClick, icon } = buttonConfig;
    const buttonClass = `btn btn-${buttonType}`;
    const ButtonWrapper = motion.div;
    
    // Motion props for the button wrapper
    const motionProps = {
      variants: itemFadeIn(index),
    };

    // If it's an internal link
    if (to) {
      return (
        <ButtonWrapper {...motionProps}>
          <Link to={to} className={buttonClass} onClick={onClick}>
            {text}
            {icon && <span className="button-icon">{icon}</span>}
          </Link>
        </ButtonWrapper>
      );
    }

    // If it's an external link
    if (href) {
      return (
        <ButtonWrapper {...motionProps}>
          <a 
            href={href} 
            className={buttonClass} 
            onClick={onClick}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {text}
            {icon && <span className="button-icon">{icon}</span>}
          </a>
        </ButtonWrapper>
      );
    }

    return null;
  };

  // Add accent color as a custom property if provided
  const style = accentColor ? { '--cta-bg-color': accentColor } : {};

  return (
    <motion.section 
      className={`cta-section ${className}`} 
      style={style}
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
    >
      <div className="cta-content">
        {title && <motion.h2 variants={itemFadeIn(0)}>{title}</motion.h2>}
        {description && <motion.p variants={itemFadeIn(1)}>{description}</motion.p>}
        
        {(primaryButton || secondaryButton) && (
          <motion.div className="cta-buttons" variants={staggerContainer(0.08)}>
            {primaryButton && renderButton(primaryButton, 'primary', 0)}
            {secondaryButton && renderButton(secondaryButton, 'secondary', 1)}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node
  }),
  className: PropTypes.string,
  accentColor: PropTypes.string
};

export default CTASection;
