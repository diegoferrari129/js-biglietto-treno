// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const distance_km = prompt ('Numero di chilometri ?')
const age = prompt ('Età del passeggero')

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = distance_km * 0.21;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
let discount = 0

if (age < 18) {
    discount = 20%
}

else if (age > 65)
    discount = 40%