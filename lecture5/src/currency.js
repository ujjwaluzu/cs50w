document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('form').onsubmit = function() {
    // event.preventDefault();
    fetch("https://open.er-api.com/v6/latest/USD")

    .then(response => response.json())
    .then(data => {
        const currency = document.querySelector("#currency").value.toUpperCase();
        const rate = data.rates[currency]

        if (rate!== undefined) {
            document.querySelector("h1").innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;
        } else{
            document.querySelector("h1").innerHTML = "Invalid Currency.";
        }
        
    })
    .catch(error => {
        console.error("Error fetching exchange rates:", error);
    });
    return false;
}
});

