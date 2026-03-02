function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const content = document.getElementById('secretContent');
    if (key === 'archmiu2026') {
        content.style.display = 'block';
    } else {
        alert('SYSTEM_ERROR: Unauthorized Access');
    }
}

function readPhilosophy() {
    const text = "Architecting digital ecosystems with industrial precision.";
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

function togglePrivacy() {
    const main = document.querySelector('.content-wrapper');
    const btn = document.querySelector('.p-b');
    if (main.style.filter === 'blur(10px)') {
        main.style.filter = 'none';
        btn.innerText = '[CLOAK: OFF]';
    } else {
        main.style.filter = 'blur(10px)';
        btn.innerText = '[CLOAK: ON]';
    }
}
// simple section navigation (optional but handy)
document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: 'smooth'
    });
  });
});

function playAboutAudio() {
    const audio = document.getElementById("aboutAudio");
    const btn = document.querySelector('.id-audio-btn');
// cyberpunk audio logs: Encrypted Packet / Data-Stream identity
(function initAudioLogs() {
  const logs = document.querySelectorAll('.miu-audio-log');
  if (!logs.length) return;

    if (audio.paused) {
        audio.play();
        btn.innerText = '[AUDIO: PLAYING]';
    } else {
        audio.pause();
        audio.currentTime = 0;
        btn.innerText = '[ABOUT_AUDIO]';
    }
}
function playAboutAudio() {
    const btn = document.querySelector('.id-audio-btn');
  let currentMain = null;
  let currentAmbient = null;
  let currentLogEl = null;

  logs.forEach(log => {
    const mainSrc = log.dataset.audio;
    if (!mainSrc) return;

    const main = new Audio(mainSrc);
    const pre = new Audio('audio/sfx/glitch_click.mp3');
    const ambient = new Audio('audio/sfx/data_hum_loop.mp3');
    const end = new Audio('audio/sfx/packet_drop.mp3');
    ambient.loop = true;

    const text = `
    MIU Digital Architect Studio stands at the intersection of architecture and advanced digital technology.
    We design environments where physical structures and digital systems merge into a single intelligent ecosystem.
    Our work transforms static spaces into dynamic, data-driven experiences powered by holography, AI, and spatial computing.
    This is the Architecture of Possibility.
    `;
    log.addEventListener('click', () => {
      // if this one is already playing, pause it
      if (currentLogEl === log && !main.paused) {
        main.pause();
        ambient.pause();
        log.classList.remove('playing');
        currentLogEl = null;
        currentMain = null;
        currentAmbient = null;
        return;
      }

    const msg = new SpeechSynthesisUtterance(text);
      // stop any other playing log
      if (currentMain) {
        currentMain.pause();
      }
      if (currentAmbient) {
        currentAmbient.pause();
      }
      document.querySelectorAll('.miu-audio-log.playing')
        .forEach(el => el.classList.remove('playing'));

    btn.innerText = '[AUDIO: PLAYING]';
      currentLogEl = log;
      currentMain = main;
      currentAmbient = ambient;

    msg.onend = () => {
        btn.innerText = '[ABOUT_AUDIO]';
    };
      // play pre-sound, then main + ambient
      pre.currentTime = 0;
      pre.play().catch(() => {});
      setTimeout(() => {
        ambient.currentTime = 0;
        ambient.play().catch(() => {});
        main.currentTime = 0;
        main.play().catch(() => {});
        log.classList.add('playing');
      }, 120);

      main.onended = () => {
        log.classList.remove('playing');
        ambient.pause();
        end.currentTime = 0;
        end.play().catch(() => {});
        currentLogEl = null;
        currentMain = null;
        currentAmbient = null;
      };
    });
  });
})();

// VAULT unlock logic
(function initVault() {
  const keyInput = document.getElementById('vault-key');
  const unlockBtn = document.getElementById('vault-unlock');
  const statusEl = document.getElementById('vault-status');
  const contentEl = document.getElementById('vault-content');

  if (!keyInput || !unlockBtn || !statusEl || !contentEl) return;

  const CORRECT_KEY = 'MIU_33'; // change to whatever you want

  function tryUnlock() {
    const value = keyInput.value.trim();
    if (!value) return;

    if (value === CORRECT_KEY) {
      statusEl.textContent = '> STATUS: VAULT_ACCESS_GRANTED';
      contentEl.classList.remove('hidden');
    } else {
      statusEl.textContent = '> STATUS: ACCESS_DENIED';
      contentEl.classList.add('hidden');
    }
  }

    window.speechSynthesis.speak(msg);
}
  unlockBtn.addEventListener('click', tryUnlock);
  keyInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') tryUnlock();
  });
})();
