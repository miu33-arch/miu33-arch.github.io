// 1. BOOT SEQUENCE (KEEP THIS AT THE TOP)
window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// 2. AUDIO LOG LOGIC
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

// 3. PASTE THE VAULT CODE HERE (The Badge Fix)
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const secretContent = document.getElementById('secretContent');
    const target = document.getElementById('dossier-text');

    if (key.toLowerCase() === 'unlocked premium') {
        // Trigger Purple Theme Shift
        document.body.style.textShadow = "0 0 15px #BC13FE";
        document.documentElement.style.setProperty('--terminal', '#BC13FE');
        
        secretContent.style.display = 'block';
        
        // Path fixed to look in ROOT for premium-badge.jpg
        target.innerHTML = `<img src="premium-badge.jpg" style="width:200px; border:1px solid #BC13FE; margin-bottom:15px; box-shadow: 0 0 20px #BC13FE;"><br>`;
        
        startDossierTyping(`[PROTOCOL]: PREMIUM_MEMBER_ACTIVATED\nSTATUS: ACCESS_GRANTED\nLOCATION: RIYADH_NODE_LIVE`);
    } 
    else if (key === 'archmiu2026' || key === 'MIU_33') {
        secretContent.style.display = 'block';
        startDossierTyping(`IDENTITY: ANAMY PADILLA\nROLE: DIGITAL ARCHITECT\nNODE: RIYADH_STUDIO`);
    }
}

// 4. TYPING ENGINE (KEEP THIS AT THE VERY BOTTOM)
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
