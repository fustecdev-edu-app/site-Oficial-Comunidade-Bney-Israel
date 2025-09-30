import { image } from "./imagem.js";

var pass = document.querySelector(".diabtn")
var img = document.querySelector(".imgcal")

var dias = image;

var cont =1 

pass.addEventListener("click", () =>{
    img.src= image[cont];
    console.log(cont)
    cont++
})

