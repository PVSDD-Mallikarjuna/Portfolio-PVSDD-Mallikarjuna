// Typing Animation

const text =
"VLSI Engineer • Semiconductor Researcher • IEEE Published Author";

let i = 0;

function typingEffect() {

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typingEffect,60);

}

}

typingEffect();


// Reveal Animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position = card.getBoundingClientRect().top;

if(position < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="1s";

});
