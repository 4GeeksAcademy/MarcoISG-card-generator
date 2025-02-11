
window.onload = function() {
//   //write your code here

const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10,"A","J","Q","K"]
const pinta = ["♦", "♥", "♠", "♣"];


const randomNumber = numero[Math.floor(Math.random() * numero.length)]
const randomPinta =  pinta[Math.floor(Math.random()* pinta.length)]


document.querySelector(".numero").textContent = randomNumber;
document.querySelectorAll(".pinta").forEach(el => el.textContent = randomPinta);

if ( randomPinta === "♦" || randomPinta === "♥") {
    document.querySelector(".card").style.color = "red";
} else {
    document.querySelector(".card").style.color = "black";
}

};


