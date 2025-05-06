import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gridContainer, itemFadeIn, staggerContainer } from '../animations';
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
      variants={gridContainer}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <motion.div 
          key={category} 
          className="skill-category"
          variants={itemFadeIn(index)}
        >
          <motion.h3 variants={itemFadeIn(0)}>{category}</motion.h3>
          <motion.ul variants={staggerContainer(0.02)}>
            {skills.map((skill, idx) => (
              <motion.li key={skill.id} variants={itemFadeIn(idx)}>
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
