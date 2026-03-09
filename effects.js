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

// VAULT UI ENHANCEMENTS
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

window.vaultAccessGranted = vaultAccessGranted;
window.vaultAccessDenied = vaultAccessDenied;

// SIMPLE AUTO-SCROLL FOR AI SPATIAL (fallback)
const feed = document.querySelector(".spatial-feed");

if (feed) {
  setInterval(() => {
    feed.scrollLeft += 2;
    if (feed.scrollLeft >= feed.scrollWidth - feed.clientWidth) {
      feed.scrollLeft = 0;
    }
  }, 20);
}
