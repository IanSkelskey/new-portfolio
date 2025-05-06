import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import { staggerContainer, itemFadeIn } from '../animations';
import './ProjectPage.css';

const ProjectGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
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
    // Filter projects immediately (removes the delay that was causing choppy transitions)
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
  }, [filter, projects]);

  // Use the staggerContainer from our animations
  const projectGridVariants = staggerContainer(0.05); // Faster stagger for smoother appearance

  return (
    <PageWrapper
      title="My Work"
      subtitle="Explore my projects in web development, design, and more."
      // Enable animations to maintain consistency with other pages
      animate={true}
    >
      <div className="filter-controls">
        {categories.map(category => (
          <motion.button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="project-grid-container"
        variants={projectGridVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="project-grid"
          layout
          transition={{
            layout: { type: "spring", damping: 30, stiffness: 300 }
          }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div 
                className="no-projects-container"
                key="no-projects"
                variants={itemFadeIn(0)}
                initial="hidden"
                animate="visible"
                exit="exit"
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
