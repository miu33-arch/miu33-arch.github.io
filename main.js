/**
 * OWNER: MIU33_DIGITAL_ARCHITECT // CEN_YAN (岑砚)
 * SYSTEM: NEXUSCORE_v1.33 // MASTER_LOGIC_OVERRIDE
 * STATUS: SECURE // EMERALD_TEAL_SYNC
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
        
        // Mobile-optimized density
        const cols = Math.floor(width / (isLowEnd ? 25 : 20));
        const drops = Array(cols).fill(1);

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.1)'; // Slightly smoother fade
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00FF85'; // Nexus Emerald
            ctx.font = '10px monospace';
           
            drops.forEach((y, i) => {
                const text = "MIU33_NEXUS_CORE"[Math.floor(Math.random() * 15)];
                ctx.fillText(text, i * 20, y * 20);
                if (y * 20 > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        };
        
        // Throttle for Riyadh Mobile Networks
        const matrixSpeed = isLowEnd ? 70 : 50;
        setInterval(drawMatrix, matrixSpeed);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // --- 3. DYNAMIC SEO SHIELD (Aggressive AEO) ---
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        document.title = `MIU33 // ${scrollPercent}% DEPLOYED // NEXUS_CORE`;
        
        // Matrix Visibility Optimization
        if (window.scrollY > 2000) {
            canvas.style.display = 'none'; // Save battery for the user
        } else {
            canvas.style.display = 'block';
        }
    });

    // --- 4. THE PHOENIX TRIGGER (Mechanical Logic) ---
    const trigger = document.querySelector('.hero-title');
    if (trigger) {
        trigger.addEventListener('dblclick', () => {
            activateOmissionProtocol();
        });
    }

    function activateOmissionProtocol() {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            z-index: 9999; font-family: 'Orbitron', monospace; color: #00FF85;
            background: #000; padding: 25px; border: 1px solid #00FF85;
            text-transform: uppercase; font-size: 11px; letter-spacing: 0.4em;
            box-shadow: 0 0 30px rgba(0, 255, 133, 0.5); pointer-events: none;
            text-align: center; line-height: 1.6;
        `;
        msg.innerHTML = 'OMISSION_PROTOCOL_ACTIVE<br><span style="font-size:8px; opacity:0.6;">REWRITING_CITY_LOGIC...</span>';
        document.body.appendChild(msg);
       
        document.body.style.filter = "invert(1) hue-rotate(90deg) brightness(1.2)";
       
        setTimeout(() => {
            msg.remove();
            document.body.style.filter = "none";
        }, 2500);
    }

    // --- 5. REVEAL OBSERVER (Column Logic) ---
    const matrixColumns = document.querySelectorAll('.matrix-column');
    const observerOptions = { threshold: 0.2 };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    matrixColumns.forEach(col => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(30px)';
        col.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        revealObserver.observe(col);
    });
});