import './Footer.css';
import { 
  FaGithub, FaLinkedin, FaYoutube,
  FaGlobe, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiDeviantart } from 'react-icons/si';

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
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Ian Skelskey</h3>
            <p>Software Engineer & Designer</p>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <nav className="social-links">
              {!socialLinks || socialLinks.length === 0 ? (
                <p>Loading social links...</p>
              ) : (
                socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel || `Follow on ${link.platform}`}
                    className="social-link"
                  >
                    {renderSocialIcon(link.platform, link.ariaLabel)}
                    <span className="visually-hidden">{link.platform}</span>
                  </a>
                ))
              )}
            </nav>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p>Made with <span aria-label="love">❤️</span> by Ian Skelskey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
