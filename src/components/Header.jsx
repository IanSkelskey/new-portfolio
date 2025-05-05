import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Ian Skelskey</h1>
        </Link>
        
        <div className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
