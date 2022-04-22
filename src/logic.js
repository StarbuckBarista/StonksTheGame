const shares = {
    "AAPL": 17.5,
    "TSLA": 36.1,
    "GM": 14.9,
    "HMC": 14.4,
    "BABA": 16.1,
    "DIS": 16.8,
    "SBUX": 15.6,
    "KO": 15.4,
    "MCD": 19.4,
    "HD": 20.6,
    "MSFT": 20.2,
    "ROKU": 16.3,
    "AMZN": 82.1,
    "GOOGL": 69.7,
    "SNOW": 18.2,
    "MDB": 22.8,
    "WMT": 17.3,
    "NFLX": 21.3,
    "TM": 17.5,
    "ORCL": 15.6,
    "IBM": 16.8,
    "COST": 26.6,
    "AMC": 14.4,
    "GME": 17.3,
    "LIC": 16.3,
    "ETH": 80.7
}

function updateValue (stockSymbol, actionButton) {

    const stockQuantity = document.getElementById(stockSymbol + "-quantity");
    const stockValue = document.getElementById(stockSymbol + "-value");
    const stockShares = shares[stockSymbol];
    const action = actionButton.textContent;

    let updatedStockShares;

    if (action.includes("Sell")) { updatedStockShares = stockShares - parseInt(stockQuantity.value); }
    if (action.includes("Buy")) { updatedStockShares = stockShares + parseInt(stockQuantity.value); }

    const updatedStockValue = parseInt(stockValue.textContent) / stockShares * updatedStockShares;
    stockValue.textContent = Math.round(updatedStockValue / 25) * 25;
    stockQuantity.value = 0;
}
