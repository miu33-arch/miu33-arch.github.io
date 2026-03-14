document.addEventListener("DOMContentLoaded", () => {
  // 1. Start Matrix
  initMatrixIntro();
  // 2. Setup Fullscreen
  initFullscreenViewer();
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const introLayer = document.getElementById("matrix-intro");
  const bootOverlay = document.getElementById("boot-overlay");
  
  // If no matrix canvas is found, jump straight to boot
  if (!canvas || !introLayer) {
    if (typeof runBootSequence === "function") runBootSequence();
    return;
  }

  const ctx = canvas.getContext("2d");
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

  // After 3 seconds of Matrix, fade out and start the Boot Text
  setTimeout(() => {
    introLayer.style.opacity = "0";
    setTimeout(() => { 
      introLayer.style.display = "none"; 
      clearInterval(interval);
      
      // TRIGGER BOOT TEXT
      if (typeof runBootSequence === "function") {
          runBootSequence();
      } else {
          // Emergency Hide if vault.js is missing
          if(bootOverlay) bootOverlay.style.display = "none";
      }
    }, 1000);
  }, 3000);
}

function initFullscreenViewer() {
  const view = document.getElementById("fullscreen-view");
  const img = document.getElementById("fullscreen-img");
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spatial-img") || e.target.closest(".project-card img")) {
      if(img && view) {
        img.src = e.target.src;
        view.style.display = "flex";
      }
    }
  });
  if(view) view.onclick = () => view.style.display = "none";
}

function toggleAudio() {
  const audio = document.getElementById("miu-audio");
  const btn = document.getElementById("play-log");
  if (audio.paused) { 
    audio.play(); 
    btn.textContent = "[ UPLINK_ACTIVE ]"; 
    btn.style.color="#ff3c3c"; 
  } else { 
    audio.pause(); 
    btn.textContent = "[ ESTABLISH_UPLINK ]"; 
    btn.style.color="#3cff9b"; 
  }
}

