import React, { useState, useEffect } from 'react';
import NeobrutalistArbitrageCard from './NeobrutalistArbitrageCard';
import { findArbitrageOpportunities } from './arbitrageOpportunities';

function App() {
  const [opportunities, setOpportunities] = useState([]);

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

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {opportunities.map((opportunity) => (
        <NeobrutalistArbitrageCard
          key={opportunity.marketName}
          marketName={opportunity.marketName}
          opportunityType={opportunity.opportunityType}
          totalCost={opportunity.totalCost}
          gainChance={opportunity.gainChance}
          predictitLink={opportunity.predictitLink}
          polymarketLink={opportunity.polymarketLink}
          onRefresh={() => handleRefresh(opportunity.marketName)}
        />
      ))}
    </div>
  );
}

export default App;
