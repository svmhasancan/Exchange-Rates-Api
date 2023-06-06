class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base="
        this.amount = null;
    }

    changeAmount(newAmount) {
        this.amount = newAmount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;

    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;

    }


    exchange() {
        
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then( response => response.json())
            .then( data => {
                let rates = data.rates[this.secondCurrency];
                let total = rates * this.amount;
                
                resolve(total);
            })
            .catch(err => reject(err));
        })






    }
}