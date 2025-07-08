/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filteredByFirstLetter(array, letter) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let parola = array[i];
    let parolaFirstLetter = parola[0];
    if (parolaFirstLetter == letter) {
      newArray.push(parola);
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
let result = filteredByFirstLetter(names, `A`);
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
