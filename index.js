import {dia} from './parasha.js';


const menu = document.querySelector(".glow-on-hover")
const optio =document.querySelector(".optio")
const audio = document.querySelector(".audio")

//audio.src=

menu.addEventListener("click", () =>{
optio.style.display="block"

})

optio.addEventListener("mouseleave",() =>{
    optio.style.display="none"
})