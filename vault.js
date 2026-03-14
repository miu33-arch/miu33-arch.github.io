document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("boot-overlay"),t=document.getElementById("boot-text"),n=["> LOADING_MIU_33...","> IDENTITY_CONFIRMED: 缪联睿","> WELCOME, ARCHITECT."];function o(e,n,o=30){return new Promise(r=>{let i=0;n.textContent="";const a=setInterval(()=>{n.textContent+=e.charAt(i),i++,i>=e.length&&(clearInterval(a),r())},o)})}async function r(){await new Promise(e=>setTimeout(e,1200));for(let e of n)await o(e,t,30),await new Promise(e=>setTimeout(e,400));await new Promise(e=>setTimeout(e,600)),e.style.opacity="0",setTimeout(()=>{e.style.display="none"},800)}r()});const validKeys=["vault-pass","Vault-Pass","VAULT-PASS","#C9A46A","C9A46A"];function checkVault(){const e=document.getElementById("vault-pass").value.trim(),t=document.getElementById("dossier-text"),n=document.getElementById("secret-content"),o=document.getElementById("vault-results");if(!validKeys.includes(e))return t.textContent="> ACCESS_DENIED / INVALID_KEY",void(t.style.color="#ff3c3c");t.textContent="> ACCESS_GRANTED / DECRYPTING...",t.style.color="#3cff9b",n.style.display="block",o.innerHTML="",revealCV()}function typeBlock(e,t,n=20){return new Promise(o=>{let r=0;t.innerHTML="";const i=setInterval(()=>{t.innerHTML+=e.charAt(r),r++,r>=e.length&&(clearInterval(i),o())},n)})}const cvSections=[{title:"> NODE_01: CONTACT_INFORMATION",body:`Email: anamy@miu33.studio
Location: Riyadh, Saudi Arabia
Website: miu33-arch.github.io`},{title:"> NODE_02: SKILLS_MATRIX",body:`• AI Spatial Design
• Architectural Visualization
• Prompt Engineering
• Minimalist Architecture
• Digital Concept Development`},{title:"> NODE_03: CERTIFICATIONS",body:`• Autodesk Certified Professional
• Adobe Creative Suite Expert
• AI Spatial Design Specialist`},{title:"> NODE_04: EDUCATION",body:`• Bachelor of Architecture — 2019
• Advanced Spatial Computing — 2024`},{title:"> NODE_05: EXPERIENCE",body:`• MIU_33 — Founder & Digital Architect
• AI Spatial Consultant — Independent
• Architectural Designer — Studio Projects`},{title:"> NODE_06: PROJECTS",body:`• Riyadh Prompt Pack
• Courtyard Residence Study
• Volume Light Experiments
• AI Spatial Feed Series`}];async function revealCV(){const e=document.getElementById("vault-results");e.innerHTML="";for(let t of cvSections){const n=document.createElement("pre");n.style.color="#3cff9b",n.style.marginBottom="20px",n.style.whiteSpace="pre-wrap",e.appendChild(n),await typeBlock(t.title+"\n"+t.body,n,20),await new Promise(e=>setTimeout(e,500))}}
