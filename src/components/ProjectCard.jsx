import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IconRenderer from './IconRenderer';
import './ProjectCard.css';

const ProjectCard = ({ project, index, minimal = false }) => {
  // Handle animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.05,
        duration: 0.35,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.2 } 
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
          <div className="project-icon">
            <IconRenderer icon={project.icon} />
          </div>
        )}
        <div className="project-image-container">
          <img 
            src={project.thumbnail || `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`}
            alt={project.title}
            className="project-image"
            loading="lazy"
          />
          <div className="project-overlay">
            <span>View Project</span>
          </div>
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          {!minimal && (
            <div className="project-tech">
              {project.skills.slice(0, 3).map(skill => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
              {project.skills.length > 3 && (
                <span className="tech-tag tech-tag-more">+{project.skills.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
