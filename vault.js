// MIU_33 VAULT LOGIC v2.1 - REINFORCED FOR ANAMY PADILLA
function checkVault() {
    const keyInput = document.getElementById("vault-pass");
    const secretContent = document.getElementById("secret-content");
    const dossierHint = document.getElementById("dossier-text");
    const vaultResults = document.getElementById("vault-results");

    if (!keyInput || !secretContent) return;
    const pass = keyInput.value.trim().toUpperCase();

    if (pass === "#C9A46A" || pass === "C9A46A") {
        dossierHint.textContent = "> ACCESS_GRANTED. DECRYPTING_INTERNAL_FILES...";
        dossierHint.style.color = "#C9A46A";
        keyInput.disabled = true;

        setTimeout(() => {
            secretContent.style.display = "block";
            vaultResults.innerHTML = `
                <div style="display: flex; gap: 20px; border-left: 2px solid #C9A46A; padding-left: 20px; margin-bottom: 30px;">
                    <img src="images/avatar-vault.jpg" style="width: 100px; height: 125px; border: 1px solid #C9A46A; object-fit: cover;">
                    <div>
                        <p class="cmd-line" style="color:#C9A46A;">&gt; INTERNAL_DOSSIER: CV_MIU_33_VERIFIED</p>
                        <strong>缪联睿 (Anamy Padilla)</strong><br>
                        Digital Architect & Founder of MIU_33<br>
                        Riyadh / KSA<br><br>
                        <strong>[ PROFESSIONAL_SUMMARY ]</strong><br>
                        Transitioning from clinical precision to computational thinking. My work explores calm minimal environments and narrative-driven design logic.
                    </div>
                </div>
                <div id="cinematic-dossier" style="white-space: pre-wrap; color: #3cff9b; font-size: 0.85rem;"></div>
            `;
            secretContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            startCinematicDossier(document.getElementById("cinematic-dossier"));
        }, 1200);
    } else {
        dossierHint.textContent = "> ERROR: INVALID_ACCESS_KEY. RETRY.";
        dossierHint.style.color = "#ff4d4d";
        keyInput.value = "";
        keyInput.style.borderColor = "#ff4d4d";
        setTimeout(() => { keyInput.style.borderColor = "#333"; }, 500);
    }
}

function startCinematicDossier(target) {
    const lines = [
        "> MIU_33_INTERNAL_PROTOCOL / LEVEL_01",
        "> CLASSIFICATION: STUDIO_CORE_LOGIC",
        "",
        "> NODE_00: ORIGIN",
        " - Operating between physical architecture and AI spatial design.",
        "",
        "> NODE_01: METHOD",
        " - Each project is treated as a system, not a single image.",
        " - AI tools used as collaborators for design thinking.",
        "",
        "> NODE_02: ETHICS",
        " - Human experience remains primary in all environments.",
        "",
        "> NODE_03: WORKFLOW",
        " - INPUT: Prompts, sketches, spatial narratives.",
        " - PROCESS: Iteration across PromeAI, Runway, and Veo.",
        "",
        "> END_OF_DOSSIER / MIU_33_INTERNAL"
    ];
    const fullText = lines.join("\n");
    let index = 0;
    target.textContent = "";
    function typeChar() {
        if (index < fullText.length) {
            target.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeChar, 20);
        }
    }
    typeChar();
}
