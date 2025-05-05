import './Footer.css';
import { 
  FaGithub, FaLinkedin, FaYoutube,
  FaGlobe, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiDeviantart } from 'react-icons/si';

const Footer = ({ socialLinks = [] }) => {
  const currentYear = new Date().getFullYear();

  // Function to render the appropriate icon based on platform
  const renderSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <FaGithub />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'deviantart':
        return <SiDeviantart />;
      case 'youtube':
        return <FaYoutube />;
      default:
        return <FaExternalLinkAlt />;
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
                    aria-label={link.ariaLabel}
                  >
                    {renderSocialIcon(link.platform)}
                  </a>
                ))
              )}
            </nav>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p>Made with ❤️ by Ian Skelskey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
