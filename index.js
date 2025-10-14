import {dia} from './parasha.js';
import { parasha } from './parasha.js';
import { audio } from './parasha.js';

const menu = document.querySelector(".glow-on-hover")
const optio =document.querySelector(".optio")
const audio1 = document.querySelector(".audio")
const btn = document.querySelector(".iputbtn")
const inicio = document.querySelector(".inicio")
const norma = document.querySelector(".norma")

const checkbox = document.getElementById("myCheckbox");
var isChecked = ""
var observ = setInterval(() => {
    isChecked = checkbox.checked;
    if (isChecked) {
  // o checkbox está marcado
 
  btn.style.display="block"
  clearInterval(observ)

} else {
  // o checkbox não está marcado
  
}
}, 1000);

btn.addEventListener("click", ()=>{
    inicio.style.display="block"
    norma.style.display="none"
    parasha.map((index) =>{
var p = document.createElement("p")
p.textContent=parasha[cont]

document.body.appendChild(p)
cont++


}) 

})


audio1.src=audio

menu.addEventListener("click", () =>{
optio.style.display="block"

})

optio.addEventListener("mouseleave",() =>{
    optio.style.display="none"
})

var cont = 0



