/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVocals(string) {
  //dichiaro un array di vocali
  const vocals = [`a`, `e`, `i`, `o`, `u`];
  //dichiaro una variabile che conta le vocali all'interno della parola
  let count = 0;
  //ciclo la parola come se fosse un array di caratteri
  for (let i = 0; i < string.length; i++) {
    if (vocals.includes(string[i])) {
      count++; //count = count + 1
    }
  }
  return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
