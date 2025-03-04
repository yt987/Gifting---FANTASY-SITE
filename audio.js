const audio = document.createElement("audio");
audio.id = "background-audio";
audio.src = "medieval.mp3";
audio.autoplay = true;
audio.loop = true;
audio.muted = true;
audio.playsInline = true;
document.body.appendChild(audio);

window.addEventListener("click", function () {
  audio.muted = false;
  audio.play();
}, { once: true });