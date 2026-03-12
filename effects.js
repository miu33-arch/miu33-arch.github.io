// MIU_33 EFFECTS ENGINE v2.0 - 5_SECOND_MATRIX_SEQUENCE

document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioLog(); // Corrected the name from initAudioConsole
  // initUndetEntropy(); // REMOVED: This was causing the crash!
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas?.getContext("2d");
  const introLayer = document.getElementById("matrix-intro");
  const bootOverlay = document.getElementById("boot-overlay");

  if (!canvas || !introLayer || !ctx) return;

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

  setTimeout(() => {
    if(bootOverlay) {
      bootOverlay.style.opacity = "0";
      setTimeout(() => { bootOverlay.style.display = "none"; }, 800);
    }
  }, 2000);

  setTimeout(() => {
    introLayer.style.opacity = "0";
    setTimeout(() => {
      introLayer.style.display = "none";
      clearInterval(interval);
    }, 1000);
  }, 7000);
}

function initFullscreenViewer() {
  const view = document.getElementById("fullscreen-view");
  const img = document.getElementById("fullscreen-img");
  if(!view || !img) return;

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spatial-img") || e.target.closest(".project-card img")) {
      const targetImg = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
      img.src = targetImg.src;
      view.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });
  view.onclick = () => { view.style.display = "none"; document.body.style.overflow = "auto"; };
}

function initAudioLog() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  const status = document.getElementById("audio-status");

  if (!playBtn || !audio) return;

  playBtn.onclick = () => {
    if (audio.paused) {
      audio.play().catch(e => console.error("Playback error:", e));
      playBtn.textContent = "[ UPLINK_ACTIVE ]";
      playBtn.classList.add("pulse-animation");
      if(status) status.textContent = "STATUS: DECRYPTING_VOICE_STREAM...";
    } else {
      audio.pause();
      playBtn.textContent = "[ ESTABLISH_UPLINK ]";
      playBtn.classList.remove("pulse-animation");
      if(status) status.textContent = "STATUS: NODE_STANDBY";
    }
  };
}

function solveMiuPuzzle() {
  const challenge = prompt("SYSTEM_CHALLENGE: Identify the primary architectural element used for passive cooling in traditional Najdi design. \n\n[HINT: Starts with 'C']");
  if (challenge && challenge.toLowerCase().includes("courtyard")) {
    alert("SUCCESS: LOGIC_VERIFIED. \n\nDECRYPTION_KEY: [ MIU_33_RIYADH_NODE ] \n\nSIGNAL: Vault access protocols initiated.");
    const vaultSection = document.getElementById("vault");
    if(vaultSection) vaultSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("ERROR: LOGIC_MISMATCH.");
  }
}

// Intersection Observer for Typewriter
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('typing-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.cmd-line').forEach(el => observer.observe(el));
