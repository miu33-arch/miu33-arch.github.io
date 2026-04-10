/**
 * OWNER: MIU33_DIGITAL_ARCHITECT // CEN_YAN (岑砚)
 * SYSTEM: NEXUSCORE_v1.33 // VAULT_LEGACY_STABILIZATION
 * STATUS: ENCRYPTED // BACKUP_LOGIC
 */

window.addEventListener('DOMContentLoaded', () => {
    console.log('🔒 VAULT_LEGACY // CORE_RECOVERED // MONITORING_HANDSHAKE');

    // --- 1. PERFORMANCE & DEVICE CALIBRATION ---
    const isLowEnd = /Android|iPhone|iPad/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 2. THE EMERALD MATRIX (VAULT VARIANT) ---
    const canvas = document.getElementById('matrix-canvas');
    if (canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        // Slightly denser columns for the Vault aesthetic
        const cols = Math.floor(width / (isLowEnd ? 25 : 15));
        const drops = Array(cols).fill(1);

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.2)'; 
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00FF85'; 
            ctx.font = '9px monospace';
           
            drops.forEach((y, i) => {
                // Legacy sequence includes "VAULT" markers
                const charSet = "MIU33_VAULT_NEXUS_01";
                const text = charSet[Math.floor(Math.random() * charSet.length)];
                ctx.fillText(text, i * (isLowEnd ? 25 : 15), y * 18);
                
                if (y * 18 > height && Math.random() > 0.985) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(drawMatrix, isLowEnd ? 90 : 60);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // --- 3. DYNAMIC VAULT STATUS ---
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        document.title = `VAULT // ${scrollPercent}% DECRYPTED // MIU33`;
    });

    // --- 4. THE PHOENIX TRIGGER (Sovereign Activation) ---
    const trigger = document.getElementById('phoenix-trigger') || document.body;

    trigger.addEventListener('dblclick', () => {
        activateOmissionProtocol();
    });

    function activateOmissionProtocol() {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            z-index: 10000; font-family: 'Orbitron', monospace; color: #00FF85;
            background: #000; padding: 25px; border: 1px solid #00FF85;
            text-transform: uppercase; font-size: 11px; letter-spacing: 0.4em;
            box-shadow: 0 0 40px rgba(0, 255, 133, 0.6); pointer-events: none;
            text-align: center; line-height: 1.5;
        `;
        msg.innerHTML = 'VAULT_PROTOCOL_OVERRIDE<br><span style="font-size:8px; opacity:0.5;">CÉN_YÀN_CONFIRMED</span>';
        document.body.appendChild(msg);
       
        // Mechanical Glitch
        document.body.style.filter = "invert(1) hue-rotate(180deg) contrast(2)";
       
        setTimeout(() => {
            msg.remove();
            document.body.style.filter = "none";
        }, 2500);
    }

    // --- 5. SECURE HUD HANDSHAKE ---
    window.vapiStatus = function() {
        const hud = document.getElementById('vapi-status');
        if (hud) {
            hud.innerText = "VAULT_LINK: SECURE";
            hud.style.color = '#D4AF37'; // DMARC Gold
        }
    };
});
