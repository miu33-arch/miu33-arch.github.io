/**
 * OWNER: MIU33_DIGITAL_ARCHITECT // CEN_YAN
 * SYSTEM: NEXUSCORE_v1.33 // MASTER_LOGIC
 * STATUS: SECURE
 */

window.addEventListener('DOMContentLoaded', () => {
    console.log('💚 NEXUS_CORE // SYSTEM_READY // BYPASSING_COMFORT');

    // --- 1. PERFORMANCE & DEVICE CALIBRATION ---
    const isLowEnd = /Android|iPhone|iPad/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 2. THE EMERALD MATRIX (Verified #00FF85) ---
    const canvas = document.getElementById('matrix-canvas');
    if (canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const cols = Math.floor(width / (isLowEnd ? 30 : 20));
        const drops = Array(cols).fill(1);

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.15)'; // Deep Void
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00FF85'; // Nexus Emerald
            ctx.font = '10px monospace';
            
            drops.forEach((y, i) => {
                const text = "MIU33_NEXUS"[Math.floor(Math.random() * 11)];
                ctx.fillText(text, i * (isLowEnd ? 30 : 20), y * 20);
                if (y * 20 > height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(drawMatrix, isLowEnd ? 80 : 50);
    }

    // --- 3. DYNAMIC SEO SHIELD (Aggressive AEO) ---
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        document.title = `MIU33 // ${scrollPercent}% DEPLOYED // NEXUS_CORE`;
    });

    // --- 4. THE PHOENIX TRIGGER (Mechanical Logic) ---
    let clickCount = 0;
    const trigger = document.getElementById('phoenix-trigger') || document.body;

    trigger.addEventListener('dblclick', () => {
        // Double Click for Sovereign Activation
        activateOmissionProtocol();
    });

    function activateOmissionProtocol() {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            z-index: 9999; font-family: 'Orbitron', monospace; color: #00FF85;
            background: #000; padding: 20px; border: 1px solid #00FF85;
            text-transform: uppercase; font-size: 10px; letter-spacing: 0.3em;
            box-shadow: 0 0 20px rgba(0, 255, 133, 0.4);
        `;
        msg.textContent = 'THE_CITY_IS_AN_ACCIDENTAL_TOUCH_I_CAN_REWRITE';
        document.body.appendChild(msg);
        
        document.body.style.filter = "invert(1) hue-rotate(90deg)"; // Temporary Glitch Effect
        
        setTimeout(() => {
            msg.remove();
            document.body.style.filter = "none";
        }, 3000);
    }

    // --- 5. VAPI_VOICE_LINK (Main.js Integration) ---
    window.vapiStatus = function() {
        const hud = document.getElementById('vapi-status');
        if (hud) {
            hud.innerText = "VAPI_LINK: SECURE // MIU_SYNCHRONIZED";
            hud.style.color = '#C9A46A'; // Shift to Gold on activation
        }
    };
});