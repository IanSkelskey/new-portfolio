import { useState, useEffect } from 'react';
import socialLinksData from '../data/socialLinks.json';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSocialLinks(socialLinksData.socialLinks || []);
    setLoading(false);
  }, []);

  // Function to render the appropriate SVG icon based on platform
  const renderSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.83-.26.83-.58v-2.03c-3.33.73-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.77.41-1.3.75-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.3c0 .31.2.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8S8.3 4 8.3 5s-.8 1.7-1.8 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.4V19z"></path>
          </svg>
        );
      case 'deviantart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.225.436V24H8.05l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.155-7.977.23-.43z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return null;
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
              {loading ? (
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
          <p>&copy; {currentYear} Ian Skelskey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
