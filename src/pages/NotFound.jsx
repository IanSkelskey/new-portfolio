import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, itemFadeIn } from '../animations';
import './NotFound.css';

const NotFound = () => {
  return (
    <motion.div 
      className="not-found-container"
      variants={staggerContainer(0.2)}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <motion.div className="not-found-content" variants={itemFadeIn(0)}>
        <motion.h1 className="not-found-title" variants={itemFadeIn(1)}>404</motion.h1>
        <motion.div className="not-found-divider" variants={itemFadeIn(2)}></motion.div>
        <motion.h2 className="not-found-subtitle" variants={itemFadeIn(3)}>Page Not Found</motion.h2>
        <motion.p className="not-found-message" variants={itemFadeIn(4)}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div variants={itemFadeIn(5)}>
          <Link to="/" className="btn btn-primary not-found-button">
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div className="not-found-decoration" variants={itemFadeIn(6)}>
        <div className="not-found-code-block">
          <motion.div 
            className="code-line"
            variants={itemFadeIn(7)}
          >
            <span className="code-keyword">const</span> <span className="code-variable">page</span> = <span className="code-string">'awesome'</span>;
          </motion.div>
          <motion.div 
            className="code-line"
            variants={itemFadeIn(8)}
          >
            <span className="code-keyword">try</span> {'{'}
          </motion.div>
          <motion.div 
            className="code-line indent"
            variants={itemFadeIn(9)}
          >
            <span className="code-keyword">if</span> (page !== <span className="code-string">'found'</span>) {'{'}
          </motion.div>
          <motion.div 
            className="code-line double-indent"
            variants={itemFadeIn(10)}
          >
            <span className="code-keyword">throw new</span> <span className="code-error">Error</span>(<span className="code-string">'404'</span>);
          </motion.div>
          <motion.div 
            className="code-line indent"
            variants={itemFadeIn(11)}
          >
            {'}'}
          </motion.div>
          <motion.div 
            className="code-line"
            variants={itemFadeIn(12)}
          >
            {'}'} <span className="code-keyword">catch</span> (error) {'{'}
          </motion.div>
          <motion.div 
            className="code-line indent"
            variants={itemFadeIn(13)}
          >
            <span className="code-variable">console</span>.<span className="code-method">log</span>(<span className="code-string">'Let me help you find your way back'</span>);
          </motion.div>
          <motion.div 
            className="code-line"
            variants={itemFadeIn(14)}
          >
            {'}'}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
