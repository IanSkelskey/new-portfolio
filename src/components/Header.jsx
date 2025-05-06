import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { itemFadeIn, staggerContainer } from '../animations';
import './Header.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { 
      opacity: 0, 
      y: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.07
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="logo">
            <h1>Ian Skelskey</h1>
          </Link>
        </motion.div>
        <div className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <motion.nav 
          className={`main-nav ${menuOpen ? 'open' : ''}`} 
          aria-label="Main navigation"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul variants={staggerContainer(0.07)}>
            <motion.li variants={navItemVariants}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
