/**
 * OWNER: MIU33_DIGITAL_ARCHITECT // CEN_YAN (岑砚)
 * SYSTEM: NEXUSCORE_v1.33 // MASTER_LOGIC_OVERRIDE
 * STATUS: SECURE // EMERALD_TEAL_SYNC
 */

// 1. GLOBAL CONTENT ARCHIVE
const studioContent = {
    en: {
        id: "CÉN_YÀN",
        status: "OPERATIONAL",
        pillars: "// THE_16_PILLARS_OF_SOVEREIGNTY //"
    },
    zh: {
        id: "缪联睿",
        status: "运行中",
        pillars: "// 主权十六支柱 //"
    }
};

// --- 0. GLOBAL SMOOTH SCROLL (LENIS) ---
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// --- 2. CORE SYSTEM INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    // Reveal main interface with 300ms delay
    setTimeout(() => {
        const ui = document.getElementById('main-interface');
        if (ui) ui.style.opacity = '1';
    }, 300);

    console.log('💚 NEXUS_CORE // SYSTEM_READY');

    // --- 1. PERFORMANCE & DEVICE CALIBRATION (PRESERVED) ---
    const isLowEnd = /Android|iPhone|iPad/i.test(navigator.userAgent);
   
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- MATRIX LOGIC (PRESERVED) ---
    const canvas = document.getElementById('matrix-canvas');
    if (canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
       
        // Mobile-optimized density (Honoring your original values)
        const cols = Math.floor(width / (isLowEnd ? 25 : 20));
        const drops = Array(cols).fill(1);
        
        // ... rest of your drawMatrix function remains exactly as is ...

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.1)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00FF85';
            ctx.font = '10px monospace';
           
            drops.forEach((y, i) => {
                const text = "MIU33_NEXUS_CORE"[Math.floor(Math.random() * 15)];
                ctx.fillText(text, i * 20, y * 20);
                if (y * 20 > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(drawMatrix, isLowEnd ? 70 : 50);
    }

    // --- SEO & SCROLL LOGIC ---
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        document.title = `MIU33 // ${scrollPercent}% DEPLOYED`;
        if (canvas) canvas.style.display = window.scrollY > 2000 ? 'none' : 'block';
    });

    // --- REVEAL OBSERVER ---
    const matrixColumns = document.querySelectorAll('.matrix-column');
    const observerOptions = { threshold: 0.2 };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    matrixColumns.forEach(col => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(30px)';
        col.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        revealObserver.observe(col);
    });
});

// 3. LANGUAGE OVERRIDE PROTOCOL (Global Scope)
function setLanguage(lang) {
    // Update Pulse Status
    const statusText = document.querySelector('.animate-pulse');
    if (statusText) statusText.textContent = studioContent[lang].status;
// --- NEW: Update System ID Identity ---
const idText = document.querySelector('.text-[7px].text-white');
if (idText) {
    idText.innerHTML = `SYSTEM_ID: ${studioContent[lang].id} // STATUS: <span class="text-emerald-neon animate-pulse">${studioContent[lang].status}</span>`;
}
// Update Pillars Heading
    const pillarHeading = document.querySelector('#pillars h2');
    if (pillarHeading) pillarHeading.textContent = studioContent[lang].pillars;

    // UI Toggle State
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');

    if (lang === 'zh') {
        zhBtn.className = 'text-emerald-neon';
        enBtn.className = 'text-white/40 hover:text-white';
    } else {
        enBtn.className = 'text-emerald-neon';
        zhBtn.className = 'text-white/40 hover:text-emerald-neon';
    }
}

// 4. VIDEO & UTILITY
document.addEventListener('click', () => {
    const heroVideo = document.querySelector('.bg-video');
    if (heroVideo) heroVideo.play();
}, { once: true });
function updateRiyadhTime() {
    const options = {
        timeZone: 'Asia/Riyadh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const timeString = formatter.format(new Date());
    
    const clockElement = document.getElementById('riyadh-clock');
    if (clockElement) clockElement.textContent = timeString;

    // --- Dynamic Atmospheric Shift ---
    // If it's late night in Riyadh (22:00 - 04:00), slow down the matrix
    const hour = parseInt(timeString.split(':')[0]);
    const isNight = hour >= 22 || hour <= 4;
    
    if (isNight) {
        document.body.style.filter = "brightness(0.8) contrast(1.1)";
    } else {
        document.body.style.filter = "none";
    }
}

// Update every second
setInterval(updateRiyadhTime, 1000);
// --- REVISED: PORTFOLIO_SCAN_PROTOCOL ---
document.querySelectorAll('#portfolio-grid a').forEach(item => {
    item.addEventListener('click', function(e) {
        const refElement = this.querySelector('div');
        const refText = refElement ? refElement.innerText : "UNKNOWN_REF";
        console.log(`INITIATING_DEEP_SCAN: ${refText}`);
        // Protocol: The anchor tag will naturally route to Pinterest
    });
});

// --- REVISED: VAULT_MERCHANT_PROTOCOL ---
document.querySelectorAll('#diagnostic-vault a').forEach(link => {
    link.addEventListener('click', function(e) {
        const originalText = this.innerText;
        this.innerText = "INITIALIZING_UPLINK...";
        this.classList.add('animate-pulse');
        this.style.pointerEvents = 'none'; // Lock during transmission
       
        setTimeout(() => {
            this.innerText = "UPLINK_SUCCESS";
            this.style.background = "#00ff85";
            this.style.color = "black";
        }, 1000);
    });
});

/* --- INITIATION_PROTOCOL_LOGIC --- */
document.querySelector('#initiation form').addEventListener('submit', function(e) {
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    // Visually lock the terminal while transmitting
    btn.disabled = true;
    btn.innerText = "PREPARING_UPLINK...";
    btn.style.opacity = "0.6";
    
    // Simulate signal handshake before Formspree takes over
    setTimeout(() => {
        btn.innerText = "TRANSMITTING_SIGNAL...";
        btn.classList.add('animate-pulse');
        
        // Formspree will handle the actual redirect after this
    }, 1000);
});
/* --- AJAX_TRANSMISSION_PROTOCOL --- */
const contactForm = document.querySelector('#initiation form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Stop the page from refreshing
        
        const btn = this.querySelector('button');
        const formData = new FormData(this);
        
        // Phase 1: Initiation
        btn.disabled = true;
        btn.innerText = "ENCRYPTING_PACKETS...";
        btn.style.opacity = "0.5";

        try {
            // Phase 2: Transmission
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Phase 3: Success
                btn.innerText = "SIGNAL_VERIFIED";
                this.reset();
                showSuccess(); // Trigger the modal you just pasted
            } else {
                throw new Error('Uplink Failed');
            }
        } catch (error) {
            // Phase 4: Error Handling
            btn.innerText = "RETRY_TRANSMISSION";
            btn.disabled = false;
            btn.style.opacity = "1";
            alert("Protocol Error: Signal lost in transit.");
        }
    });
}
/* MIU_33 // VASCULAR MAPPING LOGIC
   Handles terminal diagnostics and secure file extraction.
*/

const diagnosticSteps = [
    "DIAGNOSTIC 01: Is your infrastructure built for absolute sovereignty?",
    "DIAGNOSTIC 02: Do you prioritize clinical logic over aesthetic excess?",
    "DIAGNOSTIC 03: Confirm identity synchronization with miu_33 protocol?"
];

let currentStep = 0;

function startDiagnostic() {
    const content = document.getElementById('terminal-content');
    if (content) {
        currentStep = 0;
        renderStep();
    }
}

function renderStep() {
    const content = document.getElementById('terminal-content');
    const currentQuestion = diagnosticSteps[currentStep];
   
    content.innerHTML = `
        <div class="space-y-4 animate-in fade-in duration-500">
            <p class="text-emerald-neon uppercase tracking-[0.2em] text-[9px] animate-pulse">Analyzing_Protocol...</p>
            <p class="text-white/80 font-mono text-[11px] leading-relaxed">${currentQuestion}</p>
            <div class="flex gap-6 mt-6">
                <button onclick="processChoice()" class="text-emerald-neon hover:text-white text-[10px] uppercase tracking-widest transition-colors">[ AFFIRM ]</button>
                <button onclick="resetTerminal()" class="text-red-500/50 hover:text-red-500 text-[10px] uppercase tracking-widest transition-colors">[ ABORT ]</button>
            </div>
        </div>
    `;
}

function processChoice() {
    currentStep++;
    if (currentStep < diagnosticSteps.length) {
        renderStep();
    } else {
        completeDiagnostic();
    }
}

function completeDiagnostic() {
    const content = document.getElementById('terminal-content');
    content.innerHTML = `
        <div class="space-y-4 animate-in zoom-in-95 duration-500">
            <p class="text-emerald-neon uppercase tracking-widest text-[10px]">DIAGNOSTIC_COMPLETE</p>
            <p class="text-white/60 text-[10px] mb-6">System alignment confirmed. Protocol 33 active.</p>
            
            <div class="flex flex-col gap-3">
                <a href="intel/methodology.pdf" download="MIU_System_Methodology_v3.3" 
                   class="inline-block bg-emerald-neon/10 border border-emerald-neon/50 text-emerald-neon px-6 py-3 hover:bg-emerald-neon hover:text-black transition-all text-center text-[10px] tracking-widest uppercase">
                    [ EXTRACT_METHODOLOGY_PDF ]
                </a>
                <p class="text-[8px] text-white/30 italic">Secure download path: /intel/methodology.pdf</p>
            </div>
        </div>
    `;
}

function resetTerminal() {
    location.reload(); // Hard reset for sovereignty
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}