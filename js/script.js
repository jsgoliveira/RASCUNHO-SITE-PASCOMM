let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#btn-proximo');
let btnAnter = document.querySelector('#btn-anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;

// Evento para avançar
btnProx.addEventListener('click', () => {
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0;
    }
    mostrarSlider();
});

// Evento para voltar
btnAnter.addEventListener('click', () => {
    imgAtiva--;
    if (imgAtiva < 0) {
        imgAtiva = contadorImg - 1;
    }
    mostrarSlider();
});

// Função para mostrar o slider
function mostrarSlider() {
    // Elementos atualmente ativos
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

    // Remover classes ativas
    if (antigaImg) antigaImg.classList.remove('ativo');
    if (antigoBtnNav) antigoBtnNav.classList.remove('ativo');

    // Adicionar classes ativas ao novo elemento
    imgSlider[imgAtiva].classList.add('ativo');
    btnNav[imgAtiva].classList.add('ativo');
}

// Navegação direta pelos botões
btnNav.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        imgAtiva = indice;
        mostrarSlider();
    });
});

//Evento para avanço automático dos slides
function avancarSlider() {
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0;
    }
    mostrarSlider();
}

//Configurando o autoplay
let autoplay = setInterval(avancarSlider, 7000);

function resetarAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(avancarSlider, 7000);
}

// //Configurando o envio do Formulário
// document.getElementById("cadastroDizimista").addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var formData = new FormData(this);
//     var dados = {};
  
//     formData.forEach((value, key) => {
//       dados[key] = value.trim(); // Remove espaços em branco extras
//     });
  
//     console.log("Dados enviados:", dados); // Depuração no console
  
//     fetch("https://script.google.com/macros/s/AKfycbxgXdKzL1pgm_29kwG9cs_Le996RT9nOhBp5Ll_UYtPqkQExj-HkcxLvOALZs1kmuc/exec", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(dados)
//     })
//     .then(response => response.text())
//     .then(data => {
//       console.log("Resposta do servidor:", data);
//       document.getElementById("resposta").textContent = data.includes("Sucesso") ? 
//         "Enviado com sucesso!" : "Erro no envio!";
//       document.getElementById("cadastroDizimista").reset();
//     })
//     .catch(error => {
//       console.error("Erro no envio:", error);
//       document.getElementById("resposta").textContent = "Erro ao enviar!";
//     });
//   });

  //Desativa a animação dos contatos
  if (window.innerWidth <= 1064) {
    document.querySelector(".contatos-container").style.animation = "none";
}

//Responsividade do Menu de Navegação
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    console.log("Botão clicado!");
    navList.classList.toggle("active");
    hamburger.classList.toggle("active"); 
});