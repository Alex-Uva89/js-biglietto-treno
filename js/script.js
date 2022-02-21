const priceStandard = 0.21;
const priceUnder18 = 0.168;
const priceOver65 = 0.126;

let nameUtent = prompt("Come ti chiami?");
let age = prompt("Qual è la tua età?");
let km = prompt("Quanti km devi percorrere?");

let element = document.getElementById("my-output");
let text = "il tuo biglietto costa "

if (age < 18){
    element.innerHTML = "Ciao "+ nameUtent +text +(km * priceUnder18) +"€";
}else if (age > 65){
    element.innerHTML =  "Ciao "+ nameUtent +text +(km * priceOver65) +"€";
}else {
    element.innerHTML =  "Ciao "+ nameUtent +text +(km * priceStandard) +"€";

}