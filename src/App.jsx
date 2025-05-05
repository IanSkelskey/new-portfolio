import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    fetch('/src/data/projects.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load projects.json');
        return res.json();
      })
      .then((data) => {
        setProjects(data.projects || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  if (loading) return <LoadingSpinner />;

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="content-container">
          {error && <div className="error-message">Error: {error}</div>}
          <Routes>
            <Route path="/" element={<ProjectGrid projects={projects} />} />
            <Route path="/projects/:projectPath" element={<ProjectDetail projects={projects} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
