/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso 
 allora deve ritornare la loro somma moltiplicata per 3.
*/

// let numberOne = 10;
// let numberTwo = 10;

// function crazySum (int1, int2) {
//     let sum = 0;
//     (int1 === int2) ? sum = (int1 + int2)*3 : sum = (int1 + int2);
//     return sum;
// }

// console.log(crazySum(numberOne, numberTwo));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
 e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

// let myNum = 400;

// function boundary (number) {
//     if(number > 20 && number <= 100 || number === 400) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(boundary(myNum));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro 
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// let myOriginalString = "FABIOCARUCCI";

// function reverseString (stringToReverse) {
//     let myReverseString = "";
//     for(let i = stringToReverse.length - 1; i >= 0; i--){
//         myReverseString = myReverseString.concat(stringToReverse[i]);
//     }
    
//     return myReverseString;
// }

// console.log(reverseString (myOriginalString));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro 
 e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// let myString = "ciao mi chiamo fabio carucci e vorrei andare a surfare domani";

// function upperFirst (string) {
//     separateWords = string.split(" ");

//     for (let i = 0; i < separateWords.length; i++) {
//         separateWords[i] = separateWords[i].charAt(0).toUpperCase() + separateWords[i].slice(1);
//     }
//     return separateWords.join(" ");
// }

//   console.log(upperFirst(myString));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n 
 e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// let myNum = 4;
// let myArr = [];

// function giveMeRandom (number) {
//   for (let i = 0; i < number; i++) {
//     myArr[i] = Math.floor(Math.random()*11);
//   }
//   return myArr;
// }

// console.log(giveMeRandom(myNum));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// let base = 10;
// let altezza = 3

// let myArea = 0;

// function area (l1, l2) {
//   return myArea = l1 * l2;
// }

// console.log(area(base, altezza));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// let myNum = 40;

// function crazyDiff (n) {
//   n = Math.abs(n - 19);
//   (n > 19) ? n *= 3 : null;
//   return n;
// }

// console.log(crazyDiff(myNum));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita 
 e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

// let myString = "giogio";

// function codify(string){
//   if(typeof string !== "string"){
//     return "Errore";
//   }
//   if (string.startsWith("code")){
//     return string;
//   }
//   return "code" + string;
// } 

// console.log(codify(myString));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

// let myNum = 4.7;

// function check3and7(n) {
//   if (n < 0 || Number.isInteger(n) === false) {
//     return "Errore";
//   }
//   if (n % 3 === 0 || n % 7 === 0){
//     return true;
//   }
//   return false;
// }

// console.log(check3and7(myNum));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo
 e l'ultimo carattere.
*/

// let myString = "Fabio";

// function cutString (string) {
//   if (typeof string !== "string") {
//     return "Errore";
//   }
//   return string.slice(1, string.length - 1);
// }

// console.log(cutString(myString));
