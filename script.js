document.querySelector("h1").innerHTML="Le meilleur burger";
document.getElementsByTagName("h2")[1].innerHTML="Il est <strong>délicieux</strong>, essayez-le!";
document.getElementById("top").style.width="70%";
document.getElementsByClassName("meatball")[1].classList.add("pickle");
document.getElementsByClassName("meatball")[2].style.width="90px";
document.getElementsByClassName("tomato")[0].style.backgroundColor="orange";
for (var i = 0; i <4; i++) {
document.querySelectorAll(".cheese")[i].style.borderRadius="50%";
}
var toto = document.createElement("div");
toto.classList.add("cheese");
var tata = document.getElementsByClassName("patty")[1];
var titi= document.getElementsByClassName("burger")[0];
titi.insertBefore(toto, tata);
document.querySelector(".bun-bottom").id="bottom";
document.getElementsByTagName("a")[0].setAttribute("target","_blank");
document.getElementsByTagName("a")[0].setAttribute("href","https://www.google.fr");
document.getElementsByClassName("plate")[0].after(document.getElementsByClassName("plate")[0].cloneNode(true));
