// Fade animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.15
});

document.querySelectorAll(".card").forEach(card=>{
observer.observe(card);
});


// Smooth navbar highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 150){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}

});

});


// Semiconductor particles

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position="fixed";
canvas.style.top="0";
canvas.style.left="0";
canvas.style.zIndex="-1";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(0,212,255,0.7)";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

});

requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});