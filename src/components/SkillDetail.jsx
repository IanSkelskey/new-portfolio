import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './SkillDetail.css';

const SkillDetail = ({ skillsData, projects }) => {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    if (skillsData && skillsData.skills && projects) {
      // Find the skill by ID
      const foundSkill = skillsData.skills.find(s => s.id === skillId);
      
      if (foundSkill) {
        setSkill(foundSkill);
        
        // Find projects that use this skill
        const skillName = foundSkill.name;
        const matchingProjects = projects.filter(project => 
          project.skills && project.skills.some(
            projectSkill => projectSkill.toLowerCase() === skillName.toLowerCase()
          )
        );
        
        setRelatedProjects(matchingProjects);
      }
    }
    
    setLoading(false);
  }, [skillId, skillsData, projects]);
  
  if (loading) {
    return (
      <div className="loading" aria-live="polite">
        <span>Loading skill details...</span>
      </div>
    );
  }
  
  if (!skill) {
    return (
      <div className="not-found-container" aria-live="polite">
        <h2>Skill Not Found</h2>
        <p>Sorry, we couldn't find information about this skill.</p>
        <Link to="/about" className="btn btn-primary">
          Back to Skills
        </Link>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <div className="skill-detail-page">
      <section className="skill-hero">
        <div className="skill-hero-content">
          <Link to="/about" className="back-link">
            ← Back to About Me
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skill.name}
          </motion.h1>
          <motion.div 
            className="skill-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="skill-category">{skill.category}</span>
          </motion.div>
          <motion.p 
            className="skill-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {skill.description}
          </motion.p>
        </div>
      </section>
      
      <motion.section 
        className="related-projects-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Projects Using {skill.name}</motion.h2>
        
        {relatedProjects.length === 0 ? (
          <motion.p variants={itemVariants} className="no-projects">
            No projects currently use this skill.
          </motion.p>
        ) : (
          <motion.div className="related-projects-grid" variants={containerVariants}>
            {relatedProjects.map((project, index) => (
              <ProjectCard 
                key={project.path}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </motion.section>
      
      <section className="related-skills-section">
        <h2>Related Skills</h2>
        <div className="related-skills">
          {skillsData.skills
            .filter(s => s.category === skill.category && s.id !== skill.id)
            .slice(0, 6) // Limit to avoid overwhelming the user
            .map(relatedSkill => (
              <Link 
                key={relatedSkill.id} 
                to={`/skills/${relatedSkill.id}`}
                className="related-skill-link"
              >
                {relatedSkill.name}
              </Link>
            ))}
            
          {/* If no related skills found */}
          {skillsData.skills.filter(s => s.category === skill.category && s.id !== skill.id).length === 0 && (
            <p className="no-related-skills">No related skills found in this category.</p>
          )}
        </div>
      </section>
      
      <section className="skill-cta">
        <h2>Interested in my work with {skill.name}?</h2>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">Explore All Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default SkillDetail;
