/* ============================
   MIU_33 CINEMATIC BOOT SYSTEM
   ============================ */

/* MATRIX INTRO (4 SECONDS) */
function startMatrix() {
  const intro = document.getElementById("matrix-intro");
  const canvas = document.getElementById("matrix-canvas");
  if (!intro || !canvas) return;

  const chars = "01";
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(1);

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
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 1000);
  }, 4000);
}

/* RANDOM BOOT MESSAGES */
const bootMessages = [
  "> INITIALIZING_RIYADH_NODE...",
  "> SYNCING_MIU_CORE...",
  "> BOOTING_SPATIAL_ENGINE...",
  "> LOADING_DIGITAL_ARCHITECT_MODULE...",
  "> CONNECTING_TO_AI_FEED...",
  "> VERIFYING_USER_IDENTITY...",
  "> ACCESS_GRANTED: 缪联睿 (ANAMY PADILLA)"
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
}, 4400);

/* ============================
   MOBILE VIDEO AUTOPLAY FIX
   ============================ */

document.addEventListener("touchstart", () => {
  document.querySelectorAll("video").forEach(v => {
    v.muted = true;
    v.play().catch(() => {});
  });
}, { once: true });

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
   ENCRYPTED VAULT (PASSKEY: archmiu33)
   ============================ */

function unlockVault() {
  const keyInput = document.getElementById("accessKey");
  const secretContent = document.getElementById("secretContent");
  const dossier = document.getElementById("dossier-text");

  if (!keyInput || !secretContent || !dossier) return;

  const key = keyInput.value.trim();

  if (key === "archmiu33") {
    secretContent.style.display = "block";
    dossier.textContent = "> VAULT_OPENED: Internal dossiers unlocked.";
    vaultAccessGranted();
    showLegalDossier();
  } else {
    secretContent.style.display = "block";
    dossier.textContent = "> ACCESS_DENIED: Invalid key. Node remains encrypted.";
    vaultAccessDenied();
  }
}

window.unlockVault = unlockVault;

/* ============================
   LEGAL + ABOUT DOSSIER
   ============================ */

function showLegalDossier() {
  const dossier = document.getElementById("legal-dossier");
  const log = document.getElementById("legal-text");

  if (!dossier || !log) return;

  const legalContent = `
> ACCESSING_INTERNAL_DOSSIERS...
> DECRYPTING_STUDIO_PROFILE...
> DECRYPTING_TOS...
> DECRYPTING_PRIVACY_POLICY...
> DISPLAYING_DOCUMENTS:

----------------------------------------
ABOUT_ME / STUDIO_PROFILE
----------------------------------------
I’m 缪联睿 (Anamy Padilla) — architect, digital designer, and founder of MIU_33.
My work moves between physical architecture and AI-driven spatial design, exploring calm,
minimal environments shaped by light, proportion, and narrative logic.
Based in Riyadh, I develop spatial concepts, digital assets, and atmospheric studies that merge
traditional architectural discipline with emerging computational tools.
MIU_33 functions as both a studio and a system — a place where physical form and digital
imagination operate as one continuous design process.

----------------------------------------
TERMS OF SERVICE — MIU_33 DIGITAL ARCHITECT STUDIO
Last Updated: March 2026
----------------------------------------

1. Acceptance of Terms
By accessing or using the MIU_33 website, digital assets, or services, you agree to these Terms.

2. Studio Services
MIU_33 provides architectural design, AI-assisted spatial design, digital assets, and conceptual studies.

3. Intellectual Property
All images, designs, text, videos, and digital assets are the exclusive property of MIU_33 unless noted.

4. User Conduct
You agree not to misuse or interfere with the website or its content.

5. Digital Asset Purchases
Digital assets follow the licensing terms provided at purchase.

6. External Links
MIU_33 is not responsible for third-party platforms.

7. Limitation of Liability
Use of the website is at your own risk.

8. Modifications
Terms may be updated at any time.

----------------------------------------
PRIVACY POLICY — MIU_33 DIGITAL ARCHITECT STUDIO
Last Updated: March 2026
----------------------------------------

1. Information We Collect
Email, message content, and anonymous analytics.

2. How We Use Information
To respond to inquiries and maintain communication.

3. Cookies & Analytics
Anonymous traffic data may be collected.

4. Third-Party Services
External platforms have their own privacy policies.

5. Data Security
Reasonable measures are taken to protect information.

6. Children’s Privacy
Not intended for children under 13.

7. Changes to This Policy
May be updated at any time.

----------------------------------------
END_OF_DOCUMENT
`;

  dossier.style.display = "block";
  log.textContent = "";

  let i = 0;
  const speed = 8;

  function type() {
    if (i < legalContent.length) {
      log.textContent += legalContent.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

window.showLegalDossier = showLegalDossier;

/* ============================
   AI SPATIAL FEED (AUTO-SCROLL + FULLSCREEN SUPPORT)
   ============================ */

const feedNode = document.querySelector(".spatial-feed");
const images = document.querySelectorAll(".spatial-img");
const fullscreen = document.getElementById("fullscreen-view");
const fullscreenImg2 = document.getElementById("fullscreen-img");

let autoScroll;

function startAutoScroll() {
  if (!feedNode) return;
  autoScroll = setInterval(() => {
    feedNode.scrollLeft += 2;
    if (feedNode.scrollLeft >= feedNode.scrollWidth - feedNode.clientWidth) {
      feedNode.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

if (feedNode) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  }, { threshold: 0.3 });

  observer.observe(feedNode);
}

if (images && images.length && fullscreen && fullscreenImg2) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      stopAutoScroll();
      fullscreenImg2.src = img.src;
      fullscreen.style.display = "flex";
    });
  });

  fullscreen.addEventListener("click", () => {
    fullscreen.style.display = "none";
    startAutoScroll();
  });
}
