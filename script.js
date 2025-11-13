

import { parasha } from "./parasha.js";
import { VamosMorarNoCeu } from "./even.js";


// MENU
const Ainicio = document.querySelector(".Ainicio")



var dat = new Date()
var dia = dat.getDate()





// ENTRAR NOS ESTUDOS
const Estud = document.getElementById("estudos")

const abriEstudoPdf = document.querySelector(".abriEstudoPdf")
abriEstudoPdf.addEventListener("click", () => {
  Estud.style.display = "block"
  document.querySelector(".semanaparasha").style.display = "none"

})


// FECHAR SEÇÕES
const btnFecharEstud = document.querySelector('.FecharEstudo')
btnFecharEstud.addEventListener('click', () => {
  Estud.style.display = "none"
  window.location.reload()

});


// abri section quem somos

const BtnquemSomos = document.querySelector(".Btnquem-somos")


BtnquemSomos.addEventListener("click", () => {
  document.querySelector(".quem-somos").style.display = "block"
  document.querySelector(".semanaparasha").style.display = "none"

})

const btnFecharQumSomos = document.querySelector(".btnFecharQumSomos")
btnFecharQumSomos.addEventListener("click", () => {
  window.location.reload()

})

//  abri e fechar verdade das escrituras

const verdadeEscrituras = document.getElementById("verdade-escrituras")
const btnverdesc = document.querySelector(".btnverdesc")

btnverdesc.addEventListener("click", () => {
  verdadeEscrituras.style.display = "block"
  document.querySelector(".semanaparasha").style.display = "none"

})

const btnFecharVerdaEscritura = document.querySelector(".btnFecharVerdaEscritura");
btnFecharVerdaEscritura.addEventListener("click", () => {
  verdadeEscrituras.style.display = "none"
  window.location.reload()

})


//  abri e fecha contatos

const sectioncontato = document.getElementById("contato")
const btnFecharContato = document.querySelector(".btnFecharContato")
const BTNcontato = document.querySelector(".BTNcontato")

BTNcontato.addEventListener("click", () => {
  document.querySelector(".semanaparasha").style.display = "none"
  sectioncontato.style.display = "block"

})
emailjs.init({ publicKey: "88neZgZHBdEtQjpUi" });
document.getElementById("formContato").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value

  }

  const serviceID = "service_8a6mwzx"
  const templateID = "template_l8ytc7n"
  const submit_btn = document.getElementById("submit_btn")
  submit_btn.textContent = "Enviando..."

  emailjs.send(serviceID, templateID, formData).then(() => {
    Toastify({

      text: "E-mail enviada com sucesso!",

      duration: 3000,
      style : {
        background: "#28a745",
        color: "#f4f4f4"
      }

    }).showToast();

    document.getElementById("formContato").reset();

  })
    .catch((erro) => {
       Toastify({

      text: "Erro ao enviar e-mail",

      duration: 3000,
      style : {
        background: "#dc3545",
        color: "#f4f4f4"
      }

    }).showToast();
    })
    .finally(() => {
      submit_btn.textContent = "Enviar Mensagem"
    })



});


btnFecharContato.addEventListener("click", () => {
  sectioncontato.style.display = "none"
  window.location.reload()

})



// PDFs
const btnLer = document.querySelector('.btnlerPdf');
const btnBaixar = document.querySelector('.btnBaixarPdf');
const selecao = document.querySelector('.select');
const lerPDF = document.querySelector('.lerPDF');
const baixaPDF = document.querySelector('.BaixaPdf');
const iframe = document.querySelector('.iframe');

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

let pdfDoc = null, pageNum = 1, pageRendering = false, pageNumPending = null;
const canvas = document.getElementById('pdf-render');
const ctx = canvas.getContext('2d');

function renderPage(num) {
  pageRendering = true;
  pdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale: 1.2 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
      pageRendering = false;
      if (pageNumPending !== null) { renderPage(pageNumPending); pageNumPending = null; }
      document.getElementById('page-num').textContent = num;
    });
  });
}

function queueRenderPage(num) { pageRendering ? pageNumPending = num : renderPage(num); }

document.getElementById('prev-page').addEventListener('click', () => {
  if (pageNum <= 1) return;
  pageNum--; queueRenderPage(pageNum);
});

document.getElementById('next-page').addEventListener('click', () => {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++; queueRenderPage(pageNum);
});

btnLer.addEventListener('click', () => {
  const pdfPath = selecao.value;
  if (!pdfPath) return alert('Selecione um PDF!');
  lerPDF.style.display = 'block';
  baixaPDF.style.display = 'none';
  pdfjsLib.getDocument(pdfPath).promise.then(doc => {
    pdfDoc = doc; pageNum = 1;
    document.getElementById('page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum);
  });
});

btnBaixar.addEventListener('click', () => {
  const pdfPath = selecao.value;
  if (!pdfPath) return alert('Selecione um PDF!');
  baixaPDF.style.display = 'block';
  lerPDF.style.display = 'none';
  iframe.src = pdfPath;
});



// PDFs hospedados
const pdfLinks = [
  "",
  "https://fustecdev-edu-app.github.io/pdf/Comunidade-Bnei-Israel.pdf",
  "https://fustecdev-edu-app.github.io/pdf/Galatas cap-1.pdf",
  "https://fustecdev-edu-app.github.io/pdf/Introducao-Galatas-pt-2.pdf",
  "https://fustecdev-edu-app.github.io/pdf/O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf",
  "https://fustecdev-edu-app.github.io/pdf/galatas-cap-2-O-Evangelho-da-liberdade.pdf",
  "https://fustecdev-edu-app.github.io/pdf/תשובה-TESHUVA.pdf",
  "https://fustecdev-edu-app.github.io/pdf/A-Identidade-dos-144-Mil-Selados.pdf",
  "https://fustecdev-edu-app.github.io/pdf/Relação Geral-das-Parashiot.pdf"
];

const pdfNomes = [
  "",
  "Comunidade-Bnei-Israel.pdf",
  "Galatas cap-1.pdf",
  "Introducao-Galatas-pt-2.pdf",
  "O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf",
  "galatas-cap-2-O-Evangelho-da-liberdade.pdf",
  "תשובה-TESHUVA.pdf",
  "A Identidade dos 144 Mil Selados.pdf",
  "Relação Geral das Parashiot"
];

// Popula o select com os PDFs

pdfNomes.forEach((nome, index) => {
  if (index === 0) return; // pula o índice 0 vazio
  const option = document.createElement('option');
  option.value = pdfLinks[index];
  option.textContent = nome;
  selecao.appendChild(option);
});



  document.getElementById("parasha").innerHTML = `
      <h2>📖 Parashá da Semana</h2>
      <p><b>${parasha[0]}</b> (${parasha[1]})</p>
      <p><b>${parasha[2]}</b> (${parasha[3]})</p>
      <p><b>${parasha[4]}</b> (${parasha[5]})</p>
      <p><b>${parasha[6]}</b> (${parasha[7]})</p>
      <p><b>${parasha[8]}</b> (${parasha[9]})</p>
      
      
    `;
    console.log(parasha)

