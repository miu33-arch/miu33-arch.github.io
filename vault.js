document.addEventListener("DOMContentLoaded", () => {
    // Note: Boot sequence is triggered by effects.js after Matrix finishes
    startRiyadhClock(); 
});

const validKeys = ["vault-pass", "Vault-Pass", "VAULT-PASS", "#C9A46A", "C9A46A"];

function checkVault() {
    const pass = document.getElementById("vault-pass").value.trim();
    if (validKeys.includes(pass)) {
        document.getElementById("secret-content").style.display = "block";
        revealCV();
    } else { alert("ACCESS_DENIED"); }
}

const cvSections = [
    { 
        title: "> NODE_00: MISSION_STATEMENT", 
        body: "Bridging clinical precision with financial logic to architect the digital future. MIU_33 (Est. 2026) merges human-centric biological precision with structural and economic groundedness." 
    },
    { 
        title: "> NODE_01: STUDIO_CORE_FOCUS", 
        body: "• SPATIAL_ZEN: Minimalist architectures for the digital age.\n• COMPUTATIONAL_LOGIC: AI-optimized thermal/environmental solutions.\n• CROSS_CULTURAL: Bridging KSA and China design dialogues." 
    },
    { 
        title: "> NODE_02: IDENTITY_LOG", 
        body: "Architect: Anamy Padilla (缪联睿)\nStudio: MIU_33 Digital Architect\nLocation: Riyadh Node, KSA\nEmail: miu.digital.studio@proton.me" 
    },
    { 
        title: "> NODE_03: TECHNICAL_FOUNDATION", 
        body: "• Registered Nursing (Clinical Protocol)\n• BSBA Finance (Economic Structure)\n• AI Spatial Research (Computational Output)" 
    }
];

async function revealCV() {
    const res = document.getElementById("vault-results");
    
    // Keeps your photo at the top
    res.innerHTML = `<img src="images/avatar-vault.jpg" style="width:150px; border:1px solid #3cff9b; margin-bottom:20px; filter: grayscale(100%);">`;

    for (let s of cvSections) {
        const pre = document.createElement("pre");
        pre.style.color = "#3cff9b"; 
        pre.style.whiteSpace = "pre-wrap";
        pre.style.fontFamily = "'Courier New', 'Microsoft YaHei', monospace";
        pre.style.fontSize = "11px";
        pre.style.marginBottom = "15px";
        res.appendChild(pre);
        
        let content = s.title + "\n" + s.body + "\n\n";
        for (let i = 0; i < content.length; i++) {
            pre.innerHTML += content[i];
            await new Promise(r => setTimeout(r, 10));
        }
        await new Promise(r => setTimeout(r, 300));
    }
}

async function runBootSequence() {
    const textEl = document.getElementById("boot-text");
    const logs = ["> LOADING_CORE...", "> IDENTITY_VERIFIED: 缪联睿", "> STATUS: RIYADH_NODE_ACTIVE_2026"];
    for (let log of logs) {
        textEl.textContent = "";
        for (let i = 0; i < log.length; i++) {
            textEl.textContent += log[i];
            await new Promise(r => setTimeout(r, 30));
        }
        await new Promise(r => setTimeout(r, 500));
    }
    document.getElementById("boot-overlay").style.opacity = "0";
    setTimeout(() => document.getElementById("boot-overlay").style.display = "none", 800);
}

function startRiyadhClock() {
    setInterval(() => {
        const now = new Date();
        const riyadhTime = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Riyadh',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(now);
       
        const clockEl = document.getElementById('riyadh-clock');
        if (clockEl) clockEl.textContent = riyadhTime;
    }, 1000);
}
