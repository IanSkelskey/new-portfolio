import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './ProjectPage.css';
import ProjectCard from '../components/ProjectCard';

const ProjectGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFiltering, setIsFiltering] = useState(false);
  
  // Extract all unique categories from projects
  const allCategories = projects.reduce((cats, project) => {
    const categories = Array.isArray(project.categories) 
      ? project.categories 
      : [project.category]; // Support both old and new format
      
    categories.forEach(cat => {
      if (cat && !cats.includes(cat)) {
        cats.push(cat);
      }
    });
    return cats;
  }, []);
  
  // Add 'All' category at the beginning
  const categories = ['all', ...allCategories].filter(Boolean);

  useEffect(() => {
    // Set filtering state to show animation cues
    setIsFiltering(true);
    
    // Small delay to allow animation to work
    const filterTimeout = setTimeout(() => {
      setFilteredProjects(
        filter === 'all' 
          ? projects 
          : projects.filter(project => {
              const projectCategories = Array.isArray(project.categories) 
                ? project.categories 
                : [project.category]; // Support both old and new format
              
              return projectCategories.includes(filter);
            })
      );
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(filterTimeout);
  }, [filter, projects]);

  return (
    <PageWrapper
      title="My Work"
      subtitle="Explore my projects in web development, design, and more."
      animate={false} // Turn off PageWrapper animations to let the grid handle its own
    >
      <div className="filter-controls">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
            disabled={isFiltering}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className={`project-grid-container ${isFiltering ? 'is-filtering' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="project-grid"
          layout
          transition={{
            layout: { type: "spring", damping: 30, stiffness: 300 }
          }}
        >
          <AnimatePresence mode="sync">
            {filteredProjects.length === 0 ? (
              <motion.div 
                className="no-projects-container"
                key="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <p className="no-projects">No projects in this category</p>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.path}
                  project={project}
                  index={index}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};

export default ProjectGrid;
