import { motion } from 'framer-motion';
import { itemFadeIn, staggerContainer } from '../animations';
import { 
  FaGithub, FaLinkedin, FaYoutube,
  FaGlobe, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiDeviantart } from 'react-icons/si';
import './Footer.css';

const Footer = ({ socialLinks = [] }) => {
  const currentYear = new Date().getFullYear();

  // Function to render the appropriate icon based on platform with proper accessibility
  const renderSocialIcon = (platform, ariaLabel) => {
    const iconProps = {
      'aria-hidden': 'true', // Hide icon from screen readers as we're using aria-label on parent
      focusable: 'false'     // Prevent focus on SVG in some browsers
    };
    
    switch (platform.toLowerCase()) {
      case 'github':
        return <FaGithub {...iconProps} />;
      case 'linkedin':
        return <FaLinkedin {...iconProps} />;
      case 'deviantart':
        return <SiDeviantart {...iconProps} />;
      case 'youtube':
        return <FaYoutube {...iconProps} />;
      default:
        return <FaExternalLinkAlt {...iconProps} />;
    }
  };

  return (
    <footer className="site-footer">
      <motion.div 
        className="footer-container"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="footer-content"
          variants={staggerContainer(0.08)}
        >
          <motion.div className="footer-info" variants={itemFadeIn(0)}>
            <motion.h3 variants={itemFadeIn(0)}>Ian Skelskey</motion.h3>
            <motion.p variants={itemFadeIn(1)}>Software Engineer & Designer</motion.p>
          </motion.div>

          <motion.div className="footer-links" variants={itemFadeIn(1)}>
            <motion.h4 variants={itemFadeIn(0)}>Connect</motion.h4>
            <motion.nav 
              className="social-links"
              variants={staggerContainer(0.04)}
            >
              {!socialLinks || socialLinks.length === 0 ? (
                <motion.p variants={itemFadeIn(0)} className="loading-message">
                  Loading social links...
                </motion.p>
              ) : (
                socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel || `Follow on ${link.platform}`}
                    className="social-link"
                    variants={itemFadeIn(index)}
                  >
                    {renderSocialIcon(link.platform, link.ariaLabel)}
                    <span className="visually-hidden">{link.platform}</span>
                  </motion.a>
                ))
              )}
            </motion.nav>
          </motion.div>
        </motion.div>

        <motion.div className="copyright" variants={itemFadeIn(2)}>
          <motion.p variants={itemFadeIn(0)}>&copy; {currentYear} All rights reserved.</motion.p>
          <motion.p variants={itemFadeIn(1)}>Made with <span aria-label="love">❤️</span> by Ian Skelskey.</motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
