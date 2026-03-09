// VAULT LOGIC: CV + CINEMATIC DOSSIER

function unlockVault() {
  const keyInput = document.getElementById("accessKey");
  const shell = document.getElementById("v-0");
  const secretContent = document.getElementById("secretContent");
  const legalBox = document.getElementById("legal-dossier");
  const legalText = document.getElementById("legal-text");

  if (!keyInput || !shell || !secretContent || !legalBox || !legalText) return;

  const pass = keyInput.value.trim();

  // Simple passkey check (you can change this string if you want)
  if (pass === "") {
    document.getElementById("dossier-text").textContent =
      "> ERROR: PASSKEY_REQUIRED";
    return;
  }

  // Unlock
  shell.style.display = "none";
  secretContent.style.display = "block";

  // Inject CV content
  secretContent.innerHTML = `
&gt; INTERNAL_DOSSIER: CV_MIU_33
<br><br>
<strong>缪联睿 (Anamy Padilla)</strong><br>
MIU_33 — Digital Architect Studio<br>
Riyadh / KSA<br><br>

<strong>PROFESSIONAL_SUMMARY</strong><br>
A digital architect in early formation, transitioning from a clinical background into spatial design,
computational thinking, and AI‑assisted worldbuilding. My work focuses on calm minimal environments,
atmospheric studies, and system‑based design logic. Through MIU_33, I explore the intersection of
architecture, computation, and emerging digital tools, building a foundation for future architectural practice.
<br><br>

<strong>CORE_SKILLS</strong><br>
- Architectural concept development<br>
- AI spatial design & atmospheric studies<br>
- Minimalist spatial composition<br>
- Narrative-driven design logic<br>
- Computational reasoning (in progress)<br>
- Research & documentation<br>
- Human-centered design (from RN background)<br><br>

<strong>TOOLS_AND_SOFTWARE / CURRENTLY_USING</strong><br>
- Photoshop<br>
- Illustrator<br>
- Figma<br>
- Stable Diffusion<br>
- PromeAI<br>
- Runway<br>
- Veo<br>
- Notion (documentation + system design)<br><br>

<strong>TOOLS_AND_SOFTWARE / EXPLORING_LEARNING</strong><br>
- Blender<br>
- Rhino<br>
- Unreal Engine<br>
- Midjourney<br><br>

<strong>EXPERIENCE</strong><br>
MIU_33 — Digital Architect Studio / Founder, Digital Architect (Early Career)<br>
2026 — Present<br>
- Developing architectural concepts, AI spatial studies, and digital assets.<br>
- Building a hybrid workflow combining architectural logic with computational tools.<br>
- Producing atmospheric visualizations and narrative-driven spatial explorations.<br><br>

Registered Nurse (RN) / Clinical Practice<br>
2019 — 2024<br>
- Delivered patient-centered care in high-pressure environments.<br>
- Developed strong analytical, observational, and problem-solving skills.<br>
- Experience in documentation, precision, and human-focused decision-making.<br><br>

<strong>EDUCATION</strong><br>
University of Michigan — Coursera / Computer Science (Ongoing)<br>
2026 — Present<br>
- Coursework in programming, computational thinking, and digital systems.<br><br>

Nursing Degree (Private Institution) / Completed — Details withheld for privacy<br>
- Clinical training and foundational medical education.<br>
- Background supporting human-centered design and analytical thinking.<br><br>

<strong>CONTACT</strong><br>
Riyadh, Saudi Arabia<br>
Email: miu.digital.studio@proton.me<br>
Alt Email: anamy5334@gmail.com<br>
Studio: MIU_33<br>
`;

  // Show legal box and start cinematic dossier after short delay (Option B)
  setTimeout(() => {
    legalBox.style.display = "block";
    startCinematicDossier(legalText);
  }, 1500);
}

function startCinematicDossier(target) {
  const lines = [
    "> MIU_33_INTERNAL_PROTOCOL / LEVEL_01",
    "> CLASSIFICATION: STUDIO_CORE_LOGIC / NON_PUBLIC",
    "",
    "> NODE_00: ORIGIN",
    " - MIU_33 is a digital architect studio operating between physical architecture, AI spatial design,",
    " and narrative-driven worldbuilding.",
    "",
    "> NODE_01: METHOD",
    " - Each project is treated as a system, not a single image.",
    " - Calm, minimal environments are constructed through proportion, light, and controlled complexity.",
    " - AI tools are used as collaborators, not replacements for design thinking.",
    "",
    "> NODE_02: ETHICS",
    " - Respect for human experience remains primary, even in synthetic environments.",
    " - Data, images, and references are handled with care and attribution where applicable.",
    " - No glorification of harm, exploitation, or dehumanization is tolerated within MIU_33 outputs.",
    "",
    "> NODE_03: WORKFLOW",
    " - INPUT: prompts, sketches, references, spatial narratives.",
    " - PROCESS: iteration cycles across AI tools, compositional refinement, and architectural logic checks.",
    " - OUTPUT: spatial studies, visual dossiers, and digital assets for future built or virtual work.",
    "",
    "> NODE_04: FUTURE",
    " - MIU_33 is an evolving system.",
    " - Architecture, computation, and cinematic storytelling will continue to merge.",
    " - New tools (Runway, Veo, PromeAI, and others) are integrated as extensions of design intent.",
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
      setTimeout(typeChar, 18);
    }
  }

  typeChar();
}
