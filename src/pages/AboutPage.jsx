import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SkillGrid from '../components/SkillGrid';
import './AboutPage.css';

const AboutPage = ({ aboutData, skillsData, socialData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (aboutData && skillsData) {
      setLoading(false);
    } else {
      setError("Missing required data");
    }
  }, [aboutData, skillsData]);

  if (loading) return <div className="loading">Loading about information...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <PageWrapper 
      title="About Me" 
      subtitle={aboutData.profile.title}
      className="about-page"
    >
      <motion.section 
        className="about-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2>Hello, I'm {aboutData.profile.name}</h2>
          {aboutData.profile.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section skills-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Skills & Technologies</motion.h2>
        <SkillGrid skillsData={skillsData} />
      </motion.section>

      <motion.section 
        className="about-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Experience & Education</motion.h2>
        <motion.div className="timeline" variants={containerVariants}>
          {aboutData.timeline.map((item, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section interests-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Current Focus</motion.h2>
        <motion.div className="interests-content" variants={itemVariants}>
          <p>{aboutData.currentFocus.summary}</p>
          <div className="current-learning">
            <h3>Currently learning:</h3>
            <ul>
              {aboutData.currentFocus.learning.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>

      <section className="cta-section">
        <h2>Let's Connect</h2>
        <p>
          I'm always interested in new projects, collaborations, or just chatting about 
          technology and creative work.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">Contact Me</a>
          <a href="/projects" className="btn btn-secondary">View My Projects</a>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
