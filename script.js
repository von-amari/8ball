

// let userQuestion = "Ask a yes or no question";

// console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8)
let eightBall = randomNumber

let userQuestion = window.prompt("Ask a yes or no question: ");

document.getElementById("myImg").src = "img/ball.png";
document.getElementById("msg").style.display = "none";

$("#msg").fadeIn(5000);

if(userQuestion ==="") {
 document.querySelector("h2").innerHTML = "You didn't ask a question."
 document.getElementById("msg").src = "img/8.png";
 
}else {
    document.querySelector("h2").innerHTML = `Magic 8 ball's answer to your question of: ${userQuestion}`
    document.getElementById("msg").src = `img/${randomNumber}.png`;
} 

