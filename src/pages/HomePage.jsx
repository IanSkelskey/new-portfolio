import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import './HomePage.css';

const HomePage = ({ projects = [], socialLinks = [] }) => {
  // Filter featured projects only
  const featuredProjects = projects.filter(project => project.featured);

  // Stagger animation for children elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Ian Skelskey
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            Software Engineer & Designer
          </motion.p>
          <motion.p variants={itemVariants} className="hero-description">
            Creating elegant, impactful web and game experiences with a focus on clean code, 
            accessibility, and meaningful user interactions.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              Explore Projects <FaArrowRight />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="hero-social">
            <a href="https://github.com/ianskelskey" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ianskelskey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section>
        <div className="section-container">
          <h2 className="section-title">My Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Web Development</h3>
              <p>Building responsive, accessible web applications using modern frameworks and design principles.</p>
            </div>
            <div className="expertise-card">
              <h3>Open Source</h3>
              <p>Contributing to the Evergreen ILS project and other open source initiatives with a focus on libraries and education.</p>
            </div>
            <div className="expertise-card">
              <h3>Game Development</h3>
              <p>Creating engaging game experiences using Godot, Lua, and other technologies with a focus on mechanics and design.</p>
            </div>
            <div className="expertise-card">
              <h3>UI/UX Design</h3>
              <p>Designing intuitive interfaces that prioritize accessibility and user experience across platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Using the reusable ProjectCard component */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="section-container">
            <h2 className="section-title">Featured Projects</h2>
            <motion.div 
              className="featured-grid"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {featuredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard 
                  key={project.path}
                  project={project}
                  index={index}
                  minimal
                />
              ))}
            </motion.div>
            <div className="view-all">
              <Link to="/projects" className="btn btn-secondary">
                View All Projects <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Updated for better contrast */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's Build Something Together</h2>
          <p>I'm always interested in new opportunities and collaborations.</p>
          <div className="cta-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
            <a href="mailto:contact@ianskelskey.com" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
