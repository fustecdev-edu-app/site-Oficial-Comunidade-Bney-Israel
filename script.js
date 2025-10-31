


import { VamosMorarNoCeu } from "./even.js";


// MENU
const Ainicio = document.querySelector(".Ainicio")



var dat = new Date()
var dia = dat.getUTCDay()





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
  "https://fustecdev-edu-app.github.io/pdf/A-Identidade-dos-144-Mil-Selados.pdf"
];

const pdfNomes = [
  "",
  "Comunidade-Bnei-Israel.pdf",
  "Galatas cap-1.pdf",
  "Introducao-Galatas-pt-2.pdf",
  "O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf",
  "galatas-cap-2-O-Evangelho-da-liberdade.pdf",
  "תשובה-TESHUVA.pdf",
  "A Identidade dos 144 Mil Selados.pdf"
];

// Popula o select com os PDFs

pdfNomes.forEach((nome, index) => {
  if (index === 0) return; // pula o índice 0 vazio
  const option = document.createElement('option');
  option.value = pdfLinks[index];
  option.textContent = nome;
  selecao.appendChild(option);
});




const parashaTraducoes = {
  "Bereshit": "No Princípio (Gênesis 1:1–6:8)",
  "Noach": "Noé (Gênesis 6:9–11:32)",
  "Lech-Lecha": "Vai-te (Gênesis 12:1–17:27)",
  "Vayera": "E apareceu (Gênesis 18:1–22:24)",
  "Chayei Sarah": "A vida de Sara (Gênesis 23:1–25:18)",
  "Toldot": "Gerações (Gênesis 25:19–28:9)",
  "Vayetze": "E saiu (Gênesis 28:10–32:3)",
  "Vayishlach": "E enviou (Gênesis 32:4–36:43)",
  "Vayeshev": "E habitou (Gênesis 37:1–40:23)",
  "Miketz": "No fim (Gênesis 41:1–44:17)",
  "Vayigash": "E aproximou-se (Gênesis 44:18–47:27)",
  "Vayechi": "E viveu (Gênesis 47:28–50:26)",
  "Shemot": "Nomes (Êxodo 1:1–6:1)",
  "Vaera": "E apareceu (Êxodo 6:2–9:35)",
  "Bo": "Vem (Êxodo 10:1–13:16)",
  "Beshalach": "Quando enviou (Êxodo 13:17–17:16)",
  "Yitro": "Jetro (Êxodo 18:1–20:23)",
  "Mishpatim": "Ordenanças (Êxodo 21:1–24:18)",
  "Terumah": "Oferta (Êxodo 25:1–27:19)",
  "Tetzaveh": "Ordenarás (Êxodo 27:20–30:10)",
  "Ki Tisa": "Quando levantares (Êxodo 30:11–34:35)",
  "Vayakhel": "E reuniu (Êxodo 35:1–38:20)",
  "Pekudei": "Contas (Êxodo 38:21–40:38)",
  "Vayikra": "E chamou (Levítico 1:1–5:26)",
  "Tzav": "Ordena (Levítico 6:1–8:36)",
  "Shemini": "O oitavo dia (Levítico 9:1–11:47)",
  "Tazria": "Quando conceber (Levítico 12:1–13:59)",
  "Metzora": "O leproso (Levítico 14:1–15:33)",
  "Acharei Mot": "Depois da morte (Levítico 16:1–18:30)",
  "Kedoshim": "Santos (Levítico 19:1–20:27)",
  "Emor": "Dize (Levítico 21:1–24:23)",
  "Behar": "No monte (Levítico 25:1–26:2)",
  "Bechukotai": "Nos meus estatutos (Levítico 26:3–27:34)",
  "Bamidbar": "No deserto (Números 1:1–4:20)",
  "Nasso": "Levanta (Números 4:21–7:89)",
  "Behaalotecha": "Quando acenderes (Números 8:1–12:16)",
  "Shelach": "Envia (Números 13:1–15:41)",
  "Korach": "Corá (Números 16:1–18:32)",
  "Chukat": "Estatuto (Números 19:1–22:1)",
  "Balak": "Balaque (Números 22:2–25:9)",
  "Pinchas": "Finéias (Números 25:10–30:1)",
  "Matot": "Tribos (Números 30:2–32:42)",
  "Masei": "Jornadas (Números 33:1–36:13)",
  "Devarim": "Palavras (Deuteronômio 1:1–3:22)",
  "Vaetchanan": "Suplicou (Deuteronômio 3:23–7:11)",
  "Eikev": "Consequência (Deuteronômio 7:12–11:25)",
  "Reeh": "Vê (Deuteronômio 11:26–16:17)",
  "Shoftim": "Juízes (Deuteronômio 16:18–21:9)",
  "Ki Tetze": "Quando saíres (Deuteronômio 21:10–25:19)",
  "Ki Tavo": "Quando entrares (Deuteronômio 26:1–29:8)",
  "Nitzavim": "Estais de pé (Deuteronômio 29:9–30:20)",
  "Vayelech": "E foi (Deuteronômio 31:1–31:30)",
  "Haazinu": "Dá ouvidos (Deuteronômio 32:1–32:52)",
  "Vezot Haberachah": "Esta é a bênção (Deuteronômio 33:1–34:12)"
};

/* Normaliza strings: remove 'Parashat', parênteses, hífens => espaços, trim, lower */
function normalize(s) {
  return s
    .replace(/Parashat\s+/i, '')      // remove "Parashat "
    .replace(/[()]/g, '')             // remove parênteses
    .replace(/[-–—]/g, ' ')           // hífens viram espaço
    .replace(/[\/,;]+/g, ' / ')       // separadores ficam padronizados
    .replace(/\s+/g, ' ')             // espaços múltiplos -> 1
    .trim()
    .toLowerCase();
}

/* monta mapa normalizado das traduções para busca eficiente */
const normalizedMap = {};
for (const key of Object.keys(parashaTraducoes)) {
  normalizedMap[normalize(key)] = parashaTraducoes[key];
}

/* tenta traduzir títulos compostos */
function traduzirTitulo(rawTitle) {
  if (!rawTitle) return null;
  const clean = normalize(rawTitle);
  // split por " / " (caso de Matot / Masei ou "Matot-Masei")
  const parts = clean.split(/\s*\/\s*|\s+and\s+|\s*&\s+/);
  const translatedParts = parts.map(part => {
    // tentar direto
    if (normalizedMap[part]) return normalizedMap[part];
    // tentar capitalizar palavras para comparar com chaves originais (fallback)
    const candidate = part.split(' ').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ');
    if (parashaTraducoes[candidate]) return parashaTraducoes[candidate];
    // se não encontrou, tentar versão sem espaços (pouco provável) ou retornar null
    return null;
  });

  // junte apenas as que foram traduzidas
  const found = translatedParts.filter(Boolean);
  if (found.length) return found.join(' / ');
  return null;
}

async function mostrarParasha() {
  try {
    const res = await fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=3470127");
    const data = await res.json();

    console.log("DEBUG: itens retornados:", data.items); // <-- se algo der errado, veja aqui

    const parashaItem = data.items.find(i => i.category === "parashat" || i.slug === "parashat");
    const titleRaw = parashaItem ? (parashaItem.title || parashaItem.hebrew || "") : null;

    if (!parashaItem) {
      document.getElementById("parasha").innerText = "Nenhuma Parashá encontrada para esta semana.";
      return;
    }

    const traducao = traduzirTitulo(titleRaw) || "Tradução não disponível";

    document.getElementById("parasha").innerHTML = `
      <h2>📖 Parashá da Semana</h2>
      <p><b>${parashaItem.title}</b> (${parashaItem.hebrew || ''})</p>
      <p><i>${traducao}</i></p>
      
    `;
  } catch (err) {
    console.error("Erro ao buscar Parashá:", err);
    document.getElementById("parasha").innerText = "Erro ao buscar Parashá (veja console).";
  }
}

mostrarParasha();
var cont = 0
const rool = document.querySelector(".pai")
document.querySelector(".a1").addEventListener("click", () => {

  VamosMorarNoCeu.map((indice) => {

    var filho = document.createElement('p');
    filho.textContent = VamosMorarNoCeu[cont];

    rool.appendChild(filho);
    cont++

  })

})



