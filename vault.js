// VAULT LOGIC: CV + CINEMATIC DOSSIER (MIU_33 v2.0)

function unlockVault() {
  const keyInput = document.getElementById("accessKey");
  const shell = document.getElementById("v-0");
  const secretContent = document.getElementById("secretContent");
  const legalBox = document.getElementById("legal-dossier");
  const legalText = document.getElementById("legal-text");
  const dossierHint = document.getElementById("dossier-text");

  if (!keyInput || !shell || !secretContent || !legalBox || !legalText) return;

  const pass = keyInput.value.trim();

  // 1. Passkey Check
  if (pass === "") {
    dossierHint.textContent = "> ERROR: PASSKEY_REQUIRED";
    dossierHint.style.color = "#ff4d4d"; // Temporary red for error
    return;
  }

  // 2. Decryption Sequence (Visual Only)
  dossierHint.textContent = "> DECRYPTING_DOSSIER_NODES...";
  dossierHint.style.color = "#3cff9b";

  setTimeout(() => {
    // Hide input shell
    shell.style.display = "none";
    
    // 3. Inject CV content (Kept your exact concept/text)
    secretContent.innerHTML = `
      <p class="cmd-line" style="color:#ffd700;">&gt; INTERNAL_DOSSIER: CV_MIU_33_VERIFIED</p>
      <br>
      <strong>缪联睿 (Anamy Padilla)</strong><br>
      MIU_33 — Digital Architect Studio<br>
      Riyadh / KSA<br><br>

      <strong>PROFESSIONAL_SUMMARY</strong><br>
      A digital architect in early formation, transitioning from a clinical background into spatial design,
      computational thinking, and AI‑assisted worldbuilding. My work focuses on calm minimal environments,
      atmospheric studies, and system‑based design logic.
      <br><br>

      <strong>CORE_SKILLS</strong><br>
      - Architectural concept development<br>
      - AI spatial design & atmospheric studies<br>
      - Minimalist spatial composition<br>
      - Narrative-driven design logic<br>
      - Computational reasoning (in progress)<br><br>

      <strong>TOOLS_AND_SOFTWARE</strong><br>
      - Photoshop | Illustrator | Figma<br>
      - Stable Diffusion | PromeAI | Runway | Veo<br>
      - Notion (System Design)<br><br>

      <strong>EXPERIENCE</strong><br>
      MIU_33 — Digital Architect Studio / Founder<br>
      2026 — Present<br>
      - Developing architectural concepts and digital assets.<br><br>

      Registered Nurse (RN) / Clinical Practice<br>
      2019 — 2024<br>
      - High-pressure problem solving and human-centered design logic.<br><br>

      <strong>EDUCATION</strong><br>
      University of Michigan — Coursera / CS (Ongoing)<br>
      Nursing Degree / Completed (KSA Licensed)<br><br>

      <strong>CONTACT</strong><br>
      Riyadh, Saudi Arabia<br>
      Email: miu.digital.studio@proton.me<br>
    `;
    
    secretContent.style.display = "block";
    
    // Auto-scroll to CV for better UX
    secretContent.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 4. Show legal box and start typing effect
    setTimeout(() => {
      legalBox.style.display = "block";
      startCinematicDossier(legalText);
    }, 1000);

  }, 800); // 800ms "fake" decryption delay for vibe
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
    "> NODE_04: FUTURE",
    " - Architecture and computation continue to merge.",
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
      // Typing speed (18ms) - keeps the "Cinematic" feel
      setTimeout(typeChar, 18);
    }
  }
  typeChar();
}

