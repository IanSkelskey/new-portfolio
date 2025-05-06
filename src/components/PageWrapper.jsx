import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './PageWrapper.css';

const PageWrapper = ({
  children,
  title,
  subtitle,
  width = 'default',
  animate = true,
  className = '',
  headerClassName = ''
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Wrapper component - conditionally animate if specified
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate ? {
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit',
    variants: pageVariants
  } : {};

  // Inner content component - for child animations
  const ContentWrapper = animate ? motion.div : 'div';
  const contentProps = animate ? {
    variants: childVariants
  } : {};

  return (
    <Wrapper 
      className={`page-wrapper page-width-${width} ${className}`} 
      {...wrapperProps}
    >
      {(title || subtitle) && (
        <header className={`page-header ${headerClassName}`}>
          {title && <h1 className="page-title">{title}</h1>}
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </header>
      )}

      <ContentWrapper className="page-content" {...contentProps}>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  width: PropTypes.oneOf(['narrow', 'default', 'wide']),
  animate: PropTypes.bool,
  className: PropTypes.string,
  headerClassName: PropTypes.string
};

export default PageWrapper;
