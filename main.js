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

// 2. CORE SYSTEM INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    console.log('💚 NEXUS_CORE // SYSTEM_READY');

    // --- 1. PERFORMANCE & DEVICE CALIBRATION ---
    const isLowEnd = /Android|iPhone|iPad/i.test(navigator.userAgent);
   
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- MATRIX LOGIC ---
    const canvas = document.getElementById('matrix-canvas');
    if (canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        // Mobile-optimized density
        const cols = Math.floor(width / (isLowEnd ? 25 : 20));
        const drops = Array(cols).fill(1);

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
// 6. PORTFOLIO_SCAN_PROTOCOL
document.querySelectorAll('#portfolio-grid div').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        console.log(`INITIATING_DEEP_SCAN: ${imgSrc}`);
        
        // Logic to open a full-screen overlay with a "Scanning" animation
        // This is where we will build the "Architect Overlay" later
    });
});
document.querySelectorAll('#diagnostic-vault button').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerText;
        this.innerText = "EXTRACTING...";
        this.classList.add('animate-pulse');
        
        setTimeout(() => {
            this.innerText = "SUCCESS";
            this.style.background = "#00ff85";
            this.style.color = "black";
            // Logic to actually trigger download goes here
        }, 1500);
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
