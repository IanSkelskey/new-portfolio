import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => {
  return (
    <motion.div 
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <div className="not-found-divider"></div>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary not-found-button">
          Back to Home
        </Link>
      </div>
      
      <div className="not-found-decoration">
        <div className="not-found-code-block">
          <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">page</span> = <span className="code-string">'awesome'</span>;</div>
          <div className="code-line"><span className="code-keyword">try</span> {'{'}</div>
          <div className="code-line indent"><span className="code-keyword">if</span> (page !== <span className="code-string">'found'</span>) {'{'}</div>
          <div className="code-line double-indent"><span className="code-keyword">throw new</span> <span className="code-error">Error</span>(<span className="code-string">'404'</span>);</div>
          <div className="code-line indent">{'}'}</div>
          <div className="code-line">{'}'} <span className="code-keyword">catch</span> (error) {'{'}</div>
          <div className="code-line indent"><span className="code-variable">console</span>.<span className="code-method">log</span>(<span className="code-string">'Let me help you find your way back'</span>);</div>
          <div className="code-line">{'}'}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
