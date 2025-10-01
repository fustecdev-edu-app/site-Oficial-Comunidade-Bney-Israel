import { image } from "./imagem.js";
import { festa } from "./featas.js";
import { status } from "./featas.js";




var pass = document.querySelector(".diabtn")
var img = document.querySelector(".imgcal")
var mostra = document.querySelector(".mostra")
var gre = document.querySelector(".gre")

var dias = image;

var cont =1 
var mes = 1
var ano = 0
var dias = 1


var ordmes = [
"",
  "0",//1
  "31",//2
  "59",//3
  "90",//4
  "120",//5
  "151",//6
  "181",//7
  "212",//8
  "243",//9
  "273",//10
  "304",//11
  "334",//12

]



var anB =0
var dat = new Date();
var d = dat.getDate();
var m = dat.getMonth();
var ano = dat.getFullYear();



var pes  = ano*365
pes = pes+ parseInt(ordmes[m+1]) 
m=m+1
pes=pes+ parseInt(d)
gre.textContent="total de dias      "+pes +"   dia "+d+"  / mês "+m+" / ano "+ano

document.querySelector(".solenidades").style.display=status
document.querySelector(".titlefesta").textContent=festa[d]

while(dias<=pes){
  anB = parseInt(pes/360) 
    
    if (cont>=30) {
       cont=1
       mes++ 
      
    }
    if (mes>=12) {
      mes=1
      
    }
    img.src= image[cont];
    mostra.textContent="total de dias      "+dias+"  dia"+cont+" / mês "+mes+"/ ano  /"+anB
    cont++
    dias++
    
}


pass.addEventListener("click", () =>{
 var pesqdia = document.querySelector(".pesqdia").value 
  var pesqmes = document.querySelector(".pesqmes").value 
   var pesqano = document.querySelector(".pesqano").value
   
   document.querySelector(".pesqdia").value=""
   document.querySelector(".pesqmes").value =""
   document.querySelector(".pesqano").value = ""   

  var p1gre = document.querySelector(".p1gre")
  p1gre.textContent=pesqdia+"/"+pesqmes+"/"+pesqano


  var pesqdiast = pesqano*365
  pesqdiast=pesqdiast+parseInt(ordmes[pesqmes])
  pesqdiast=pesqdiast+ parseInt(pesqdia)

  var pescont = 1

  var p1biblico = document.querySelector(".p1biblico")
  var diaB = 1
  var mesB = 1
  var anosBi = 0
  var diasbib = 0
 var b =0
 var c = pesqdiast

 while(b <= c){
   anosBi= parseInt(pesqdiast/360)
    if (pescont>=30) {
       pescont=1
       mesB++ 
      
    }
    if (mesB>=12) {
      mesB=1
      
    }
    diaB= pescont
   pescont++
   diaB=pescont
    b++


  
  p1biblico.textContent=diaB+" / "+mesB+" / "+anosBi

}
//  aqui estou subitraindo os dias de pes 30/9/2025(com o resultado de dias da data 6/12/1979)vai resultar quantidade de dias de 6/12/1979 a 30/9/2025
var calid = parseInt(pes-pesqdiast)
 // agora com o total da subtração faço a divisão para dar o resultado de anos, mais vai sobrar dias ainda para dividir por meses;

var converterPano = parseInt(calid/360)// aqui ta o resultado de anos

// ja pegamos o valor de anos, agora multiplica o valor para ser subtraido os meses

var mutplicAnos = parseInt(converterPano*360)

// agora subtrair calid com mutplicAno, para dividir por 30 para saber quantos meses, e fica dias para resulatado de dias

var restaMes = parseInt(calid-mutplicAnos)

// agora vamos dividir o resto dos dias para saber que mês ta;

var mestar = parseInt(restaMes/30)// aqui tem o resultado dos meses

// á cima ja sabemos quantos meses agora vamos ver quantos dias agora; por ultimo subtrai o dia

var mostraresutdia = parseInt(mestar*30)

// agora o final que vai resultar no dias;

var finsdia = parseInt(restaMes-mostraresutdia)// aqui finaliza com os dias


 console.log(calid)
 console.log(converterPano)
 console.log(mutplicAnos)
console.log(restaMes)
console.log(mestar)
console.log(mostraresutdia)
console.log(finsdia)


 document.querySelector(".idadebiblica").textContent=converterPano+"; anos /"+mestar+"  meses/ "+finsdia+"dias"+" na data de hoje "+d+" / "+m+" / "+ano


   

})

