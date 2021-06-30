player1 = "";
player2 = "";
player1score = 0;
player2score = 0;
number1 = 0;
number2 = 0;
player1 = localStorage.getItem("user_x");
player2 = localStorage.getItem("user_y");
document.getElementById("a").innerHTML = player1 + " = " + player1score;
document.getElementById("c").innerHTML = player2 + " = " + player2score;
document.getElementById("f").innerHTML = player1;
document.getElementById("h").innerHTML = player2;
function send() {
    number1 = document.getElementById("x").value;
    document.getElementById("x").value = "";
    number2 = document.getElementById("y").value;
    document.getElementById("y").value = "";
    document.getElementById("l").innerHTML = number1 + " x " + number2;
} 