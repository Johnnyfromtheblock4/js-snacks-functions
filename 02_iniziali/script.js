/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function getFirstLetter(array) {
  //definisco l'array delle iniziali
  const initials = [];
  //ciclo l'array
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    const firstLetter = name[0];
    //pusho le lettere nell'array vuoto
    initials.push(firstLetter);
  }
  return initials;
}

// Invoca la funzione qui e stampa il risultato in console
let firstLetterBox = getFirstLetter(names);
console.log(firstLetterBox);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//ARROW FUNCTION

const getIntilas = (array) => {
  //passaggi come sopra
};
