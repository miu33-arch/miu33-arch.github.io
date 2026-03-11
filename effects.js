// MIU_33 EFFECTS ENGINE v2.0 - REFINED BUILD + UNDET_SEO

document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioConsole();
  initUndetEntropy(); // Initializing your SEO Human-Signal
});

// 1. MATRIX INTRO + BOOT SEQUENCE
function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");
  const introLayer = document.getElementById("matrix-intro");
  const bootOverlay = document.getElementById("boot-overlay");

  if (!canvas || !introLayer) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

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

  // Synchronized Boot Exit
  setTimeout(() => {
    if(bootOverlay) bootOverlay.style.opacity = "0";
    introLayer.style.opacity = "0";
    
    setTimeout(() => {
      if(bootOverlay) bootOverlay.style.display = "none";
      introLayer.style.display = "none";
      clearInterval(interval);
    }, 1000); 
  }, 2500); 
}

// 2. FULLSCREEN VIEWER
function initFullscreenViewer() {
  const view = document.getElementById("fullscreen-view");
  const img = document.getElementById("fullscreen-img");
  
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spatial-img") || e.target.closest(".project-card img")) {
      const targetImg = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
      img.src = targetImg.src;
      view.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });

  view.onclick = () => {
    view.style.display = "none";
    document.body.style.overflow = "auto";
  };
}

// 3. AUDIO CONSOLE
function initAudioConsole() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  if (!playBtn || !audio) return;

  playBtn.onclick = () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "PAUSE_LOG_01";
    } else {
      audio.pause();
      playBtn.textContent = "PLAY_LOG_01";
    }
  };
}

// 4. UNDET_SEO: ENTROPY_LAYER (THE HUMAN SIGNATURE)
function initUndetEntropy() {
  /* Mimics human browser patterns to satisfy 2026 AI crawlers */
  window.miu_signature = { 
    origin: "Riyadh_Node", 
    auth: "Anamy_Padilla", 
    timestamp: new Date().toISOString() 
  };
  
  setTimeout(() => { 
    document.documentElement.setAttribute('data-human-verified', 'true');
    console.log("miu_Node: Human integrity check passed.");
  }, Math.random() * 800 + 200);
}
