import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerFadeContainer, itemFadeIn, cardHoverTransition } from '../animations';
import './SkillGrid.css';

const SkillGrid = ({ skillsData }) => {
  // Group skills by category for display
  const skillsByCategory = skillsData.categories.reduce((acc, category) => {
    acc[category] = skillsData.skills.filter(skill => skill.category === category);
    return acc;
  }, {});

  return (
    <motion.div 
      className="skills-grid" 
      variants={staggerFadeContainer(0.15)}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <motion.div 
          key={category} 
          className="skill-category"
          variants={itemFadeIn(index, 0.08)}
          whileHover={cardHoverTransition.whileHover}
        >
          <h3>{category}</h3>
          <motion.span className="skills-count">
            {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
          </motion.span>
          <motion.ul 
            variants={staggerFadeContainer(0.01)}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, idx) => (
              <motion.li key={skill.id} variants={itemFadeIn(idx, 0.01)}>
                <Link 
                  to={`/skills/${skill.id}`} 
                  className="skill-link"
                  aria-label={`View details about ${skill.name}`}
                >
                  {skill.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillGrid;
