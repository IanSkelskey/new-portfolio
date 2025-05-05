import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
              <a href="https://github.com/IanSkelskey" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 6.7 18 7 18 7c.7 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1 .8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z"></path></svg>
              </a>
              <a href="https://linkedin.com/in/ianskelskey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8S8.3 4 8.3 5s-.8 1.7-1.8 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.4V19z"></path></svg>
              </a>
              <a href="mailto:contact@ianskelskey.com" aria-label="Email">
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
              </a>
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
