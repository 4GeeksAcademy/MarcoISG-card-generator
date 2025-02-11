import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let numero = [2, 3, 4, 5, 6, 7, 8, 9, 10,"A","J","Q","K"]
let pinta = ["♦", "♥", "♠", "♣"];


let randomNumber = numero[Math.floor(Math.random() * numero.length)]
let randomPinta =  pinta[Math.floor(Math.random()* pinta.length)]
let resultado = randomPinta + randomNumber;
document.getDocumentById("randomCard").innerhtml = resultado;


}