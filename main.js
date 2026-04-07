/* --- MIU_33 MATRIX // CORE ENGINE V2.0 // BREACH + LENIS + WEBGL + VAPI --- */

// 1. DATA CONFIGURATION (The System Genome)
const terminalLines = [
    "REJECTING NORMAL WORLD...",
    "CONFIRMING FOUNDER DEPARTURE...",
    "ACTIVATING RIYADH MANSION GENOME...",
    "SYNCING RIYADH ↔ PARIS ↔ CHINA...",
    "PURGING STANDARD ARCHITECTURE...",
    "ARMING CINEMATIC SYSTEMS...",
    "VAPI_VOICE_LINK: ESTABLISHED.",
    "WELCOME TO MIU_33."
];

// 2. THE MASTER INITIALIZER
document.addEventListener('DOMContentLoaded', () => {
    // Bot-Pass Logic (Pillar 06 UXO)
    // If Human: Start Ritual. If Crawler: Skip to Matrix.
    if (navigator.webdriver === false) {
        initializeBreach();
    } else {
        completeBreach(); 
    }
});

// 3. PILLAR 06: THE BREACH RITUAL
function initializeBreach() {
    const terminal = document.getElementById('terminal-feed');
    let lineIndex = 0;

    const interval = setInterval(() => {
        if (lineIndex < terminalLines.length) {
            const p = document.createElement('p');
            p.textContent = `> ${terminalLines[lineIndex]}`;
            p.style.margin = "5px 0";
            terminal.appendChild(p);
            lineIndex++;
        } else {
            clearInterval(interval);
            setTimeout(completeBreach, 800);
        }
    }, 450); // Clinical timing
}

// 4. SYSTEM IGNITION (What happens after the Breach)
function completeBreach() {
    const intro = document.getElementById('intro-sequence');
    const matrix = document.getElementById('main-matrix');

    if (intro) intro.style.opacity = '0';
    
    setTimeout(() => {
        if (intro) intro.style.display = 'none';
        if (matrix) matrix.style.opacity = '1';
        
        // --- START CORE ENGINES AFTER BREACH ---
        initializeLenis();
        initializeMatrixRain();
        initializeVapiHandshake();
        initializeRefractionObserver();
    }, 1000);
}

// --- ENGINE A: LENIS SMOOTH SCROLL ---
function initializeLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// --- ENGINE B: WEBGL MATRIX RAIN ---
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01MIU33架构师";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#C9A46A'; // Shifted to Riyadh Gold for brand consistency
        ctx.font = fontSize + 'px Orbitron';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);
}

// --- ENGINE C: VAPI VOICE HANDSHAKE ---
function initializeVapiHandshake() {
    const hud = document.getElementById('vapi-status');
    if (hud) hud.innerText = "VAPI_LINK: ACTIVE // SYNCING_VOICE...";
    
    const msg = new SpeechSynthesisUtterance("Welcome Architect. Miu 33 Matrix is synchronized.");
    msg.pitch = 0.7; // Lowered for Sovereign Authority
    msg.rate = 0.85;
    window.speechSynthesis.speak(msg);
    
    setTimeout(() => { if (hud) hud.innerText = "VAPI_LINK: SECURE // ENCRYPTED"; }, 3000);
}

// --- ENGINE D: REFRACTION OBSERVER (Pillar 04) ---
function initializeRefractionObserver() {
    const refractionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.clipPath = 'inset(0 0 0 0)';
                target.style.transform = 'translateY(0)';
                
                const video = target.querySelector('video');
                if (video) {
                    if (video.dataset.src) video.src = video.dataset.src;
                    video.play();
                }
                refractionObserver.unobserve(target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.dragon-scale').forEach(asset => {
        asset.style.clipPath = 'inset(100% 0 0 0)';
        asset.style.transform = 'translateY(30px)';
        refractionObserver.observe(asset);
    });
}
