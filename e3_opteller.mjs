// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* // Einde van userInput voorbereiden
let getal1 = parseFloat(await userInput.question('Geef een getal in:'));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal in:'));
getal1 += getal2

// Voeg hier je eigen code in
console.log('de som van de getalle is '+getal1); */


/* //Leeftijd bereknaar
let geboorteJaar = parseFloat(await userInput.question('Geef jouw geoorte jaar in:'));
let toekomstJaar = parseFloat(await userInput.question('Geef jouw geef jouw gewenste toekomst jaar in:'));

console.log('In '+toekomstJaar+' zal ik '+(toekomstJaar-=geboorteJaar)+' of '+(toekomstJaar-1)+' jaar oud zijn.'); */

//Aantal seconden
let dagen = parseFloat(await userInput.question('Geef het aantal dagen:'));
let uren = parseFloat(await userInput.question('Geef het aantal uren:'));
let minuten = parseFloat(await userInput.question('Geef het aantal minuten:'));
let seconden = parseFloat(await userInput.question('Geef het aantal seconden:'));
let totaal = ((dagen*86400)+(uren*3600)+(minuten*60)+seconden);

console.log('Aantal seconden: '+totaal);





process.exit();
