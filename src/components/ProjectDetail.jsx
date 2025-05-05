import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IconRenderer from './IconRenderer';
import './ProjectDetail.css';

const ProjectDetail = ({ projects }) => {
  const { projectPath } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  
  // Find current, next and previous projects
  useEffect(() => {
    const currentProjectIndex = projects.findIndex(p => p.path === `/projects/${projectPath}`);
    if (currentProjectIndex !== -1) {
      setProject(projects[currentProjectIndex]);
      
      // Set next project, cycle to first if at the end
      setNextProject(
        currentProjectIndex < projects.length - 1 
        ? projects[currentProjectIndex + 1] 
        : projects[0]
      );
      
      // Set previous project, cycle to last if at the beginning
      setPrevProject(
        currentProjectIndex > 0 
        ? projects[currentProjectIndex - 1] 
        : projects[projects.length - 1]
      );
    }
  }, [projectPath, projects]);
  
  if (!project) {
    return <div className="loading">Project not found</div>;
  }
  
  // Helper function to extract just the project identifier from path
  const getProjectIdentifier = (path) => {
    // Extract the last part of the path (the identifier)
    return path.split('/').pop();
  };
  
  // Get categories (supporting both old and new format)
  const projectCategories = Array.isArray(project.categories) 
    ? project.categories 
    : [project.category];
  
  return (
    <motion.div 
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="project-hero">
        <div className="project-hero-content">
          {project.icon && (
            <div className="project-hero-icon">
              <IconRenderer icon={project.icon} />
            </div>
          )}
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-meta">
            <span className="project-date">{project.date}</span>
            <div className="project-categories">
              {projectCategories.map(category => (
                <span key={category} className="project-category">{category}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="project-hero-image">
          <img 
            src={project.thumbnail || `https://via.placeholder.com/1200x600?text=${encodeURIComponent(project.title)}`} 
            alt={project.title} 
          />
        </div>
      </section>
      
      <section className="project-content">
        <div className="project-description">
          <h2>About the Project</h2>
          <p>{project.pageBlurb || project.description}</p>
          
          {/* Display project content if available */}
          {project.content && project.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index}>{item.content}</p>;
            }
            // Add more content types as needed
            return null;
          })}
          
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            {project.skills.map(skill => (
              <span key={skill} className="tech-badge">{skill}</span>
            ))}
          </div>
          
          {/* Project links section */}
          <div className="project-links-section">
            <h2>Project Links</h2>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                  GitHub Repository
                </a>
              )}
              
              {project.deploymentUrl && (
                <a href={project.deploymentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                  Live Demo
                </a>
              )}
              
              {project.pwaUrl && (
                <a href={project.pwaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-pwa">
                  PWA Version
                </a>
              )}
              
              {project.webUiUrl && (
                <a href={project.webUiUrl} target="_blank" rel="noopener noreferrer" className="btn btn-webui">
                  Web UI
                </a>
              )}
            </div>
            
            {/* Additional links from the links array */}
            {project.links && project.links.length > 0 && (
              <div className="additional-links">
                <h3>Additional Resources</h3>
                <ul className="resources-list">
                  {project.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="project-navigation">
        <h2>More Projects</h2>
        <div className="project-nav-container">
          {prevProject && (
            <Link to={`/projects/${getProjectIdentifier(prevProject.path)}`} className="nav-card prev">
              <div className="nav-image">
                <img 
                  src={prevProject.thumbnail || `https://via.placeholder.com/300x200?text=${encodeURIComponent(prevProject.title)}`} 
                  alt={prevProject.title} 
                />
              </div>
              <div className="nav-content">
                <span className="nav-direction">Previous</span>
                <h3>{prevProject.title}</h3>
              </div>
            </Link>
          )}
          
          {nextProject && (
            <Link to={`/projects/${getProjectIdentifier(nextProject.path)}`} className="nav-card next">
              <div className="nav-content">
                <span className="nav-direction">Next</span>
                <h3>{nextProject.title}</h3>
              </div>
              <div className="nav-image">
                <img 
                  src={nextProject.thumbnail || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nextProject.title)}`} 
                  alt={nextProject.title} 
                />
              </div>
            </Link>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
