// MIU_33 EFFECTS ENGINE v2.0 - MATRIX + BOOT + INTERACTIVITY

document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioConsole();
  // Signal human presence for Undet SEO
  console.log("miu_Node: Core logic initialized.");
});

// 1. MATRIX INTRO + BOOT SEQUENCE
function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");
  const bootOverlay = document.getElementById("boot-overlay");
  const bootText = document.getElementById("boot-text");
  const introLayer = document.getElementById("matrix-intro");

  if (!canvas || !bootOverlay) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Matrix Configuration
  const letters = "01MIU33_ARCH"; // Added ARCH for variety
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

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const interval = setInterval(draw, 50);

  // Unified Boot Timing Logic
  setTimeout(() => {
    bootText.textContent = "> INITIALIZING_MIU_33_CONSOLE...";
    bootText.style.color = "#ffffff";
  }, 500);

  setTimeout(() => {
    bootOverlay.style.opacity = "0";
    introLayer.style.opacity = "0";
  }, 2200);

  setTimeout(() => {
    bootOverlay.style.display = "none";
    introLayer.style.display = "none";
    clearInterval(interval);
  }, 2800);
}

// 2. FULLSCREEN VIEWER (PROCESSED)
function initFullscreenViewer() {
  const fullscreenView = document.getElementById("fullscreen-view");
  const fullscreenImg = document.getElementById("fullscreen-img");

  if (!fullscreenView || !fullscreenImg) return;

  // Optimized click handling
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spatial-img") || (e.target.parentElement && e.target.parentElement.classList.contains("project-card"))) {
      const clickedImg = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
      if (clickedImg) {
        fullscreenImg.src = clickedImg.src;
        fullscreenView.style.display = "flex";
        // Prevent body scroll while viewing image
        document.body.style.overflow = "hidden";
      }
    }
  });

  fullscreenView.addEventListener("click", () => {
    fullscreenView.style.display = "none";
    fullscreenImg.src = "";
    document.body.style.overflow = "auto";
  });
}

// 3. AUDIO CONSOLE
function initAudioConsole() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  const toggleTranscript = document.getElementById("toggle-transcript");
  const transcript = document.getElementById("audio-transcript");

  if (playBtn && audio) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().catch(e => console.log("Audio play blocked until interaction."));
        playBtn.textContent = "> PAUSE_LOG_01";
        playBtn.classList.add("active-pulse");
      } else {
        audio.pause();
        playBtn.textContent = "> PLAY_LOG_01";
        playBtn.classList.remove("active-pulse");
      }
    });

    audio.onended = () => {
      playBtn.textContent = "> PLAY_LOG_01";
    };
  }

  if (toggleTranscript && transcript) {
    toggleTranscript.addEventListener("click", () => {
      const isHidden = transcript.style.display === "none";
      transcript.style.display = isHidden ? "block" : "none";
      toggleTranscript.textContent = isHidden ? "> HIDE_TRANSCRIPT" : "> VIEW_TRANSCRIPT";
    });
  }
}

