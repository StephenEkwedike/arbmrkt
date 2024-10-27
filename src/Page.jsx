import React from 'react';
import './Page.css';
import NeobrutalistArbitrageCard from './NeobrutalistArbitrageCard';
import { Menu, Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="theme-toggle"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
  </button>
);

const Page = ({ opportunities, onRefresh, darkMode, toggleDarkMode }) => {
  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">arbmrkt</h1>
          <nav className="header-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Markets</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <div className="header-actions">
            <div className="search-container">
              <input type="text" placeholder="Search" className="search-input" />
              <span className="search-icon">🔍</span>
            </div>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Menu className="menu-icon" />
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="highlight-section">
          <h2 className="section-title">Welcome to arbmrkt</h2>
          <p className="section-description">
            Discover and seize arbitrage opportunities across prediction markets.
          </p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="opportunities-section">
          <h2 className="section-title">Latest Opportunities</h2>
          <div className="opportunities-grid">
            {opportunities.map((opportunity) => (
              <NeobrutalistArbitrageCard
                key={opportunity.marketName}
                {...opportunity}
                onRefresh={() => onRefresh(opportunity.marketName)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© 2024 arbmrkt | Exploit market inefficiencies effortlessly</p>
      </footer>
    </div>
  );
};

export default Page;