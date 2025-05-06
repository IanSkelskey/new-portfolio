import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IconRenderer from './IconRenderer';
import { itemFadeIn } from '../animations';
import './ProjectCard.css';

const ProjectCard = ({ project, index, minimal = false }) => {
  return (
    <motion.div 
      className={`project-card ${minimal ? 'project-card-minimal' : ''}`}
      variants={itemFadeIn(index)}
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
                <Link key={skill} to={`/skills/${skill.toLowerCase().replace(/\s+/g, '-')}`} className="tech-tag">
                  {skill}
                </Link>
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
