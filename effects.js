// MATRIX INTRO + BOOT
window.addEventListener("load", () => {
  const bootOverlay = document.getElementById("boot-overlay");
  const bootText = document.getElementById("boot-text");

  // Reset visibility
  bootOverlay.style.opacity = "1";
  bootOverlay.style.display = "flex";

  // Boot typing effect
  setTimeout(() => {
    bootText.textContent = "> INITIALIZING_MIU_33...";
  }, 300);

  // Fade out boot overlay
  setTimeout(() => {
    bootOverlay.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    bootOverlay.style.display = "none";
  }, 2600);
});
document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioConsole();
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const letters = "01MIU33";
  const fontSize = 16;
  let columns = canvas.width / fontSize;
  let drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#3cff9b";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const interval = setInterval(draw, 50);

  // Boot overlay timing
  setTimeout(() => {
    const boot = document.getElementById("boot-overlay");
    if (boot) boot.style.opacity = "0";
  }, 1800);

  setTimeout(() => {
    const boot = document.getElementById("boot-overlay");
    if (boot) boot.style.display = "none";
  }, 2300);

  // Remove matrix intro after a bit
  setTimeout(() => {
    const intro = document.getElementById("matrix-intro");
    if (intro) intro.style.opacity = "0";
  }, 2600);

  setTimeout(() => {
    const intro = document.getElementById("matrix-intro");
    if (intro) intro.style.display = "none";
    clearInterval(interval);
  }, 3200);
}

// FULLSCREEN VIEWER

function initFullscreenViewer() {
  const fullscreenView = document.getElementById("fullscreen-view");
  const fullscreenImg = document.getElementById("fullscreen-img");

  if (!fullscreenView || !fullscreenImg) return;

  function attachClickToImages(selector) {
    const imgs = document.querySelectorAll(selector);
    imgs.forEach(img => {
      img.addEventListener("click", () => {
        fullscreenImg.src = img.src;
        fullscreenView.style.display = "flex";
      });
    });
  }

  attachClickToImages(".spatial-img");
  attachClickToImages(".project-card img");

  fullscreenView.addEventListener("click", () => {
    fullscreenView.style.display = "none";
    fullscreenImg.src = "";
  });
}

// AUDIO CONSOLE

function initAudioConsole() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  const toggleTranscript = document.getElementById("toggle-transcript");
  const transcript = document.getElementById("audio-transcript");

  if (playBtn && audio) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = "PAUSE_LOG_01";
      } else {
        audio.pause();
        playBtn.textContent = "PLAY_LOG_01";
      }
    });

    audio.addEventListener("ended", () => {
      playBtn.textContent = "PLAY_LOG_01";
    });
  }

  if (toggleTranscript && transcript) {
    toggleTranscript.addEventListener("click", () => {
      if (transcript.style.display === "none") {
        transcript.style.display = "block";
        toggleTranscript.textContent = "HIDE_TRANSCRIPT";
      } else {
        transcript.style.display = "none";
        toggleTranscript.textContent = "VIEW_TRANSCRIPT";
      }
    });
  }
}
