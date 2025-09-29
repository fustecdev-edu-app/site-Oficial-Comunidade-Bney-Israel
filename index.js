import {dia} from './parasha.js';
alert(dia);

const menu = document.querySelector(".glow-on-hover")
const optio =document.querySelector(".optio")

menu.addEventListener("click", () =>{
optio.style.display="block"

})

optio.addEventListener("mouseleave",() =>{
    optio.style.display="none"
})