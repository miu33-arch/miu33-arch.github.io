// MIU_33 EFFECTS ENGINE v2.0 - 5_SECOND_MATRIX_SEQUENCE

document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioConsole();
  initUndetEntropy(); 
});

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

  // --- THE CINEMATIC TIMING ---

  // STEP 1: Fade the Boot Text after 2 seconds
  setTimeout(() => {
    if(bootOverlay) {
      bootOverlay.style.opacity = "0";
      setTimeout(() => { bootOverlay.style.display = "none"; }, 800);
    }
    console.log("miu_Node: Boot sequence complete. Starting Matrix stream...");
  }, 2000);

  // STEP 2: Let the Matrix rain for 5 more seconds (Total 7 seconds from start)
  setTimeout(() => {
    introLayer.style.opacity = "0"; // Fade out the Matrix
    
    setTimeout(() => {
      introLayer.style.display = "none";
      clearInterval(interval); // Stop the animation to save CPU
      console.log("miu_Node: System Decrypted. Welcome, Architect.");
    }, 1000); // 1s fade-out duration
  }, 7000); 
}

// FULLSCREEN + AUDIO + SEO (Keep these the same)
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
  view.onclick = () => { view.style.display = "none"; document.body.style.overflow = "auto"; };
}

function initAudioConsole() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  if (!playBtn || !audio) return;
  playBtn.onclick = () => {
    if (audio.paused) { audio.play(); playBtn.textContent = "PAUSE_LOG_01"; }
    else { audio.pause(); playBtn.textContent = "PLAY_LOG_01"; }
  };
}

function initUndetEntropy() {
  window.miu_signature = { origin: "Riyadh_Node", auth: "Anamy_Padilla" };
  setTimeout(() => { 
    document.documentElement.setAttribute('data-human-verified', 'true');
  }, Math.random() * 800 + 200);
}
// MIU_33 PUZZLE_ENGINE
function solveMiuPuzzle() {
  const answer = prompt("SYSTEM_CHALLENGE: What is the primary architectural element used for passive cooling in traditional Najdi design? (Hint: Starts with 'C')");

  if (answer && answer.toLowerCase().includes("courtyard")) {
    alert("ACCESS_GRANTED. \n\nDECRYPTION_KEY: [ MIU_33_RIYADH_NODE ] \n\nUse this key in the System Vault to access the prompt archives.");
  } else {
    alert("ACCESS_DENIED. Invalid logic parameters. Hint: Think of 'Inward-facing voids'.");
  }
}
