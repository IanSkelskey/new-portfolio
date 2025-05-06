import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { pageTransition, contentTransition, itemFadeIn, staggerContainer } from '../animations';
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
  return (
    <motion.div 
      className={`page-wrapper page-width-${width} ${className}`} 
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {(title || subtitle) && (
        <motion.header 
          className={`page-header ${headerClassName}`}
          variants={staggerContainer(0.1)}
        >
          {title && <motion.h1 className="page-title" variants={itemFadeIn(0)}>{title}</motion.h1>}
          {subtitle && <motion.p className="page-subtitle" variants={itemFadeIn(1)}>{subtitle}</motion.p>}
        </motion.header>
      )}

      <motion.div 
        className="page-content" 
        variants={contentTransition}
      >
        {children}
      </motion.div>
    </motion.div>
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
