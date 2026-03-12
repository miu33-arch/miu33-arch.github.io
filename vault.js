// MIU_33 VAULT SYSTEM v2.5
function checkVault() {
    const keyInput = document.getElementById("vault-pass");
    const secretContent = document.getElementById("secretContent");
    const dossierHint = document.getElementById("dossier-text");
    const legalBox = document.getElementById("legal-dossier");
    const legalText = document.getElementById("legal-text");

    if (!keyInput || !secretContent) return;

    const pass = keyInput.value.trim().toUpperCase();

    if (pass === "#C9A46A" || pass === "C9A46A") {
        dossierHint.textContent = "> ACCESS_GRANTED. DECRYPTING...";
        dossierHint.style.color = "#3cff9b";

        setTimeout(() => {
            // Inject CV Content
            secretContent.style.display = "block";
            secretContent.innerHTML = `
                <div style="border: 1px solid #3cff9b; padding: 20px; background: rgba(0,20,0,0.9);">
                    <p class="cmd-line" style="color:#ffd700;">&gt; INTERNAL_DOSSIER: CV_VERIFIED</p>
                    <br>
                    <strong>缪联睿 (Anamy Padilla)</strong><br>
                    Digital Architect Studio | Riyadh<br><br>
                    <strong>SUMMARY:</strong> Transitioning from Clinical practice (RN) to AI-assisted spatial design and computational worldbuilding.<br><br>
                    <strong>EXPERIENCE:</strong> Founder of MIU_33 (2026-Present) | Registered Nurse (2019-2024).<br><br>
                    <strong>TOOLS:</strong> Photoshop, Midjourney, PromeAI, Runway, Veo, Figma.
                </div>
            `;

            // Start the Cinematic Typing effect below the CV
            if (legalBox && legalText) {
                legalBox.style.display = "block";
                startCinematicDossier(legalText);
            }

            secretContent.scrollIntoView({ behavior: "smooth" });
        }, 1000);
    } else {
        dossierHint.textContent = "> ERROR: INVALID_ACCESS_KEY";
        dossierHint.style.color = "#ff4d4d";
        keyInput.value = "";
    }
}

function startCinematicDossier(target) {
    const lines = [
        "> MIU_33_INTERNAL_PROTOCOL / LEVEL_01",
        "> CLASSIFICATION: STUDIO_CORE_LOGIC",
        "",
        "> NODE_00: ORIGIN - AI x Architecture merge.",
        "> NODE_01: METHOD - System-based design logic.",
        "> NODE_02: ETHICS - Human experience primary.",
        "",
        "> END_OF_DOSSIER / MIU_33"
    ];
    const fullText = lines.join("\n");
    let index = 0;
    target.textContent = "";
    function typeChar() {
        if (index < fullText.length) {
            target.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeChar, 25);
        }
    }
    typeChar();
}

