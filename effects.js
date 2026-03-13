// MIU_33 EFFECTS ENGINE v2.1 - OPTIMIZED FOR RIYADH_NODE
document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initTypewriter();
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas?.getContext("2d");
  const introLayer = document.getElementById("matrix-intro");
  const bootOverlay = document.getElementById("boot-overlay");
  if (!canvas || !introLayer || !ctx) return;
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
    if(bootOverlay) {
      bootOverlay.style.opacity = "0";
      setTimeout(() => { bootOverlay.style.display = "none"; }, 800);
    }
  }, 2500);
  setTimeout(() => {
    if(introLayer) {
      introLayer.style.opacity = "0";
      setTimeout(() => { introLayer.style.display = "none"; clearInterval(interval); }, 1000);
    }
  }, 5000);
}

function solveMiuPuzzle() {
  const challenge = prompt("Passive cooling element? (Hint: C...)");
  if (challenge?.toLowerCase().includes("courtyard")) {
    alert("LOGIC_VERIFIED. ACCESSING_VAULT...");
    document.getElementById("vault").scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { document.getElementById("vault-pass").focus(); }, 1000);
  }
}

function initTypewriter() {
  const heroText = document.querySelector('.hero-sub');
  if (heroText) {
    heroText.style.borderRight = "2px solid #3cff9b";
    heroText.style.whiteSpace = "nowrap";
    heroText.style.overflow = "hidden";
    heroText.style.width = "0";
    heroText.style.animation = "typing 3.5s steps(40, end) forwards";
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

function toggleAudio() {
  const audio = document.getElementById("miu-audio");
  const btn = document.getElementById("play-log");
  if (audio.paused) { audio.play(); btn.textContent = "[ UPLINK_ACTIVE ]"; } 
  else { audio.pause(); btn.textContent = "[ ESTABLISH_UPLINK ]"; }
}
