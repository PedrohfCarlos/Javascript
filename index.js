const nomeMusica = document.getElementById("nome-da-musica");
const audio = document.getElementById("audio");
const Play = document.getElementById("play");

nomeMusica.innerText = "Minha Musica Favorita";

function tocarMusica() {
  audio.play();
}

play.addEventListener("click", tocarMusica);
