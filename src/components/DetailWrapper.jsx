import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './DetailWrapper.css';

const DetailWrapper = ({
  children,
  title,
  subtitle,
  backLink,
  backText = 'Back',
  icon,
  metadata = [],
  heroImage,
  heroAlt,
  accentColor,
  animate = true,
  className = ''
}) => {
  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, when: 'beforeChildren' }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  // Wrapper component - conditionally animate if specified
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate ? {
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit',
    variants: pageVariants
  } : {};
  
  // Inner content component for animations
  const ContentElement = animate ? motion.div : 'div';
  const contentProps = animate ? {
    variants: childVariants
  } : {};
  
  // Create a style object with CSS variables for the accent color if provided
  const accentStyle = accentColor ? {
    "--detail-accent-color": accentColor,
    "--detail-accent-transparent": `${accentColor}33` // 20% opacity version
  } : {};

  return (
    <Wrapper 
      className={`detail-wrapper ${className}`} 
      style={accentStyle}
      {...wrapperProps}
    >
      {/* Hero section */}
      <section className="detail-hero">
        <div className="detail-hero-content">
          {backLink && (
            <Link to={backLink} className="back-link">
              ← {backText}
            </Link>
          )}
          
          {icon && (
            <div className="detail-hero-icon" aria-hidden="true">
              {icon}
            </div>
          )}
          
          <ContentElement {...contentProps}>
            {title && <h1 className="detail-title">{title}</h1>}
            {subtitle && <p className="detail-subtitle">{subtitle}</p>}
          </ContentElement>
          
          {metadata.length > 0 && (
            <ContentElement className="detail-meta" {...contentProps}>
              {metadata.map((item, index) => (
                <span key={index} className="detail-meta-item">{item}</span>
              ))}
            </ContentElement>
          )}
        </div>
        
        {heroImage && (
          <div className="detail-hero-image">
            <img 
              src={heroImage}
              alt={heroAlt || `${title} visual`}
            />
          </div>
        )}
      </section>

      {/* Main content */}
      <ContentElement className="detail-content" {...contentProps}>
        {children}
      </ContentElement>
    </Wrapper>
  );
};

DetailWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backLink: PropTypes.string,
  backText: PropTypes.string,
  icon: PropTypes.node,
  metadata: PropTypes.arrayOf(PropTypes.node),
  heroImage: PropTypes.string,
  heroAlt: PropTypes.string,
  accentColor: PropTypes.string,
  animate: PropTypes.bool,
  className: PropTypes.string
};

export default DetailWrapper;
