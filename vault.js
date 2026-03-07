// 1. BOOT SEQUENCE (Original Logic Restored)
window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// 2. AUDIO LOG CONTROLS (Original Logic Restored)
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

// 3. TRANSCRIPT TOGGLE
function toggleTranscript() {
    const t = document.getElementById('audio-transcript');
    t.style.display = (t.style.display === 'none') ? 'block' : 'none';
}

// 4. VAULT DECRYPTION & PREMIUM BADGE REWARD
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const secretContent = document.getElementById('secretContent');
    const target = document.getElementById('dossier-text');

    // Check for Premium Easter Egg
    if (key.toLowerCase() === 'unlocked premium') {
        // Trigger Purple Theme Shift
        document.body.style.textShadow = "0 0 15px #BC13FE";
        document.documentElement.style.setProperty('--terminal', '#BC13FE');
        
        secretContent.style.display = 'block';
        
        // INJECT THE BADGE (Ensure filename is premium-badge.jpg)
        target.innerHTML = `<img src="images/premium-badge.jpg" style="width:200px; border:1px solid #BC13FE; margin-bottom:15px; box-shadow: 0 0 20px #BC13FE;"><br>`;
        
        startDossierTyping(`[PROTOCOL]: PREMIUM_ASSET_LICENSE_v1.0\nRECIPIENT: VERIFIED_MEMBER\nGRANT: Commercial license for AI Architecture assets.\nSTATUS: ACCESS_GRANTED`);
    } 
    // Standard Access Keys
    else if (key === 'archmiu2026' || key === 'MIU_33') {
        secretContent.style.display = 'block';
        startDossierTyping(`IDENTITY_DOSSIER: ANAMY PADILLA\nEDUCATION: BSBA FINANCE | BS NURSING\nSTATUS: FOUNDER @ MIU_DIGITAL ARCHITECT STUDIO`);
    } else {
        alert("ACCESS_DENIED: Invalid Credentials.");
    }
}

// 5. TYPING ANIMATION ENGINE
function startDossierTyping(content) {
    const target = document.getElementById('dossier-text');
    // If the badge is present, we append text after it
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
