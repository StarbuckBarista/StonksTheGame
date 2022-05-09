const stocks = [
    'AAPL', 
    'AMC', 
    'AMZN', 
    'BABA', 
    'COST', 
    'DIS', 
    'ETH', 
    'GM', 
    'GME', 
    'GOOGL', 
    'HD', 
    'HMC', 
    'IBM', 
    'KO', 
    'LIC', 
    'MCD', 
    'MDB', 
    'MSFT', 
    'NFLX', 
    'ORCL', 
    'ROKU', 
    'SBUX', 
    'SNOW', 
    'TM', 
    'TSLA', 
    'WMT'
];

const values = {
    'AAPL': 375.0, 
    'AMC': 50.0, 
    'AMZN': 7150.0, 
    'BABA': 225.0, 
    'COST': 1325.0, 
    'DIS': 300.0, 
    'ETH': 7000.0, 
    'GM': 100.0, 
    'GME': 350.0, 
    'GOOGL': 5850.0, 
    'HD': 700.0, 
    'HMC': 50.0, 
    'IBM': 300.0, 
    'KO': 150.0, 
    'LIC': 250.0, 
    'MCD': 575.0, 
    'MDB': 925.0, 
    'MSFT': 650.0, 
    'NFLX': 775.0, 
    'ORCL': 175.0, 
    'ROKU': 250.0, 
    'SBUX': 175.0, 
    'SNOW': 450.0, 
    'TM': 375.0, 
    'TSLA': 2325.0, 
    'WMT': 350.0
};

const shares = {
    'AAPL': 17.5, 
    'AMC': 14.4, 
    'AMZN': 82.1, 
    'BABA': 16.1, 
    'COST': 26.6, 
    'DIS': 16.8, 
    'ETH': 80.7, 
    'GM': 14.9, 
    'GME': 17.3, 
    'GOOGL': 69.7, 
    'HD': 20.6, 
    'HMC': 14.4, 
    'IBM': 16.8, 
    'KO': 15.4, 
    'LIC': 16.3, 
    'MCD': 19.4, 
    'MDB': 22.8, 
    'MSFT': 20.2, 
    'NFLX': 21.3, 
    'ORCL': 15.6, 
    'ROKU': 16.3, 
    'SBUX': 15.6, 
    'SNOW': 18.2, 
    'TM': 17.5, 
    'TSLA': 36.1, 
    'WMT': 17.3
};

const actionCards = {
    'BF': {
        'AMZN': 0.985, 
        'COST': 1.02, 
        'GME': 1.03, 
        'HD': 1.02, 
        'WMT': 1.03
    },
    'FFB': {
        'GME': 0.9,
        'HMC': 0.925,
        'TM': 0.97,
        'TSLA': 1.15
    },
    'DGI': {
        'AAPL': 0.99,
        'AMZN': 0.8,
        'GOOGL': 0.85,
        'IBM': 0.95,
        'MDB': 0.92,
        'MSFT': 0.97,
        'ORCL': 0.96,
        'SNOW': 0.9
    },
    'TVL': {
        'DIS': 1.03,
        'NFLX': 0.95,
        'ROKU': 0.975
    },
    'NM': {
        'DIS': 0.97,
        'NFLX': 1.05,
        'ROKU': 1.025
    },
    'CHA': {
        'KO': 0.99,
        'MCD': 0.85,
        'SBUX': 1.025
    },
    'WSB': {
        'AMC': 1.75,
        'GME': 2.0
    },
    'CHP': {
        'AAPL': 0.99,
        'AMZN': 0.93,
        'BABA': 0.95,
        'DIS': 0.96,
        'GOOGL': 0.91,
        'IBM': 1.13,
        'MDB': 0.95,
        'MSFT': 0.95,
        'NFLX': 0.93,
        'ORCL': 0.98,
        'ROKU': 0.98,
        'SNOW': 0.96,
        'TSLA': 0.995
    },
    'FBI': {
        'ETH': 1.75,
        'LIC': 1.5
    },
    'CCH': {
        'ETH': 0.1,
        'LIC': 0.25
    },
    'NPD': {
        'AAPL': 0.5,
        'AMC': 0.5,
        'AMZN': 0.5,
        'BABA': 0.5,
        'COST': 0.5,
        'DIS': 0.5,
        'ETH': 0.5,
        'GM': 0.5,
        'GME': 0.5,
        'GOOGL': 0.5,
        'HD': 0.5,
        'HMC': 0.5,
        'IBM': 0.5,
        'KO': 0.5,
        'LIC': 0.5,
        'MCD': 0.5,
        'MDB': 0.5,
        'MSFT': 0.5,
        'NFLX': 0.5,
        'ORCL': 0.5,
        'ROKU': 0.5,
        'SBUX': 0.5,
        'SNOW': 0.5,
        'TM': 0.5,
        'TSLA': 0.5,
        'WMT': 0.5
    },
    'WS': {
        'AAPL': 0.93,
        'AMC': 0.98,
        'AMZN': 0.95,
        'HD': 1.03,
        'MCD': 0.95,
        'SBUX': 0.95
    },
    'UR': {
        'AMZN': 1.03,
        'BABA': 1.05,
        'DIS': 1.03,
        'GOOGL': 1.1,
        'MSFT': 1.05,
        'NFLX': 1.1,
        'ROKU': 1.075
    },
    'SAM': {
        'AAPL': 0.9,
        'AMZN': 1.05,
        'MSFT': 0.95,
        'WMT': 1.03
    },
    'EX': {
        'AMC': 1.1,
        'AMZN': 0.95,
        'DIS': 0.95,
        'NFLX': 0.95
    },
    'DO': {
        'DIS': 1.15,
        'KO': 1.05,
        'MCD': 1.075,
        'SBUX': 1.1
    },
    'NA': {
        'AMZN': 1.03,
        'COST': 1.1,
        'DIS': 1.02,
        'GME': 1.01,
        'HD': 1.05,
        'WMT': 1.1
    },
    'CC': {
        'AAPL': 1.03,
        'AMC': 1.01,
        'COST': 1.075,
        'DIS': 1.05,
        'GME': 1.02,
        'HD': 1.075,
        'WMT': 1.05
    },
    'FC': {
        'MCD': 1.15,
        'SBUX': 1.1
    },
    'SDC': {
        'GM': 1.1,
        'HMC': 1.05,
        'TM': 1.075,
        'TSLA': 1.07
    },
    'CAL-AAPL': {
        'AAPL': 0.5
    },
    'CAL-TSLA': {
        'TSLA': 0.5
    },
    'CAL-GM': {
        'GM': 0.5
    },
    'CAL-HMC': {
        'HMC': 0.5
    },
    'CAL-BABA': {
        'BABA': 0.5
    },
    'CAL-DIS': {
        'DIS': 0.5
    },
    'CAL-SBUX': {
        'SBUX': 0.5
    },
    'CAL-KO': {
        'KO': 0.5
    },
    'CAL-MCD': {
        'MCD': 0.5
    },
    'CAL-HD': {
        'HD': 0.5
    },
    'CAL-MSFT': {
        'MSFT': 0.5
    },
    'CAL-ROKU': {
        'ROKU': 0.5
    },
    'CAL-AMZN': {
        'AMZN': 0.5
    },
    'CAL-GOOGL': {
        'GOOGL': 0.5
    },
    'CAL-SNOW': {
        'SNOW': 0.5
    },
    'CAL-MDB': {
        'MDB': 0.5
    },
    'CAL-WMT': {
        'WMT': 0.5
    },
    'CAL-NFLX': {
        'NFLX': 0.5
    },
    'CAL-TM': {
        'TM': 0.5
    },
    'CAL-ORCL': {
        'ORCL': 0.5
    },
    'CAL-IBM': {
        'IBM': 0.5
    },
    'CAL-COST': {
        'COST': 0.5
    },
    'CAL-AMC': {
        'AMC': 0.5
    },
    'CAL-GME': {
        'GME': 0.5
    },
    'CAL-LIC': {
        'LIC': 0.5
    },
    'CAL-ETH': {
        'ETH': 0.5
    }
};

function updateValue (stockSymbol, actionButton) {

    const stockQuantity = document.getElementById(stockSymbol + '-quantity');
    const stockValue = document.getElementById(stockSymbol + '-value');
    const stockShares = shares[stockSymbol];
    const action = actionButton.textContent;

    const stockCost = document.getElementById(stockSymbol + '-cost');
    stockCost.textContent = Math.round(values[stockSymbol] * parseInt(stockQuantity.value) / 25) * 25;

    let updatedStockShares;

    if (action.includes('Sell') || action.includes('Cover')) { updatedStockShares = stockShares - parseInt(stockQuantity.value); }
    if (action.includes('Buy') || action.includes('Short')) { updatedStockShares = stockShares + parseInt(stockQuantity.value); }
    if (action.includes('Land')) { updatedStockShares = stockShares * (Math.random() * (1.375 - 0.625) + 0.625); }

    const updatedStockValue = parseInt(stockValue.textContent) / stockShares * updatedStockShares;
    values[stockSymbol] = updatedStockValue;
    stockQuantity.value = 0;
}

function applyActionCard () {

    const actionCardID = document.getElementById('action-card-id');
    const actionCard = actionCards[actionCardID.value];

    for (let actionCardStockSymbol in actionCard) {

        const actionCardUpdate = actionCard[actionCardStockSymbol];

        const stockValue = document.getElementById(actionCardStockSymbol + '-value');
        const updatedStockValue = parseInt(stockValue.textContent) * actionCardUpdate;
        values[actionCardStockSymbol] = updatedStockValue;
    };

    actionCardID.value = '';
}

function updateValues () {

    for (let stockSymbol in values) {

        const stockValue = document.getElementById(stockSymbol + '-value');
        stockValue.textContent = Math.round(values[stockSymbol] / 25) * 25;
    };
}

function heartbeat () {

    for (let stock of stocks) {

        const stockQuantity = document.getElementById(stock + '-quantity');
        if (parseInt(stockQuantity.value) !== 0) { return; }
    }

    const actionCardID = document.getElementById('action-card-id');
    if (actionCardID.value !== '') { return; }

    for (let stockSymbol in values) {

        const stockValue = values[stockSymbol];
        const variance = Math.random() * (1.0125 - 0.9875) + 0.9875;

        if (Math.random() > 0.65) {

            values[stockSymbol] = stockValue * variance;
        }
    };
}

window.setInterval(updateValues, 200);
window.setInterval(heartbeat, 800);
