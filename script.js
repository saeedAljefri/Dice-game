var messageShown = localStorage.getItem("messageShown");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//get img element
var a = document.querySelectorAll("img");

//get names the player
var fp;
var sp;

//check if message has been shown
if (!messageShown) {

    fp = prompt("enter name player one");
    sp = prompt("enter name player two");
    localStorage.setItem("fp", fp);
    localStorage.setItem("sp", sp);
    localStorage.setItem("messageShown", true);
}
else {
    fp = localStorage.getItem("fp");
    sp = localStorage.getItem("fp")
}


document.querySelectorAll('p')[0].innerHTML = localStorage.getItem("fp");
document.querySelectorAll('p')[1].innerHTML = localStorage.getItem("sp");

a[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
a[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");
if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw no one is a winner";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = localStorage.getItem("fp") + " win";
}
else {
    document.querySelector('h1').innerHTML = localStorage.getItem("sp") + " win";
}