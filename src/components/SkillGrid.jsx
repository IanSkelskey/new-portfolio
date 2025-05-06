import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gridContainer, itemFadeIn } from '../animations';
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
          <h3>{category}</h3>
          <ul>
            {skills.map(skill => (
              <li key={skill.id}>
                <Link 
                  to={`/skills/${skill.id}`} 
                  className="skill-link"
                  aria-label={`View details about ${skill.name}`}
                >
                  {skill.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillGrid;
