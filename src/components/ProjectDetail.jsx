import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IconRenderer from './IconRenderer';
import './ProjectDetail.css';

const ProjectDetail = ({ projects, skillsData }) => {
  const { projectPath } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Find current, next and previous projects
  useEffect(() => {
    setLoading(true);
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
    
    setLoading(false);
  }, [projectPath, projects]);
  
  // Helper function to extract just the project identifier from path
  const getProjectIdentifier = (path) => {
    return path.split('/').pop();
  };

  // Helper function to get skill id from name
  const getSkillId = (skillName) => {
    if (!skillsData) return skillName.toLowerCase().replace(/\s+/g, '-');
    
    const skill = skillsData.skills.find(s => 
      s.name.toLowerCase() === skillName.toLowerCase()
    );
    
    return skill ? skill.id : skillName.toLowerCase().replace(/\s+/g, '-');
  };
  
  if (loading) {
    return (
      <div className="loading" aria-live="polite">
        <span>Loading project details...</span>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="loading" aria-live="polite">
        <span>Project not found</span>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }
  
  // Get categories (supporting both old and new format)
  const projectCategories = Array.isArray(project.categories) 
    ? project.categories 
    : project.category ? [project.category] : [];
    
  // Create a more accessible approach to accent colors
  // Only apply accent colors to decorative elements, not text
  const accentStyle = {
    // For decorative elements only (not affecting text contrast)
    accentDecoration: project.accentColor ? {
      backgroundColor: project.accentColor
    } : {},
    
    // For borders and non-text elements
    accentBorder: project.accentColor ? {
      borderColor: project.accentColor
    } : {},
    
    // CSS variable for project-specific accent - will be used with opacity values
    // to ensure it doesn't cause contrast issues
    accentVariable: project.accentColor ? {
      "--project-accent-color": project.accentColor,
      "--project-accent-transparent": `${project.accentColor}33` // 20% opacity version
    } : {}
  };
  
  return (
    <motion.div 
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={accentStyle.accentVariable}
    >
      <section className="project-hero">
        <div className="project-hero-content">
          {project.icon && (
            <div className="project-hero-icon" aria-hidden="true">
              <IconRenderer icon={project.icon} />
            </div>
          )}
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-meta">
            {project.date && <span className="project-date">{project.date}</span>}
            
            {projectCategories.length > 0 && (
              <div className="project-categories">
                {projectCategories.map(category => (
                  <span key={category} className="project-category">{category}</span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="project-hero-image">
          <img 
            src={project.thumbnail || `https://via.placeholder.com/1200x600?text=${encodeURIComponent(project.title)}`} 
            alt={`${project.title} screenshot or preview`}
          />
        </div>
      </section>
      
      <section className="project-content">
        <div className="project-description">
          <h2 className="section-heading">
            About the Project
          </h2>
          
          {/* Use pageBlurb if available, otherwise use description */}
          <p>{project.pageBlurb || project.description}</p>
          
          {/* Display structured content if available */}
          {project.content && project.content.length > 0 && 
            project.content.map((item, index) => {
              if (item.type === 'paragraph') {
                return <p key={index}>{item.content}</p>;
              }
              // Handle other content types as needed
              return null;
            })
          }
          
          {/* Only show skills section if skills are available */}
          {project.skills && project.skills.length > 0 && (
            <>
              <h2 className="section-heading">Technologies Used</h2>
              <div className="tech-stack">
                {project.skills.map(skill => (
                  <Link 
                    key={skill} 
                    to={`/skills/${getSkillId(skill)}`} 
                    className="tech-badge"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            </>
          )}
          
          {/* Project links section - only show if there are links available */}
          {(project.github || project.npmUrl || project.gptUrl || project.mobileAppUrl || project.desktopAppUrl || 
            (project.links && project.links.length > 0)) && (
            <div className="project-links-section">
              <h2>Project Links</h2>
              
              {/* Primary project links */}
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-github"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    GitHub Repository
                  </a>
                )}

                {project.npmUrl && (
                  <a 
                    href={project.npmUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-npm"
                    aria-label={`npm package for ${project.title}`}
                  >
                    npm Package
                  </a>
                )}
                
                {project.gptUrl && (
                  <a 
                    href={project.gptUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-gpt"
                    aria-label={`Try ${project.title} in ChatGPT`}
                  >
                    Try in ChatGPT
                  </a>
                )}
                
                {/* Live demo links from links array */}
                {project.links && project.links.some(link => link.title.toLowerCase().includes('live') || 
                                                            link.title.toLowerCase().includes('website') || 
                                                            link.title.toLowerCase().includes('demo')) && 
                  project.links.filter(link => link.title.toLowerCase().includes('live') || 
                                               link.title.toLowerCase().includes('website') || 
                                               link.title.toLowerCase().includes('demo')).map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-live"
                      aria-label={`${link.title} for ${project.title}`}
                    >
                      {link.title}
                    </a>
                  ))
                }
                
                {project.mobileAppUrl && (
                  <a 
                    href={project.mobileAppUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-mobile"
                    aria-label={`Mobile app for ${project.title}`}
                  >
                    Mobile App
                  </a>
                )}
                
                {project.desktopAppUrl && (
                  <a 
                    href={project.desktopAppUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-desktop"
                    aria-label={`Desktop app for ${project.title}`}
                  >
                    Desktop App
                  </a>
                )}
              </div>
              
              {/* Additional links from the links array that are not live/demo links */}
              {project.links && project.links.length > 0 && 
                project.links.filter(link => !(link.title.toLowerCase().includes('live') || 
                                               link.title.toLowerCase().includes('website') || 
                                               link.title.toLowerCase().includes('demo'))).length > 0 && (
                <div className="additional-links">
                  <h3>Additional Resources</h3>
                  <ul className="resources-list">
                    {project.links.filter(link => !(link.title.toLowerCase().includes('live') || 
                                                    link.title.toLowerCase().includes('website') || 
                                                    link.title.toLowerCase().includes('demo'))).map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`${link.title} resource for ${project.title}`}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      <section className="project-navigation" aria-label="Project navigation">
        <h2>More Projects</h2>
        <div className="project-nav-container">
          {prevProject && (
            <Link 
              to={`/projects/${getProjectIdentifier(prevProject.path)}`} 
              className="nav-card prev"
              aria-label={`Previous project: ${prevProject.title}`}
            >
              <div className="nav-image" aria-hidden="true">
                <img 
                  src={prevProject.thumbnail || `https://via.placeholder.com/300x200?text=${encodeURIComponent(prevProject.title)}`} 
                  alt="" 
                />
              </div>
              <div className="nav-content">
                <span className="nav-direction">Previous</span>
                <h3>{prevProject.title}</h3>
              </div>
            </Link>
          )}
          
          {nextProject && (
            <Link 
              to={`/projects/${getProjectIdentifier(nextProject.path)}`} 
              className="nav-card next"
              aria-label={`Next project: ${nextProject.title}`}
            >
              <div className="nav-content">
                <span className="nav-direction">Next</span>
                <h3>{nextProject.title}</h3>
              </div>
              <div className="nav-image" aria-hidden="true">
                <img 
                  src={nextProject.thumbnail || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nextProject.title)}`} 
                  alt="" 
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
