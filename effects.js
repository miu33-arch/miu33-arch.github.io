// MIU_33 EFFECTS ENGINE v2.1 - OPTIMIZED FOR RIYADH_NODE
document.addEventListener("DOMContentLoaded", () => {
  initMatrixIntro();
  initFullscreenViewer();
  initAudioLog();
  initTypewriter(); // Added for extra immersion
});

function initMatrixIntro() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas?.getContext("2d");
  const introLayer = document.getElementById("matrix-intro");
  const bootOverlay = document.getElementById("boot-overlay");

  if (!canvas || !introLayer || !ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01MIU33_ARCH_缪联睿"; // Added your Chinese name to the rain
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

  // Smooth Boot Sequence
  setTimeout(() => { 
    if(bootOverlay) { 
      bootOverlay.style.opacity = "0"; 
      setTimeout(() => { bootOverlay.style.display = "none"; }, 800); 
    } 
  }, 3000); // 3 seconds of boot text

  setTimeout(() => { 
    introLayer.style.opacity = "0"; 
    setTimeout(() => { 
      introLayer.style.display = "none"; 
      clearInterval(interval); 
    }, 1000); 
  }, 6000); // 6 seconds total intro
}

function solveMiuPuzzle() {
  const challenge = prompt("Identify the primary architectural element used for passive cooling in traditional Najdi design. [HINT: C...]");
  if (challenge?.toLowerCase().includes("courtyard")) {
    alert("LOGIC_VERIFIED. ACCESSING_VAULT...");
    // Scrolls to vault and highlights the input
    const vaultSection = document.getElementById("vault");
    vaultSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        document.getElementById("vault-pass").focus();
    }, 1000);
  } else {
    alert("ACCESS_DENIED: Critical knowledge missing.");
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

