import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage = () => {
  // Animation variants for staggered animations
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

  // Skills organized by category
  const skills = {
    "Programming Languages": [
      "JavaScript", "TypeScript", "Lua", "Java", "Python", "SQL", "Perl"
    ],
    "Frontend": [
      "React", "Angular", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"
    ],
    "Backend & Databases": [
      "Node.js", "PostgreSQL", "Firebase", "RESTful APIs"
    ],
    "Game Development": [
      "Godot Engine", "LÖVE2D", "Game Design", "Sprite Art"
    ],
    "Design": [
      "Figma", "Adobe Photoshop", "Adobe Illustrator", "UI/UX"
    ],
    "Other": [
      "Git", "Accessibility (a11y)", "Responsive Design", "Technical Writing"
    ]
  };

  // Timeline data for education and work experience
  const timeline = [
    {
      year: "2023",
      title: "BS in Software Engineering",
      institution: "Arizona State University",
      description: "Graduated with a Bachelor of Science in Software Engineering"
    },
    {
      year: "2022",
      title: "Field Day Capstone Project",
      institution: "Arizona State University",
      description: "Led development of a wildlife research data management tool"
    },
    {
      year: "2019 - Present",
      title: "Annual Toy Drive Organizer",
      institution: "Connecticut Children's Medical Center",
      description: "Organize annual charity event benefiting Connecticut Children's Medical Center"
    },
    {
      year: "2014",
      title: "Zelda: Ocarina of Time Retexture Project",
      institution: "Community Project",
      description: "Contributed to community-driven retexture project for The Legend of Zelda: Ocarina of Time"
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Me</h1>
          <p className="about-subtitle">Software Engineer & Designer</p>
        </div>
      </section>

      <motion.section 
        className="about-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2>Hello, I'm Ian</h2>
          <p>
            I'm a software engineer with a passion for creating elegant, user-centered digital experiences. With a 
            Bachelor's degree in Software Engineering from Arizona State University and an Associate's degree in 
            Mathematics & Computer Science, I blend technical knowledge with creative problem-solving.
          </p>
          <p>
            As an Evergreen ILS specialist, I contribute to open-source projects involving PostgreSQL, Perl, and Angular. 
            My interests span across game development (particularly with Godot and Lua), generative AI technologies, 
            and front-end design systems.
          </p>
          <p>
            When I'm not coding, you might find me creating music, taking photographs, or designing visual art—creative 
            pursuits that inform my approach to software development.
          </p>
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section skills-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Skills & Technologies</motion.h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} className="skill-category" variants={itemVariants}>
              <h3>{category}</h3>
              <ul>
                {skillList.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Experience & Education</motion.h2>
        <motion.div className="timeline" variants={containerVariants}>
          {timeline.map((item, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section interests-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Current Focus</motion.h2>
        <motion.div className="interests-content" variants={itemVariants}>
          <p>
            I'm currently expanding my skills in game development with Godot Engine and exploring 
            advanced applications of AI in creative workflows. I'm also working on several 
            open-source contributions and diving deeper into accessible web design practices.
          </p>
          <div className="current-learning">
            <h3>Currently learning:</h3>
            <ul>
              <li>Advanced Godot Engine techniques</li>
              <li>Integration of LLMs in creative applications</li>
              <li>WebGL and 3D rendering for web</li>
              <li>Functional programming patterns</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      <section className="cta-section">
        <h2>Let's Connect</h2>
        <p>
          I'm always interested in new projects, collaborations, or just chatting about 
          technology and creative work.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">Contact Me</a>
          <a href="/projects" className="btn btn-secondary">View My Projects</a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
