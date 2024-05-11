window.addEventListener("scroll", function(){
    let header= document.querySelector('#header');
    header.classList.toggle('rolagem',window.scrollY > 0);
});

let carga=0;
let intBarra1=setInterval(()=>{
    let barra=document.querySelector("#Pg1");
    barra.innerHTML;
    barra.style.width=carga+("%");
    carga++;
},200);

let carga2=0;
let intBarra2=setInterval(()=>{
    let barra2=document.querySelector("#Pg2");
    barra2.innerHTML;
    barra2.style.width=carga2+("%");
    carga2++;
},250);

let carga3=0;
let intBarra3=setInterval(()=>{
    let barra3=document.querySelector("#Pg3");
    barra3.innerHTML;
    barra3.style.width=carga3+("%");
    carga3++;
},200);

let numero1=document.querySelector(".num1"),
numero2=document.querySelector(".num2"),
numero3=document.querySelector(".num3"),
numero4=document.querySelector(".num4");

let pronum1=0;
let fui1=23;

let roda1 = setInterval(function(){
    pronum1++;
    if (pronum1) {
        clearInterval(roda1);
    }
}, fui1);

/**Menu */
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

        const menu = document.querySelector(".menu");
        const menuButton = document.querySelector(".menu-button");

        menuButton.addEventListener("click", () => {
            menu.classList.toggle("show-menu");
        })
});