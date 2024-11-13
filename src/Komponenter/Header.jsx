import React, { useState, useEffect } from 'react';

const Header = () => {
  // State för att växla mellan dark och light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effekt för att hålla kvar användarens tema i localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Funktion för att växla mellan dark och light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Uppdatera dark/light mode på body
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header>
      <div className="container">
        <div className="left-section">
          <a id="logo" href="index.html">
            <img src="/bilder/logo.svg" alt="Logo" />
          </a>
          <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">Features</a>
          </nav>
        </div>

        <div className="switch">
          <input
            type="checkbox"
            id="toggle"
            checked={isDarkMode}
            onChange={toggleMode}
          />
          <label className="switch-label" htmlFor="toggle"></label>
          <span className="switch-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>

        <div>
          <a id="sign" href="#" className="btn-primary">
            <i className="fa fa-user"></i>
            <span>Sign In / Sign Up</span>
          </a>
        </div>

        <button className="btn-mobile">
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
