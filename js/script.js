// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.2762 € al km)
// va applicato uno sconto del 17.5% per i minorenni
// va applicato uno sconto del 33.3% per gli over 65.

//Dichiarazione variabile per i km percorsi
const inputUserName = document.getElementById('user-name');
const inputKmetres = document.getElementById('user-km');
const inputUserAge = document.getElementById('user-age');
const priceResult = document.getElementById('ticket-price');
const button = document.querySelector('button');


button.addEventListener('click', function() {
    //Prezzo del biglietto standard
    let ticketPrice = (parseInt(inputKmetres.value)) * 0.2762; 

    if ((parseInt(inputUserAge.value) > 0) && (parseInt(inputUserAge.value) < 120)){
        if (parseInt(inputUserAge.value) < 18){
            ticketPrice = ticketPrice * 0.825;
            priceResult.innerHTML = `${inputUserName.value} i km che vorresti percorrere sono ${inputKmetres.value}km e considerando l'età (${inputUserAge.value}), questo è il prezzo del biglietto scontato under 18: ${ticketPrice.toFixed(2)}&euro;`;
            console.log(ticketPrice.toFixed(2))
        } else if (parseInt(inputUserAge.value) >= 65){
            ticketPrice = ticketPrice * 0.667;
            priceResult.innerHTML = `${inputUserName.value} i km che vorresti percorrere sono ${inputKmetres.value}km e considerando l'età (${inputUserAge.value}), questo è il prezzo del biglietto scontato over 65: ${ticketPrice.toFixed(2)}&euro;`;
            console.log(ticketPrice.toFixed(2))
        } else {
            priceResult.innerHTML = `${inputUserName.value} i km che vorresti percorrere sono ${inputKmetres.value}km e questo è il prezzo del biglietto: ${ticketPrice.toFixed(2)}&euro;`;
            console.log(ticketPrice.toFixed(2))
        }
    } else {
        alert('L\'età inserita non è corretta')
        priceResult.innerHTML = `Il prezzo del biglietto non può essere calcolato.`;
    }
});
