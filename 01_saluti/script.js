/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function printName(name) {
  console.log(`ciao ${name}`);
}

// Invoca la funzione qui e stampa il risultato in console
printName(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario

//FUNZIONE FRECCIA
const userNome = "Simone";
const sayMyName = (nome) => console.log(`ciao ${nome}`);
sayMyName(userNome);
