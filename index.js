import {dia} from './parasha.js';
import { parasha } from './parasha.js';
import { audio } from './parasha.js';

const menu = document.querySelector(".glow-on-hover")
const optio =document.querySelector(".optio")
const audio = document.querySelector(".audio")

audio.src=audio

menu.addEventListener("click", () =>{
optio.style.display="block"

})

optio.addEventListener("mouseleave",() =>{
    optio.style.display="none"
})

