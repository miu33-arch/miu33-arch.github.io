// BOOT SEQUENCE (2.5 Second Timer)
window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// VAULT DECRYPTION & PREMIUM EASTER EGG
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const secretContent = document.getElementById('secretContent');
    const target = document.getElementById('dossier-text');

    if (key.toLowerCase() === 'unlocked premium') {
        // TRIGGER PURPLE MODE
        document.body.style.textShadow = "0 0 15px #BC13FE";
        document.documentElement.style.setProperty('--terminal', '#BC13FE');
        secretContent.style.display = 'block';
        target.innerHTML = `<img src="images/premium-badge.jpg" style="width:150px; border:1px solid #BC13FE; margin-bottom:15px;"><br>`;
        startDossierTyping(`[PROTOCOL]: PREMIUM_ASSET_LICENSE_v1.0\nRECIPIENT: VERIFIED_HOLDER\nGRANT: Commercial license for AI Architecture assets.\nSTATUS: ACCESS_GRANTED`);
    } 
    else if (key === 'archmiu2026' || key === 'MIU_33') {
        secretContent.style.display = 'block';
        startDossierTyping(`IDENTITY_DOSSIER: ANAMY PADILLA\nEDUCATION: BSBA FINANCE | BS NURSING\nSTATUS: FOUNDER @ MIU_DIGITAL ARCHITECT STUDIO`);
    } else {
        alert("ACCESS_DENIED: Invalid Credentials.");
    }
}

function startDossierTyping(content) {
    const target = document.getElementById('dossier-text');
    target.innerHTML = "";
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
