import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaDribbble, 
  FaInstagram, FaYoutube, FaBehance, FaMedium, FaStackOverflow,
  FaGlobe, FaDiscord, FaTwitch, FaDeviantart
} from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';
import './ContactPage.css';

const ContactPage = ({ socialLinks = [] }) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Function to render the appropriate icon based on platform
  const renderSocialIcon = (platform) => {
    const iconProps = {
      'aria-hidden': 'true',
      focusable: 'false',
      size: "1.5rem"
    };

    // Match platform name to the appropriate icon
    switch (platform.toLowerCase()) {
      case 'github':
        return <FaGithub {...iconProps} />;
      case 'linkedin':
        return <FaLinkedin {...iconProps} />;
      case 'twitter':
      case 'x':
        return <FaTwitter {...iconProps} />;
      case 'dribbble':
        return <FaDribbble {...iconProps} />;
      case 'instagram':
        return <FaInstagram {...iconProps} />;
      case 'youtube':
        return <FaYoutube {...iconProps} />;
      case 'behance':
        return <FaBehance {...iconProps} />;
      case 'medium':
        return <FaMedium {...iconProps} />;
      case 'stackoverflow':
        return <FaStackOverflow {...iconProps} />;
      case 'discord':
        return <FaDiscord {...iconProps} />;
      case 'twitch':
        return <FaTwitch {...iconProps} />;
      case 'deviantart':
        return <FaDeviantart {...iconProps} />;
      default:
        return <FaGlobe {...iconProps} />; // Default to web icon
    }
  };

  return (
    <PageWrapper 
      title="Contact Me" 
      subtitle="Let's connect and collaborate"
      className="contact-page"
    >
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-content" variants={itemVariants}>
          <h2>Connect With Me</h2>
          <p>
            Thanks for your interest in my work! The best way to reach out is through 
            my social platforms below. I'm always open to discussing new opportunities,
            collaborations, or just chatting about technology and design.
          </p>
        </motion.div>

        <motion.div className="social-section" variants={itemVariants}>
          <h2>Find Me Online</h2>
          <div className="social-links-grid">
            {socialLinks && socialLinks.length > 0 ? (
              socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel || `Connect with me on ${link.platform}`}
                  className="social-link-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="social-icon-wrapper">
                    {renderSocialIcon(link.platform)}
                  </div>
                  <div className="social-link-info">
                    <h3>{link.platform}</h3>
                    <p>{link.username || "Connect with me"}</p>
                  </div>
                </motion.a>
              ))
            ) : (
              <motion.p variants={itemVariants} className="loading-message">
                Social links are loading...
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div className="future-plans" variants={itemVariants}>
          <h2>Coming Soon</h2>
          <p>
            I'm planning to add more direct communication channels in the future.
            Check back soon for updates!
          </p>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};

export default ContactPage;
