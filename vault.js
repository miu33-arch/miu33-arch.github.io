window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('boot-overlay');
    if (overlay) {
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 1000);
        }, 2500);
    }

    const audio = document.getElementById('miu-audio');
    const playBtn = document.getElementById('play-log');

    if (audio && playBtn) {
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
});

function toggleTranscript() {
    const t = document.getElementById('audio-transcript');
    if (t) t.style.display = (t.style.display === 'none') ? 'block' : 'none';
}

function unlockVault() {
    const key = document.getElementById('accessKey').value.trim().toLowerCase();
    const secretContent = document.getElementById('secretContent');
    const target = document.getElementById('dossier-text');

    if (!secretContent || !target) return;

    if (key === 'unlocked premium') {
        document.body.style.textShadow = "0 0 15px #BC13FE";
        document.documentElement.style.setProperty('--terminal', '#BC13FE');
        secretContent.style.display = 'block';

        target.innerHTML = `<img src="premium-badge.jpg" style="max-width:100%; border:2px solid #BC13FE; margin-bottom:15px; box-shadow: 0 0 20px #BC13FE;"><br>`;
        startDossierTyping(`[PROTOCOL]: PREMIUM_MEMBER_ACTIVATED\nSTATUS: ACCESS_GRANTED\nWELCOME, MIÙ LIÁN RUÌ.`);
    }
    else if (key === 'archmiu2026' || key === 'miu_33') {
        secretContent.style.display = 'block';
        target.innerHTML = '';
        startDossierTyping(`IDENTITY: ANAMY PADILLA\nROLE: DIGITAL ARCHITECT\nLOCATION: RIYADH, KSA\nSTATUS: VERIFIED_CORE_NODE`);
    }
}

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
