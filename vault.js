/* ============================
   MIU_33 FULL CINEMATIC BOOT SYSTEM
   ============================ */

/* MATRIX INTRO */
function startMatrix() {
  const matrix = document.getElementById("matrix");
  if (!matrix) return;

  matrix.style.display = "block";

  const chars = "01";
  const columns = Math.floor(window.innerWidth / 20);
  const drops = Array(columns).fill(1);

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  matrix.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = "20px monospace";

    drops.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 20, y * 20);
      if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  const interval = setInterval(draw, 50);

  setTimeout(() => {
    clearInterval(interval);
    matrix.style.opacity = "0";
    setTimeout(() => {
      matrix.style.display = "none";
      matrix.innerHTML = "";
    }, 600);
  }, 1800);
}

/* RANDOM BOOT MESSAGES */
const bootMessages = [
  "> INITIALIZING_RIYADH_NODE...",
  "> SYNCING_MIU_CORE...",
  "> BOOTING_SPATIAL_ENGINE...",
  "> LOADING_DIGITAL_ARCHITECT_MODULE...",
  "> CONNECTING_TO_AI_FEED...",
  "> VERIFYING_USER_IDENTITY...",
  "> ACCESS_GRANTED: MIÙ LIÁN RUÌ"
];

/* TYPING EFFECT */
function typeBootMessage() {
  const bootText = document.getElementById("boot-text");
  if (!bootText) return;

  let msg = bootMessages[Math.floor(Math.random() * bootMessages.length)];
  let i = 0;

  const typer = setInterval(() => {
    bootText.textContent = msg.substring(0, i);
    i++;
    if (i > msg.length) clearInterval(typer);
  }, 40);
}

/* BOOT SOUND */
function playBootSound() {
  try {
    const audio = new Audio("audio/boot.wav");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  } catch (e) {}
}

/* MAIN BOOT SEQUENCE */
startMatrix();

setTimeout(() => {
  typeBootMessage();
  playBootSound();

  const overlay = document.getElementById("boot-overlay");
  const scanlines = document.getElementById("scanlines");
  const content = document.querySelector(".content-wrapper");

  if (overlay) overlay.style.opacity = "0";
  if (scanlines) scanlines.style.opacity = "1";

  setTimeout(() => {
    if (overlay) overlay.style.display = "none";
    if (content) content.classList.add("content-visible");
  }, 600);
}, 2600);

/* ============================
   AUDIO MODULE
   ============================ */

const audioEl = document.getElementById("miu-audio");
const playBtn = document.getElementById("play-log");
const transcriptBtn = document.getElementById("toggle-transcript");
const transcriptEl = document.getElementById("audio-transcript");

if (playBtn && audioEl) {
  playBtn.addEventListener("click", () => {
    if (audioEl.paused) {
      audioEl.play().catch(() => {});
      playBtn.textContent = "PAUSE_LOG_01";
    } else {
      audioEl.pause();
      playBtn.textContent = "PLAY_LOG_01";
    }
  });
}

if (transcriptBtn && transcriptEl) {
  transcriptBtn.addEventListener("click", () => {
    const visible = transcriptEl.style.display === "block";
    transcriptEl.style.display = visible ? "none" : "block";
    transcriptBtn.textContent = visible ? "VIEW_TRANSCRIPT" : "HIDE_TRANSCRIPT";
  });
}

/* ============================
   ENCRYPTED VAULT
   ============================ */

function unlockVault() {
  const keyInput = document.getElementById("accessKey");
  const secretContent = document.getElementById("secretContent");
  const dossier = document.getElementById("dossier-text");

  if (!keyInput || !secretContent || !dossier) return;

  const key = keyInput.value.trim();

  if (key === "RIYADH_NODE_33") {
    secretContent.style.display = "block";
    dossier.textContent = "> VAULT_OPENED: Internal dossiers unlocked for MIU_33.";
  } else {
    secretContent.style.display = "block";
    dossier.textContent = "> ACCESS_DENIED: Invalid key. Node remains encrypted.";
  }
}

window.unlockVault = unlockVault;

/* ============================
   AI SPATIAL FEED
   ============================ */

const feed = document.querySelector(".spatial-feed");
const images = document.querySelectorAll(".spatial-img");
const fullscreen = document.getElementById("fullscreen-view");
const fullscreenImg = document.getElementById("fullscreen-img");

let autoScroll;

function startAutoScroll() {
  if (!feed) return;
  autoScroll = setInterval(() => {
    feed.scrollLeft += 2;
    if (feed.scrollLeft >= feed.scrollWidth - feed.clientWidth) {
      feed.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

if (images && images.length && fullscreen && fullscreenImg) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      stopAutoScroll();
      fullscreenImg.src = img.src;
      fullscreen.style.display = "flex";
    });
  });

  fullscreen.addEventListener("click", () => {
    fullscreen.style.display = "none";
    startAutoScroll();
  });

  startAutoScroll();
}
