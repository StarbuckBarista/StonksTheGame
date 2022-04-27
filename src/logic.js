const values = {
    "AAPL": 375.0,
    "TSLA": 2325.0,
    "GM": 100.0,
    "HMC": 50.0,
    "BABA": 225.0,
    "DIS": 300.0,
    "SBUX": 175.0,
    "KO": 150.0,
    "MCD": 575.0,
    "HD": 700.0,
    "MSFT": 650.0,
    "ROKU": 250.0,
    "AMZN": 7150.0,
    "GOOGL": 5850.0,
    "SNOW": 450.0,
    "MDB": 925.0,
    "WMT": 350.0,
    "NFLX": 775.0,
    "TM": 375.0,
    "ORCL": 175.0,
    "IBM": 300.0,
    "COST": 1325.0,
    "AMC": 50.0,
    "GME": 350.0,
    "LIC": 250.0,
    "ETH": 7000.0
};

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
};

const actionCards = {
    "BF": {
        "WMT": 1.03,
        "COST": 1.02,
        "GME": 1.03,
        "AMZN": 0.985,
        "HD": 1.02
    },
    "FFB": {
        "TSLA": 1.15,
        "GME": 0.9,
        "HMC": 0.925,
        "TM": 0.97
    },
    "DGI": {
        "AAPL": 0.99,
        "MSFT": 0.97,
        "GOOGL": 0.85,
        "ORCL": 0.96,
        "SNOW": 0.9,
        "MDB": 0.92,
        "AMZN": 0.8,
        "IBM": 0.95
    },
    "TVL": {
        "ROKU": 0.975,
        "NFLX": 0.95,
        "DIS": 1.03
    },
    "NM": {
        "NFLX": 1.05,
        "ROKU": 1.025,
        "DIS": 0.97
    },
    "CHA": {
        "KO": 0.99,
        "SBUX": 1.025,
        "MCD": 0.85
    },
    "WSB": {
        "GME": 2.0,
        "AMC": 1.75
    },
    "CHP": {
        "AAPL": 0.99,
        "TSLA": 0.995,
        "BABA": 0.95,
        "DIS": 0.96,
        "MSFT": 0.95,
        "ROKU": 0.98,
        "AMZN": 0.93,
        "GOOGL": 0.91,
        "SNOW": 0.96,
        "MDB": 0.95,
        "NFLX": 0.93,
        "ORCL": 0.98,
        "IBM": 1.13
    },
    "FBI": {
        "LIC": 1.5,
        "ETH": 1.75
    },
    "CCH": {
        "LIC": 0.25,
        "ETH": 0.1
    },
    "NPD": {
        "AAPL": 0.5,
        "TSLA": 0.5,
        "GM": 0.5,
        "HMC": 0.5,
        "BABA": 0.5,
        "DIS": 0.5,
        "SBUX": 0.5,
        "KO": 0.5,
        "MCD": 0.5,
        "HD": 0.5,
        "MSFT": 0.5,
        "ROKU": 0.5,
        "AMZN": 0.5,
        "GOOGL": 0.5,
        "SNOW": 0.5,
        "MDB": 0.5,
        "WMT": 0.5,
        "NFLX": 0.5,
        "TM": 0.5,
        "ORCL": 0.5,
        "IBM": 0.5,
        "COST": 0.5,
        "AMC": 0.5,
        "GME": 0.5,
        "LIC": 0.5,
        "ETH": 0.5
    },
    "WS": {
        "AAPL": 0.93,
        "SBUX": 0.95,
        "MCD": 0.95,
        "HD": 1.03,
        "AMC": 0.98,
        "AMZN": 0.95
    },
    "UR": {
        "BABA": 1.05,
        "DIS": 1.03,
        "MSFT": 1.05,
        "ROKU": 1.075,
        "AMZN": 1.03,
        "GOOGL": 1.1,
        "NFLX": 1.1
    },
    "SAM": {
        "AAPL": 0.9,
        "MSFT": 0.95,
        "AMZN": 1.05,
        "WMT": 1.03
    },
    "EX": {
        "AMC": 1.1,
        "DIS": 0.95,
        "AMZN": 0.95,
        "NFLX": 0.95
    },
    "DO": {
        "DIS": 1.15,
        "KO": 1.05,
        "MCD": 1.075,
        "SBUX": 1.1
    },
    "NA": {
        "AMZN": 1.03,
        "DIS": 1.02,
        "HD": 1.05,
        "WMT": 1.1,
        "COST": 1.1,
        "GME": 1.01
    },
    "CC": {
        "AAPL": 1.03,
        "DIS": 1.05,
        "HD": 1.075,
        "WMT": 1.05,
        "COST": 1.075,
        "GME": 1.02,
        "AMC": 1.01
    },
    "FC": {
        "SBUX": 1.1,
        "MCD": 1.15
    },
    "SDC": {
        "TSLA": 1.07,
        "TM": 1.075,
        "HMC": 1.05,
        "GM": 1.1
    }
};

function updateValue (stockSymbol, actionButton) {

    const stockQuantity = document.getElementById(stockSymbol + "-quantity");
    const stockValue = document.getElementById(stockSymbol + "-value");
    const stockShares = shares[stockSymbol];
    const action = actionButton.textContent;

    let updatedStockShares;

    if (action.includes("Sell")) { updatedStockShares = stockShares - parseInt(stockQuantity.value); }
    if (action.includes("Buy")) { updatedStockShares = stockShares + parseInt(stockQuantity.value); }

    const updatedStockValue = parseInt(stockValue.textContent) / stockShares * updatedStockShares;
    values[stockSymbol] = updatedStockValue;
    stockQuantity.value = 0;
}

function applyActionCard () {

    const actionCardID = document.getElementById("action-card-id");
    const actionCard = actionCards[actionCardID.value];

    for (let actionCardStockSymbol in actionCard) {

        const actionCardUpdate = actionCard[actionCardStockSymbol];

        const stockValue = document.getElementById(actionCardStockSymbol + "-value");
        const updatedStockValue = parseInt(stockValue.textContent) * actionCardUpdate;
        values[actionCardStockSymbol] = updatedStockValue;
    };

    actionCardID.value = "";
}

function updateValues () {

    for (let stockSymbol in values) {

        const stockValue = document.getElementById(stockSymbol + "-value");
        stockValue.textContent = Math.round(values[stockSymbol] / 25) * 25;
    };
}

function heartbeat () {

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
