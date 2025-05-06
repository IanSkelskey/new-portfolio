import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import DetailWrapper from '../components/DetailWrapper';
import CTASection from '../components/CTASection';
import { staggerContainer, itemFadeIn } from '../animations';
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

  return (
    <DetailWrapper
      title={skill.name}
      subtitle={skill.description}
      backLink="/about"
      backText="Back to About Me"
      metadata={[skill.category]}
      className="skill-detail-page"
    >
      <motion.section 
        className="related-projects-section"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemFadeIn(0)}>Projects Using {skill.name}</motion.h2>
        
        {relatedProjects.length === 0 ? (
          <motion.p variants={itemFadeIn(1)} className="no-projects">
            No projects currently use this skill.
          </motion.p>
        ) : (
          <motion.div 
            className="related-projects-grid" 
            variants={staggerContainer(0.08)}
          >
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
      
      <motion.section 
        className="related-skills-section"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemFadeIn(0)}>Related Skills</motion.h2>
        <motion.div 
          className="related-skills"
          variants={staggerContainer(0.05)}
        >
          {skillsData.skills
            .filter(s => s.category === skill.category && s.id !== skill.id)
            .slice(0, 6) // Limit to avoid overwhelming the user
            .map((relatedSkill, index) => (
              <motion.div key={relatedSkill.id} variants={itemFadeIn(index)}>
                <Link 
                  to={`/skills/${relatedSkill.id}`}
                  className="related-skill-link"
                >
                  {relatedSkill.name}
                </Link>
              </motion.div>
            ))}
            
          {/* If no related skills found */}
          {skillsData.skills.filter(s => s.category === skill.category && s.id !== skill.id).length === 0 && (
            <motion.p className="no-related-skills" variants={itemFadeIn(0)}>
              No related skills found in this category.
            </motion.p>
          )}
        </motion.div>
      </motion.section>
      
      <motion.div 
        variants={itemFadeIn(0)}
        initial="hidden"
        animate="visible"
      >
        <CTASection 
          title={`Interested in my work with ${skill.name}?`}
          primaryButton={{ text: 'Explore All Projects', to: '/projects' }}
          secondaryButton={{ text: 'Get In Touch', to: '/contact' }}
        />
      </motion.div>
    </DetailWrapper>
  );
};

export default SkillDetail;
