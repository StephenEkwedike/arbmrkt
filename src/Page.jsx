import React from 'react';
import './Page.css';

const Page = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="header-title">Arbitrage Opportunities</h1>
        <p className="header-subtitle">Seize profitable trades between prediction markets</p>
      </header>

      <main className="main-content">
        <section className="highlight-section">
          <h2 className="section-title">Welcome to the Arbitrage Finder</h2>
          <p className="section-description">
            Discover inefficiencies across markets like PredictIt and Polymarket, and capitalize on guaranteed opportunities.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© 2024 Arbitrage Finder | Exploit market inefficiencies effortlessly</p>
      </footer>
    </div>
  );
};

export default Page;
