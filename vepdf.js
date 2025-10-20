const selec = document.querySelector(".select");
    const btn = document.querySelector(".iputbtn1");
    const btn2 = document.querySelector(".iputbtn2");
    const btnLerPDF = document.querySelector(".btnlerPdf")
    const lerPDF = document.querySelector(".lerPDF")
    const selexao = document.querySelector(".selexao")
    const BaixarPDF = document.querySelector(".btnBaixarPdf")
    const telabaixarpdf = document.querySelector(".BaixaPdf")
    const Opcao = document.querySelector(".Opcao")
    const iframe = document.querySelector(".iframe") 
    const pdfContainer = document.getElementById("pdf-container");
    const controls = document.getElementById("controls");
    const canvas = document.getElementById("pdf-render");
    const ctx = canvas.getContext("2d");


    // btn ler pdf abre a janela de le PDF***

    btnLerPDF.addEventListener("click", () =>{
      Opcao.style.display="none"
      lerPDF.style.display="block"
      selexao.style.display="block"
      btn.style.display="block"
     
      
    })

    BaixarPDF.addEventListener("click", () => {
      Opcao.style.display="none"
      selexao.style.display="block"
      telabaixarpdf.style.display="block"
       btn2.style.display="block"
      

    })







    let pdfDoc = null,
        pageNum = 1,
        pageIsRendering = false,
        pageNumIsPending = null,
        scale = 1.3;

    // PDFs hospedados
    const pdfLinks = [
      "",
      "https://fustecdev-edu-app.github.io/pdf/Comunidade-Bnei-Israel.pdf",
      "https://fustecdev-edu-app.github.io/pdf/Galatas cap-1.pdf",
      "https://fustecdev-edu-app.github.io/pdf/Introducao-Galatas-pt-2.pdf",
      "https://fustecdev-edu-app.github.io/pdf/O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf",
      "https://fustecdev-edu-app.github.io/pdf/galatas-cap-2-O-Evangelho-da-liberdade.pdf",
      "https://fustecdev-edu-app.github.io/pdf/תשובה-TESHUVA.pdf"
    ];

    const pdfNomes = [
      "",
      "Comunidade-Bnei-Israel.pdf",
      "Galatas cap-1.pdf",
      "Introducao-Galatas-pt-2.pdf",
      "O_verdadeiro_ensino_de_Jesus_e_Paulo.pdf",
      "galatas-cap-2-O-Evangelho-da-liberdade.pdf",
      "תשובה-TESHUVA.pdf"
    ];

    // Preenche o select
    pdfNomes.forEach((nome, i) => {
      if (i === 0) return;
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = nome;
      selec.appendChild(opt);
    });

    // Configuração do pdf.js
    const pdfjsLib = window["pdfjs-dist/build/pdf"];
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

    const renderPage = num => {
      pageIsRendering = true;
      pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderCtx = { canvasContext: ctx, viewport };

        page.render(renderCtx).promise.then(() => {
          pageIsRendering = false;
          if (pageNumIsPending !== null) {
            renderPage(pageNumIsPending);
            pageNumIsPending = null;
          }
        });

        document.getElementById("page-num").textContent = num;
      });
    };

    const queueRenderPage = num => {
      if (pageIsRendering) {
        pageNumIsPending = num;
      } else {
        renderPage(num);
      }
    };

    const showPrevPage = () => {
      if (pageNum <= 1) return;
      pageNum--;
      queueRenderPage(pageNum);
    };

    const showNextPage = () => {
      if (pageNum >= pdfDoc.numPages) return;
      pageNum++;
      queueRenderPage(pageNum);
    };

    document.getElementById("prev-page").addEventListener("click", showPrevPage);
    document.getElementById("next-page").addEventListener("click", showNextPage);

    // Botão Pesquisar
    btn.addEventListener("click", () => {
      const index = selec.value;
      if (index == 0) return alert("Selecione um PDF válido!");

      const url = pdfLinks[index];
      controls.style.display = "flex"; // Mostra controles
      pdfContainer.scrollTop = 0;

      pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        document.getElementById("page-count").textContent = pdfDoc.numPages;
        pageNum = 1;
        renderPage(pageNum);
      });
    });

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
               btn2.addEventListener("click", () =>{ 
                valorSelecionado = selec.options[selec.selectedIndex].value; 
                iframe.src=array[valorSelecionado] 
            });

      function sair() {
         window.location.reload(true)
      }      