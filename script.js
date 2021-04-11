const fs = require('fs');
const aggregateStocks = {};
const IRTexts = [];

const stocks = [
    { type: 'C', name: 'FLRY3F', quantity: 11, value: 338.58},
    { type: 'V', name: 'ABEV3', quantity: 100, value: 1918.00},
    { type: 'V', name: 'ABEV3', quantity: 400, value: 7672.00},
    { type: 'C', name: 'ITSA4', quantity: 400, value: 5504.00}
];

for (stock of stocks) {
    const stockName = stock.name;
    const isFractional = stockName.charAt(stockName.length - 1) === 'F';
    const name = isFractional ? stockName.substring(0, stockName.length - 1) : stockName;

    aggregateStocks[name] = aggregateStocks[name] ? aggregateStocks[name] : [];
    aggregateStocks[name].push(stock);
}

for (companyName of Object.keys(aggregateStocks)) {
    const companyTrades = aggregateStocks[companyName]
    let totalCost = 0;
    let totalStocks = 0;

    for (trade of companyTrades) {
        if (trade.type === 'C')  {
            totalCost = totalCost + trade.value;
            totalStocks = totalStocks + trade.quantity;
        }

        if (trade.type === 'V') {     
            totalCost = totalCost - trade.value;
            totalStocks = totalStocks - trade.quantity;   
        }
    }
    
    const BRL = totalCost.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    IRTexts.push(`${totalStocks} AÇOES DE ${companyName}. CUSTO TOTAL DE ${BRL}`)
}

fs.writeFileSync(`${__dirname}/result.txt`, IRTexts.join('\n'))