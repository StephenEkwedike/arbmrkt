import axios from 'axios'

// URLs for APIs
const predictitURL = 'https://www.predictit.org/api/marketdata/all/';
const polymarketURL = 'https://polymarket.api/graphql';

async function fetchPredictitMarkets() {
    try {
        const response = await axios.get(predictitURL);
        return response.data.markets;
    } catch (error) {
        console.error('Error fetching Predictit data', error);
    }
}

async function fetchPolymarketMarkets() {
    try {
        const response = await axios.post(polymarketURL, {
            query: `{
              markets {
                id
                question
                outcomes {
                  price
                }
              }
            }`
        });
        return response.data.data.markets;
    } catch (error) {
        console.error('Error fetching Polymarket data', error);
    }
}

export async function findArbitrageOpportunities() {
    const predictitMarkets = await fetchPredictitMarkets();
    const polymarketMarkets = await fetchPolymarketMarkets();

    const opportunities = [];

    predictitMarkets.forEach(pMarket => {
        const correspondingMarket = polymarketMarkets.find(pm => pm.question === pMarket.name);

        if (correspondingMarket) {
            const pPrice = pMarket.contracts[0].lastTradePrice; 
            const pmPrice = correspondingMarket.outcomes[0].price;
            const pLosingPrice = 1 - pPrice;
            const pmLosingPrice = 1 - pmPrice;

            let opportunityType = '';
            let totalCost = 0;
            let gainChance = 0;

            if (pPrice + pmPrice < 1) {
                opportunityType = 'Winning Strategy';
                totalCost = pPrice + pmPrice;
                gainChance = (1 - totalCost) * 100;
            } else if (pLosingPrice + pmLosingPrice < 1) {
                opportunityType = 'Losing Strategy';
                totalCost = pLosingPrice + pmLosingPrice;
                gainChance = (1 - totalCost) * 100;
            }

            if (opportunityType) {
                opportunities.push({
                    marketName: pMarket.name,
                    opportunityType,
                    totalCost: totalCost.toFixed(2),
                    gainChance: gainChance.toFixed(2),
                    predictitLink: `https://www.predictit.org/markets/detail/${pMarket.id}`,
                    polymarketLink: `https://polymarket.com/market/${correspondingMarket.id}`
                });
            }
        }
    });

    return opportunities;
}


