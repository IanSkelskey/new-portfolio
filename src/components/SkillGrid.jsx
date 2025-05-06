import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SkillGrid.css';

const SkillGrid = ({ skillsData }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  // Group skills by category for display
  const skillsByCategory = skillsData.categories.reduce((acc, category) => {
    acc[category] = skillsData.skills.filter(skill => skill.category === category);
    return acc;
  }, {});

  return (
    <motion.div 
      className="skills-grid" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <motion.div 
          key={category} 
          className="skill-category" /* Using skill-category class directly - we'll handle card styles in CSS */
          variants={itemVariants}
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
