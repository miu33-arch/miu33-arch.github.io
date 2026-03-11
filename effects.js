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

function initAudioLog() {
  const playBtn = document.getElementById("play-log");
  const audio = document.getElementById("miu-audio");
  const status = document.getElementById("audio-status");

  // Check if elements exist before adding click event
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

// VERY IMPORTANT: This line makes the function run
document.addEventListener("DOMContentLoaded", initAudioLog);

// MIU_33 PUZZLE_ENGINE v2.1 (Linked to Vault)
function solveMiuPuzzle() {
  const challenge = prompt("SYSTEM_CHALLENGE: Identify the primary architectural element used for passive cooling in traditional Najdi design. \n\n[HINT: Starts with 'C']");

  if (challenge && challenge.toLowerCase().includes("courtyard")) {
    alert("SUCCESS: LOGIC_VERIFIED. \n\nDECRYPTION_KEY: [ MIU_33_RIYADH_NODE ] \n\nSIGNAL: Vault access protocols initiated. Navigate to the System Vault below.");
    
    // This part makes the site feel "Alive"
    const vaultSection = document.getElementById("vault");
    if(vaultSection) {
      vaultSection.scrollIntoView({ behavior: 'smooth' });
      console.log("miu_Node: Redirecting user to Secure Vault.");
    }
  } else {
    alert("ERROR: LOGIC_MISMATCH. \n\nHint: Think of 'Inward-facing voids'. Try again.");
  }
}
function unlockVault() {
  const keyInput = document.getElementById("accessKey");
  const vaultShell = document.getElementById("v-0");
  const secret = document.getElementById("secretContent");

  // Check for your signature Gold HEX
  if (keyInput.value.toUpperCase() === "#C9A46A" || keyInput.value.toUpperCase() === "C9A46A") {
    
    // Change the terminal text to show success
    vaultShell.innerHTML = "<p class='text-glow' style='color: #C9A46A'>> ACCESS_GRANTED. DECRYPTING_INTERNAL_DATA...</p>";
    
    // Reveal the hidden secret content
    setTimeout(() => {
      secret.style.display = "block";
      secret.innerHTML = `
        <div class="decrypted-node" style="border: 1px solid #C9A46A; padding: 15px; background: rgba(201,164,106,0.1);">
          <p>> [PROMPT_LEAK]: "Hyper-realistic Riyadh courtyard, Najdi geometry, cinematic golden hour, 8k resolution --ar 16:9"</p>
          <p style="font-size: 0.7rem; color: #888;">*Use this code to see the core of the Digital Architect studio.*</p>
        </div>
      `;
    }, 1000);
  } else {
    // Error Feedback
    keyInput.style.borderColor = "red";
    keyInput.placeholder = "INVALID_KEY_TRY_AGAIN";
    keyInput.value = "";
  }
}

