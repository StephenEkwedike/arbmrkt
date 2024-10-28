import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, RefreshCw } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 border-2 border-black dark:border-white rounded-none"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
  </button>
);

const ArbitrageCard = ({ marketName, opportunityType, totalCost, gainChance, predictitLink, polymarketLink, onRefresh }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-white rounded-none p-4 m-4 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]">
      <div className="border-b-4 border-black dark:border-white pb-2 mb-4">
        <h3 className="text-2xl font-bold dark:text-white">{marketName}</h3>
        <span className="text-purple-600 dark:text-purple-400 font-bold">{opportunityType}</span>
      </div>
      <div className="mb-4">
        <p className="mb-2 dark:text-white">
          Total Cost: <span className="font-bold">${totalCost}</span>
        </p>
        <p className="mb-4 dark:text-white">
          Chance to Gain: <span className="font-bold">{gainChance}%</span>
        </p>
        <div className="flex flex-col space-y-2">
          <a href={predictitLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-300 dark:bg-yellow-600 border-2 border-black dark:border-white px-4 py-2 font-bold hover:bg-yellow-400 dark:hover:bg-yellow-700 transition-colors dark:text-white">
            Predictit Market
          </a>
          <a href={polymarketLink} target="_blank" rel="noopener noreferrer" className="bg-purple-300 dark:bg-purple-600 border-2 border-black dark:border-white px-4 py-2 font-bold hover:bg-purple-400 dark:hover:bg-purple-700 transition-colors dark:text-white">
            Polymarket
          </a>
        </div>
      </div>
      <button onClick={onRefresh} className="w-full bg-green-300 dark:bg-green-600 border-2 border-black dark:border-white py-2 font-bold flex items-center justify-center hover:bg-green-400 dark:hover:bg-green-700 transition-colors dark:text-white">
        <RefreshCw className="w-5 h-5 mr-2" /> Refresh
      </button>
    </div>
  );
};

const LandingPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulating data fetch
    setOpportunities([
      { marketName: "US Election 2024", opportunityType: "Arbitrage", totalCost: 100, gainChance: 5, predictitLink: "#", polymarketLink: "#" },
      { marketName: "Oscar Best Picture", opportunityType: "Hedge", totalCost: 50, gainChance: 10, predictitLink: "#", polymarketLink: "#" },
      { marketName: "Bitcoin Price EOY", opportunityType: "Arbitrage", totalCost: 200, gainChance: 7, predictitLink: "#", polymarketLink: "#" },
    ]);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-yellow-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 font-sans transition-colors duration-200`}>
      <header className="border-b-4 border-black dark:border-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">arbmrkt</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="font-bold hover:underline dark:text-white">Home</a>
            <a href="#" className="font-bold hover:underline dark:text-white">Markets</a>
            <a href="#" className="font-bold hover:underline dark:text-white">About</a>
            <a href="#" className="font-bold hover:underline dark:text-white">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search" className="border-2 border-black dark:border-white rounded-none px-2 py-1 bg-white dark:bg-gray-800 text-black dark:text-white" />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2">🔍</span>
            </div>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Menu className="md:hidden w-6 h-6 dark:text-white" />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="bg-white dark:bg-gray-800 border-4 border-black dark:border-white rounded-none p-8 mb-8 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Welcome to arbmrkt</h2>
          <p className="text-xl mb-4 dark:text-gray-300">Discover and seize arbitrage opportunities across prediction markets.</p>
          <button className="bg-purple-300 dark:bg-purple-600 border-2 border-black dark:border-white px-6 py-2 font-bold text-lg hover:bg-purple-400 dark:hover:bg-purple-700 transition-colors dark:text-white">
            Get Started
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Latest Opportunities</h2>
          <div className="flex flex-wrap -mx-4">
            {opportunities.map((opportunity) => (
              <ArbitrageCard
                key={opportunity.marketName}
                {...opportunity}
                onRefresh={() => console.log(`Refreshing ${opportunity.marketName}`)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black dark:border-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="font-bold dark:text-white">© 2024 arbmrkt | Exploit market inefficiencies effortlessly</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;