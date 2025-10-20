const selec = document.querySelector(".select") 
const btn = document.querySelector(".iputbtn") 
let btnBaixarPdf = document.querySelector(".btn-baixar-pdf")
let escolher = document.querySelector(".escolher")
let selexao = document.querySelector(".selexao")
let iframe = document.querySelector(".iframe") 
let valorSelecionado = "" 


btnBaixarPdf.addEventListener("click", () =>{
    
})

let array = [ "",
     "https://fustecdev-edu-app.github.io/pdf/Comunidade-Bnei-Israel.pdf", 
     "https://fustecdev-edu-app.github.io/pdf/Galatas cap-1.pdf",
      "https://fustecdev-edu-app.github.io/pdf/Introducao-Galatas-pt-2.pdf",
       "https://fustecdev-edu-app.github.io/pdf/O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf",
        "https://fustecdev-edu-app.github.io/pdf/galatas-cap-2-O-Evangelho-da-liberdade.pdf",
         "https://fustecdev-edu-app.github.io/pdf/תשובה-TESHUVA.pdf", ] 

         let arrayNome = [ "", "Comunidade-Bnei-Israel.pdf",
             "Galatas cap-1.pdf", "Introducao-Galatas-pt-2.pdf", 
             "O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf", 
             "galatas-cap-2-O-Evangelho-da-liberdade.pdf",
              "תשובה-TESHUVA.pdf", ] 
              var posi = 0
         let creatOpit = array.map(function(item){
             let optio = document.createElement("option")
              optio.value = posi; optio.text = arrayNome[posi] 
              posi++ 
              selec.appendChild(optio) })
               btn.addEventListener("click", () =>{ 
                valorSelecionado = selec.options[selec.selectedIndex].value; 
                iframe.src=array[valorSelecionado] 
            });