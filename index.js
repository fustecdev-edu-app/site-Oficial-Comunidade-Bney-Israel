import {dia} from './parasha.js';
import { parasha } from './parasha.js';
import { audio } from './parasha.js';

const menu = document.querySelector(".glow-on-hover")
const optio =document.querySelector(".optio")
const audio1 = document.querySelector(".audio")

audio1.src=audio

menu.addEventListener("click", () =>{
optio.style.display="block"

})

optio.addEventListener("mouseleave",() =>{
    optio.style.display="none"
})

var cont = 0
parasha.map((index) =>{
var p = document.createElement("p")
p.textContent=parasha[cont]

document.body.appendChild(p)
cont++


})