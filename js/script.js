const priceStandard = 0.21;
const priceUnder18 = 0.168;
const priceOver65 = 0.126;

let nameUtent = prompt("Come ti chiami?");
let age = prompt("Qual è la tua età?");
let km = prompt("Quanti km devi percorrere?");

let element = document.getElementById("my-output");
let text = " il tuo biglietto costa "

if (age < 18){
    let pricetkt = km * priceUnder18;
    element.innerHTML = "Ciao "+ nameUtent +text +pricetkt.toFixed(2) +"€";
}else if (age > 65){
    let pricetkt = km * priceOver65;
    element.innerHTML =  "Ciao "+ nameUtent +text +pricetkt.toFixed(2) +"€";
}else {
    let pricetkt = km * priceStandard;
    element.innerHTML =  "Ciao "+ nameUtent +text +pricetkt.toFixed(2) +"€";

}