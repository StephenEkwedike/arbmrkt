import React, { useState, useEffect } from 'react';
// import Page from './Page';
import Page from "./LandingPage";
import { findArbitrageOpportunities } from './arbitrageOpportunities';

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const loadOpportunities = async () => {
    const fetchedOpportunities = await findArbitrageOpportunities();
    setOpportunities(fetchedOpportunities);
  };

  useEffect(() => {
    loadOpportunities(); // Load opportunities on page load
  }, []);

  const handleRefresh = async (marketName) => {
    // Refresh specific opportunity when button is clicked
    const updatedOpportunities = await findArbitrageOpportunities();
    const refreshedOpportunity = updatedOpportunities.find(o => o.marketName === marketName);
    setOpportunities(prev => prev.map(o => (o.marketName === marketName ? refreshedOpportunity : o)));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Page
      opportunities={opportunities}
      onRefresh={handleRefresh}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
}

export default App;