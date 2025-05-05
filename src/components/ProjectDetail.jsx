import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-meta">
            <span className="project-date">{project.date}</span>
            <span className="project-category">{project.category}</span>
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
          
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            {project.skills.map(skill => (
              <span key={skill} className="tech-badge">{skill}</span>
            ))}
          </div>
          
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
