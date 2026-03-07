// 1. BOOT SEQUENCE & INITIALIZATION
window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// 2. AUDIO LOG CONTROLS
const audio = document.getElementById('miu-audio');
const playBtn = document.getElementById('play-log');
if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (audio.paused) { 
            audio.play(); 
            playBtn.innerText = "PAUSE_LOG"; 
        } else { 
            audio.pause(); 
            playBtn.innerText = "PLAY_LOG_01"; 
        }
    });
}
function toggleTranscript() {
    const t = document.getElementById('audio-transcript');
    t.style.display = (t.style.display === 'none') ? 'block' : 'none';
}

// 3. ENCRYPTED VAULT LOGIC
function unlockVault() {
    const key = document.getElementById('accessKey').value.trim().toLowerCase();
    const secretContent = document.getElementById('secretContent');
    const target = document.getElementById('dossier-text');

    if (key === 'unlocked premium') {
        // Switch to Premium Purple Theme
        document.body.style.textShadow = "0 0 15px #BC13FE";
        document.documentElement.style.setProperty('--terminal', '#BC13FE');
        secretContent.style.display = 'block';
        // Path fixed to root for premium-badge.jpg
        target.innerHTML = `<img src="premium-badge.jpg" style="width:220px; border:2px solid #BC13FE; margin-bottom:15px; box-shadow: 0 0 20px #BC13FE;"><br>`;
        startDossierTyping(`[PROTOCOL]: PREMIUM_MEMBER_ACTIVATED\nSTATUS: ACCESS_GRANTED\nWELCOME, MIÙ LIÁN RUÌ.`);
    } 
    else if (key === 'archmiu2026' || key === 'miu_33') {
        secretContent.style.display = 'block';
        target.innerHTML = '';
        startDossierTyping(`IDENTITY: ANAMY PADILLA\nROLE: DIGITAL ARCHITECT\nLOCATION: RIYADH, KSA\nSTATUS: VERIFIED_CORE_NODE`);
    }
}

// 4. TYPING ENGINE
function startDossierTyping(content) {
    const target = document.getElementById('dossier-text');
    let i = 0;
    function type() {
        if (i < content.length) {
            target.innerHTML += content.charAt(i) === '\n' ? '<br>' : content.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}
