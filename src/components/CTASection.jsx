import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
  accentColor,
}) => {
  // Function to render a button (supports both Link and external anchor)
  const renderButton = (buttonConfig, buttonType) => {
    if (!buttonConfig) return null;

    const { text, to, href, onClick, icon } = buttonConfig;
    const buttonClass = `btn btn-${buttonType}`;

    // If it's an internal link
    if (to) {
      return (
        <Link to={to} className={buttonClass} onClick={onClick}>
          {text}
          {icon && <span className="button-icon">{icon}</span>}
        </Link>
      );
    }

    // If it's an external link
    if (href) {
      return (
        <a 
          href={href} 
          className={buttonClass} 
          onClick={onClick}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {text}
          {icon && <span className="button-icon">{icon}</span>}
        </a>
      );
    }

    return null;
  };

  // Add accent color as a custom property if provided
  const style = accentColor ? { '--cta-bg-color': accentColor } : {};

  return (
    <section className={`cta-section ${className}`} style={style}>
      <div className="cta-content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        
        {(primaryButton || secondaryButton) && (
          <div className="cta-buttons">
            {renderButton(primaryButton, 'primary')}
            {renderButton(secondaryButton, 'secondary')}
          </div>
        )}
      </div>
    </section>
  );
};

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node
  }),
  className: PropTypes.string,
  accentColor: PropTypes.string
};

export default CTASection;
