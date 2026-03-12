// MIU_33 EFFECTS ENGINE v2.0 - 5_SECOND_MATRIX_SEQUENCE
document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioLog();
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas?.getContext("2d");
  const introLayer = document.getElementById("matrix-intro");
  const bootOverlay = document.getElementById("boot-overlay");
  if (!canvas || !introLayer || !ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = "01MIU33_ARCH";
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
  setTimeout(() => { if(bootOverlay) { bootOverlay.style.opacity = "0"; setTimeout(() => { bootOverlay.style.display = "none"; }, 800); } }, 2000);
  setTimeout(() => { introLayer.style.opacity = "0"; setTimeout(() => { introLayer.style.display = "none"; clearInterval(interval); }, 1000); }, 7000);
}

function initAudioLog() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  if (!playBtn || !audio) return;
  playBtn.onclick = () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "[ UPLINK_ACTIVE ]";
    } else {
      audio.pause();
      playBtn.textContent = "[ ESTABLISH_UPLINK ]";
    }
  };
}

function solveMiuPuzzle() {
  const challenge = prompt("Identify the primary architectural element used for passive cooling in traditional Najdi design. [HINT: C...]");
  if (challenge?.toLowerCase().includes("courtyard")) {
    alert("LOGIC_VERIFIED. SIGNAL: Vault access protocols initiated.");
    document.getElementById("vault")?.scrollIntoView({ behavior: 'smooth' });
  }
}

function initFullscreenViewer() {
  const view = document.getElementById("fullscreen-view");
  const img = document.getElementById("fullscreen-img");
  if(!view || !img) return;
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spatial-img") || e.target.closest(".project-card img")) {
      img.src = e.target.src;
      view.style.display = "flex";
    }
  });
  view.onclick = () => { view.style.display = "none"; };
}

