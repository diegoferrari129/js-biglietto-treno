// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const distance_km = prompt ('Numero di chilometri ?')
const age = prompt ('Età del passeggero')

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = distance_km * 0.21;