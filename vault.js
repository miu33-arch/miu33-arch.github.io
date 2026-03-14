document.addEventListener("DOMContentLoaded", () => {
    // Note: Boot sequence is triggered by effects.js after Matrix finishes
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
    { title: "> NODE_01: CONTACT", body: "Email: miu.digital.studio@proton.me\nAlt: anamy5334@gmail.com" },
    { title: "> NODE_02: EDUCATION", body: "• BSBA Finance (2019)\n• Registered Nursing (Clinical)\n• AI Spatial Design (ACTIVE 2026)" },
    { title: "> NODE_03: EXPERIENCE", body: "• MIU_33 Studio Founder (Jan 2026)\n• Operations Director (Franchise)\n• Registered Nurse (Healthcare)" }
];

async function revealCV() {
    const res = document.getElementById("vault-results");
    res.innerHTML = `<img src="images/avatar-vault.jpg" style="width:150px; border:1px solid #3cff9b; margin-bottom:20px; filter: grayscale(100%);">`;
    for (let s of cvSections) {
        const pre = document.createElement("pre");
        pre.style.color = "#3cff9b"; pre.style.whiteSpace = "pre-wrap";
        pre.style.fontFamily = "'Courier New', 'Microsoft YaHei', monospace";
        res.appendChild(pre);
        let content = s.title + "\n" + s.body;
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
startRiyadhClock(); // This starts the timer immediately

