import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IconRenderer from './IconRenderer';
import { itemFadeIn, staggerContainer } from '../animations';
import './ProjectCard.css';

const ProjectCard = ({ project, index, minimal = false }) => {
  // Project card container animation
  const cardVariants = itemFadeIn(index);
  
  // Content animations for staggered reveal
  const contentVariants = staggerContainer(0.04);
  
  // Image container animation
  const imageContainerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`project-card ${minimal ? 'project-card-minimal' : ''}`}
      variants={cardVariants}
      layout
    >
      <Link to={project.path} className="project-link">
        {project.icon && (
          <motion.div 
            className="project-icon"
            variants={itemFadeIn(0)}
            initial="hidden"
            animate="visible"
          >
            <IconRenderer icon={project.icon} />
          </motion.div>
        )}
        <motion.div 
          className="project-image-container"
          variants={imageContainerVariants}
        >
          <img 
            src={project.thumbnail || `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`}
            alt={project.title}
            className="project-image"
            loading="lazy"
          />
          <div className="project-overlay">
            <span>View Project</span>
          </div>
        </motion.div>
        <motion.div 
          className="project-info"
          variants={contentVariants}
        >
          <motion.h3 className="project-title" variants={itemFadeIn(0)}>{project.title}</motion.h3>
          <motion.p className="project-subtitle" variants={itemFadeIn(1)}>{project.subtitle}</motion.p>
          {!minimal && (
            <motion.div className="project-tech" variants={staggerContainer(0.03)}>
              {project.skills.slice(0, 3).map((skill, idx) => (
                <motion.span key={skill} variants={itemFadeIn(idx)}>
                  <Link to={`/skills/${skill.toLowerCase().replace(/\s+/g, '-')}`} className="tech-tag">
                    {skill}
                  </Link>
                </motion.span>
              ))}
              {project.skills.length > 3 && (
                <motion.span className="tech-tag tech-tag-more" variants={itemFadeIn(3)}>
                  +{project.skills.length - 3}
                </motion.span>
              )}
            </motion.div>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
