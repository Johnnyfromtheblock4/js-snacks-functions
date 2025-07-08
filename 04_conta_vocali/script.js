/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVocals(array) {
  let count = 0;
  const vocals = [`a`, `e`, `i`, `o`, `u`];
  for (let i = 0; i < array.length; i++) {
    if (vocals.includes(array[i])) {
      count++;
    }
  }
  return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
