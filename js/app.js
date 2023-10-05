// - inizializzo una variabile per richiamare l'entità bottone dall'html
const btnDOMElement = document.getElementById('btn-price')
console.dir(btnDOMElement)
// - attivo il LISTENER
btnDOMElement.addEventListener('click', function(){
// - dichiaro le variabili per il nome
    const nameDOMElement = document.getElementById('passenger-name').value
    console.dir(nameDOMElement)
// - km
    const kmDOMElement = parseFloat(document.getElementById('passenger-km').value)
    console.dir(kmDOMElement)
// - fascia di età
    const ageDOMElement = document.getElementById('passenger-age')
    console.dir(ageDOMElement)
// - controllo che i dati inseriti siano corretti
// - SE i km o il nome passeggero non sono stati inseriti
    if(nameDOMElement == '' || kmDOMElement == ''){
//     - creare un alert che dice di inserirli
        alert('Devi riempire tutti i campi per poter calcolare il prezzo del biglietto')
        console.dir('nome non inserito')
    }
//     - ALTRIMENTI SE i km inseriti sono negativi o sono NaN
    else if(kmDOMElement <= 0 || isNaN(kmDOMElement)){
//         - creare un alert che dice che il valore non è vaildo
        alert('Il numero di km inserito non è valido')
        console.dir('numero negativo o nullo')
    }
//     - ALTRIMENTI
    else {
//         - inizializzo la variabile prezzo/km = 0.21
        const pricePerKm = 0.21
//         - calcolo il prezzo base come prezzo/km * km
        let standardPrice = pricePerKm * kmDOMElement
        standardPrice = standardPrice.toFixed(2)
        console.log(standardPrice)
//         - inizializzo la variabile sconto = 0
        let ticketDiscount = 0
//         - controllo l'età del passeggero
//         - SE è sotto i 18 anni
        if(ageDOMElement.value == 0){
//             - assegno alla variabile sconto il valore 0.2
            ticketDiscount = 0.2
        }
//         - SE è sopra i 65 anni
        else if(ageDOMElement.value == 2){
//              - assegno alla variabile sconto il valore 0.4
                        ticketDiscount = 0.4
                    }
//      - inizializzo il prezzo finale come prezzo base * (1 - scontoOver65)
        let finalPrice = standardPrice * (1 - ticketDiscount)
        finalPrice = finalPrice.toFixed(2)
        console.log(finalPrice)
//      - inizializzo una variabile per richiamare l'elemento nome dall'html
        const ticketnameDOMElement = document.getElementById('ticket-name')
        ticketnameDOMElement.innerHTML = nameDOMElement
//      - inizializzo una variabile per richiamare l'elemento km dall'html
        const ticketkmDOMElement = document.getElementById('ticket-km')
        ticketkmDOMElement.innerHTML = kmDOMElement
//      - inizializzo una variabile per richiamare l'elemento prezzo finale dall'html
        const finalPriceDOMElement = document.getElementById('final-price')
        finalPriceDOMElement.innerHTML = finalPrice + '&euro;'
    }
})
        
