const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");

const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListeners()
function eventListeners() {
    amountElement.addEventListener("input", changeCurrency);

    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst(firstSelect.options[firstSelect.selectedIndex].textContent);
    }

    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond(secondSelect.options[secondSelect.selectedIndex].textContent);
    }
}

function changeCurrency() {
    const amount = amountElement.value;

    if (amount < 0) {
        ui.alertMessages("danger","Lütfen 0 dan büyük bir değer giriniz");
    }

    else {
        currency.changeAmount(amount);
        currency.exchange()
            .then(total => ui.changeFromResult(total))
            .catch(err => console.error(err));
    }


}