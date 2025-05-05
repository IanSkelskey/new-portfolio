import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [projects, setProjects] = useState([]);
  const [aboutData, setAboutData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load all data in parallel
    Promise.all([
      fetch('/src/data/projects.json').then((res) => res.json()),
      fetch('/src/data/about.json').then((res) => res.json()),
      fetch('/src/data/socialLinks.json').then((res) => res.json()),
    ])
      .then(([projectsData, about, social]) => {
        // Process projects to ensure consistent format (migrate from single category to categories array)
        const processedProjects = (projectsData.projects || []).map((project) => {
          // If project has category but not categories, convert to array
          if (project.category && !project.categories) {
            return {
              ...project,
              categories: [project.category],
            };
          }
          return project;
        });

        setProjects(processedProjects);
        setAboutData(about);
        setSocialData(social);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-container">
          {error && <div className="error-message">Error: {error}</div>}
          <Routes>
            <Route path="/" element={<ProjectGrid projects={projects} />} />
            <Route path="/about" element={<AboutPage aboutData={aboutData} socialData={socialData} />} />
            <Route path="/projects/:projectPath" element={<ProjectDetail projects={projects} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer socialLinks={socialData?.socialLinks} />
      </div>
    </Router>
  );
}

export default App;
