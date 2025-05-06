import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { pageTransition, contentTransition, itemFadeIn, staggerContainer } from '../animations';
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
  // Create a style object with CSS variables for the accent color if provided
  const accentStyle = accentColor ? {
    "--detail-accent-color": accentColor,
    "--detail-accent-transparent": `${accentColor}33` // 20% opacity version
  } : {};

  return (
    <motion.div 
      className={`detail-wrapper ${className}`} 
      style={accentStyle}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero section */}
      <motion.section 
        className="detail-hero"
        variants={staggerContainer(0.1)}
      >
        <motion.div 
          className="detail-hero-content"
          variants={staggerContainer(0.08)}
        >
          {backLink && (
            <motion.div variants={itemFadeIn(0)}>
              <Link to={backLink} className="back-link">
                ← {backText}
              </Link>
            </motion.div>
          )}
          
          {icon && (
            <motion.div 
              className="detail-hero-icon" 
              aria-hidden="true"
              variants={itemFadeIn(1)}
            >
              {icon}
            </motion.div>
          )}
          
          <motion.div variants={staggerContainer(0.06)}>
            {title && <motion.h1 className="detail-title" variants={itemFadeIn(0)}>{title}</motion.h1>}
            {subtitle && <motion.p className="detail-subtitle" variants={itemFadeIn(1)}>{subtitle}</motion.p>}
          </motion.div>
          
          {metadata.length > 0 && (
            <motion.div 
              className="detail-meta"
              variants={staggerContainer(0.04)}
            >
              {metadata.map((item, index) => (
                <motion.span 
                  key={index} 
                  className="detail-meta-item"
                  variants={itemFadeIn(index)}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>
        
        {heroImage && (
          <motion.div 
            className="detail-hero-image"
            variants={itemFadeIn(metadata.length > 0 ? metadata.length + 1 : 3)}
          >
            <img 
              src={heroImage}
              alt={heroAlt || `${title} visual`}
            />
          </motion.div>
        )}
      </motion.section>

      {/* Main content */}
      <motion.div className="detail-content" variants={contentTransition}>
        {children}
      </motion.div>
    </motion.div>
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
