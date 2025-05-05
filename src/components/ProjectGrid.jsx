import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectGrid.css';

const ProjectGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    setFilteredProjects(
      filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter)
    );
  }, [filter, projects]);

  return (
    <section className="project-grid-section">
      <div className="section-intro">
        <h2>My Work</h2>
        <p>Explore my projects in web development, design, and more.</p>
      </div>

      <div className="filter-controls">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="project-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {filteredProjects.length === 0 ? (
          <p className="no-projects">No projects in this category</p>
        ) : (
          filteredProjects.map(project => (
            <motion.div 
              key={project.path}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Link to={project.path} className="project-link">
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
                  <div className="project-tech">
                    {project.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                    {project.skills.length > 3 && <span className="tech-tag">+{project.skills.length - 3}</span>}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;
