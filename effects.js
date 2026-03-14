// MIU_33 EFFECTS ENGINE v2.1 - OPTIMIZED FOR RIYADH_NOD
document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas?.getContext("2d");
  const introLayer = document.getElementById("matrix-intro");
  if (!canvas || !introLayer) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = "01MIU33_ARCH_缪联睿";
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#3cff9b";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  const interval = setInterval(draw, 50);

  setTimeout(() => {
    introLayer.style.opacity = "0";
    setTimeout(() => { 
      introLayer.style.display = "none"; 
      clearInterval(interval);
      if (typeof runBootSequence === "function") runBootSequence();
    }, 1000);
  }, 3500);
}

function initFullscreenViewer() {
  const view = document.getElementById("fullscreen-view");
  const img = document.getElementById("fullscreen-img");
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spatial-img") || e.target.closest(".project-card img")) {
      img.src = e.target.src;
      view.style.display = "flex";
    }
  });
  view.onclick = () => view.style.display = "none";
}

function toggleAudio() {
  const audio = document.getElementById("miu-audio");
  const btn = document.getElementById("play-log");
  if (audio.paused) { audio.play(); btn.textContent = "[ UPLINK_ACTIVE ]"; btn.style.color="#ff3c3c"; }
  else { audio.pause(); btn.textContent = "[ ESTABLISH_UPLINK ]"; btn.style.color="#3cff9b"; }
}
