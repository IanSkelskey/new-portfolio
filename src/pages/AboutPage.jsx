import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SkillGrid from '../components/SkillGrid';
import CTASection from '../components/CTASection';
import { staggerContainer, itemFadeIn } from '../animations';
import './AboutPage.css';

const AboutPage = ({ aboutData, skillsData, socialData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemFadeIn(0)}>
          <h2>Hello, I'm {aboutData.profile.name}</h2>
          {aboutData.profile.bio.map((paragraph, index) => (
            <motion.p 
              key={index} 
              variants={itemFadeIn(index + 1)}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section skills-section"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemFadeIn(0)}>Skills & Technologies</motion.h2>
        <SkillGrid skillsData={skillsData} />
      </motion.section>

      <motion.section 
        className="about-section"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemFadeIn(0)}>Experience & Education</motion.h2>
        <motion.div className="timeline" variants={staggerContainer(0.1)}>
          {aboutData.timeline.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item" 
              variants={itemFadeIn(index)}
            >
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
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemFadeIn(0)}>Current Focus</motion.h2>
        <motion.div className="interests-content" variants={itemFadeIn(1)}>
          <motion.p variants={itemFadeIn(2)}>{aboutData.currentFocus.summary}</motion.p>
          <motion.div className="current-learning" variants={itemFadeIn(3)}>
            <motion.h3 variants={itemFadeIn(4)}>Currently learning:</motion.h3>
            <motion.ul variants={staggerContainer(0.05)}>
              {aboutData.currentFocus.learning.map((item, index) => (
                <motion.li key={index} variants={itemFadeIn(index)}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div 
        variants={itemFadeIn(0)}
        initial="hidden"
        animate="visible"
      >
        <CTASection
          title="Let's Connect"
          description="I'm always interested in new projects, collaborations, or just chatting about technology and creative work."
          primaryButton={{ text: 'Contact Me', to: '/contact' }}
          secondaryButton={{ text: 'View My Projects', to: '/projects' }}
        />
      </motion.div>
    </PageWrapper>
  );
};

export default AboutPage;
