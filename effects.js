// BOOT OVERLAY AUTO-HIDE + TYPING EFFECT
window.addEventListener('load', () => {
  const boot = document.getElementById('boot-overlay');
  const bootText = document.getElementById('boot-text');
  const msg = '> LOADING_RIYADH_NODE...';
  let i = 0;

  const typer = setInterval(() => {
    if (!bootText) return;
    bootText.textContent = msg.slice(0, i) + (i % 2 === 0 ? '▌' : '');
    i++;
    if (i > msg.length) {
      clearInterval(typer);
      bootText.textContent = msg + ' ▌';
    }
  }, 80);

  setTimeout(() => {
    if (boot) boot.style.display = 'none';
  }, 3200);
});

// AI SPATIAL FULLSCREEN VIEWER
const spatialImages = document.querySelectorAll('.spatial-img');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImg = document.getElementById('fullscreen-img');

if (spatialImages && fullscreenView && fullscreenImg) {
  spatialImages.forEach(img => {
    img.addEventListener('click', () => {
      fullscreenImg.src = img.src;
      fullscreenView.classList.add('active');
    });
  });

  fullscreenView.addEventListener('click', () => {
    fullscreenView.classList.remove('active');
  });
}

// VAULT UI ENHANCEMENTS (requires unlockVault to call these helpers)
function vaultAccessGranted() {
  const vaultSection = document.getElementById('v-0');
  if (!vaultSection) return;
  vaultSection.classList.remove('shake');
  vaultSection.style.boxShadow = '0 0 26px rgba(51,255,153,0.9)';
}

function vaultAccessDenied() {
  const vaultSection = document.getElementById('v-0');
  if (!vaultSection) return;
  vaultSection.classList.add('shake');
  setTimeout(() => vaultSection.classList.remove('shake'), 350);
}

// Expose helpers globally so vault.js can call them
window.vaultAccessGranted = vaultAccessGranted;
window.vaultAccessDenied = vaultAccessDenied;
// MATRIX FADE-OUT AFTER BOOT
setTimeout(() => {
  const matrix = document.getElementById('matrix');
  if (matrix) {
    matrix.style.opacity = '0'; // fade out
  }
}, 3000); // 3 seconds
