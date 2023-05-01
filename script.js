let musicas = [
		{
    titulo: "Melhor só",
    artista: "Kayblack",
    src: "musicas/Kayblack - Melhor Só (Audio Oficial)-Trap zera.mp3",
   },
   {
    titulo: "Preferida",
    artista: "Kayblack",
    src: "musicas/Preferida-KayBlack - Topic.mp3",
   },
   {
    titulo: "Segredo",
    artista: "Kayblack",
    src: "musicas/Segredo-KayBlack - Topic.mp3",
   },
   {
    titulo: "Contradições - Speed up",
    artista: "Kayblack",
    src: "musicas/Kayblack - Contradições (Álbum Completo)-Nz Speed Up.mp3",
   },
	 {
    titulo: "Coração de Gelo",
    artista: "WIU",
    src: "musicas/WIU - Coração de Gelo-30PRAUM.mp3",
  },
  {
    titulo: "60K🐎",
    artista: "Major RD",
    src: "musicas/Major RD - 60K 🐎 (prod. @baratafather)-Major RD.mp3",
  },
  {
    titulo: "Copão - Sped Up",
    artista: "PJ houdini",
    src: "musicas/Pj houdini - Copão (sped up tiktok)-yauke.mp3",
  },
  {
    titulo: "Mirante - Sped up",
    artista: "Tz da coronel ft.Borges",
    src: "musicas/Tz da Coro - Mirante ft.Borges.mp3",
  },
  {
    titulo: "seção de cria",
    artista: "Arthurzim",
    src: "musicas/Fame remix.mp3",
  },
  {
    titulo: "Saque-185",
    artista: "Muitosk",
    src: "musicas/Saque-185 - Topic.mp3",
  }

];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
renderizarMusica(indexMusica);
// Eventos
document.querySelector('.menu').addEventListener("click", mostrarCd);

document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);
musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 9;
  }
  renderizarMusica(indexMusica);
});

document.querySelector(".proxima").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 9) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

document.querySelector('.sair').addEventListener("click", sair);

// Funções
function sair(){
	document.querySelector('main').style.display = "none";
	document.querySelector('.container').style.opacity = 100.0;
	document.querySelector('.menu').style.display = "flex";
}

function mostrarCd(){
	document.querySelector('.menu').style.display = "none";
	document.querySelector('main').style.display = "flex";
	document.querySelector('main').style.display = "column";
  document.querySelector('.sairDiv').style.display = "flex";
	document.querySelector('.container').style.opacity = 0.15;
}


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        tocarMusica()
        
    });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}
function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    if (musica.duration === musica.currentTime) {
	renderizarMusica(indexMusica); 
	
}
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return campoMinutos + ":" + campoSegundos;
}
