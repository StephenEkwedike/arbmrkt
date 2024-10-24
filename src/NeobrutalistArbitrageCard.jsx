import './NeobrutalistArbitrageCard.css';

const NeobrutalistArbitrageCard = ({ marketName, opportunityType, totalCost, gainChance, predictitLink, polymarketLink, onRefresh }) => {
  return (
    <div className="neobrutalist-card">
      <div className="card-header">
        <h2 className="card-title">{marketName}</h2>
        <span className="card-opportunity-type">{opportunityType}</span>
      </div>
      <div className="card-content">
        <p className="card-description">
          Total Cost: ${totalCost} <br />
          Chance to Gain: {gainChance}%
        </p>
        <div className="card-links">
          <a href={predictitLink} target="_blank" rel="noopener noreferrer" className="market-link">
            Predictit Market
          </a>
          <a href={polymarketLink} target="_blank" rel="noopener noreferrer" className="market-link">
            Polymarket
          </a>
        </div>
      </div>
      <div className="card-footer">
        <button className="card-button" onClick={onRefresh}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NeobrutalistArbitrageCard;
