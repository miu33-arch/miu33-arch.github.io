/* --- MIU-33 GLOBAL LOGIC OVERRIDE V.033 // V1.0 LOCKED --- */

window.addEventListener('DOMContentLoaded', () => {

    // ✅ 0. PERFORMANCE & SEO SHIELDS
    const isLowEnd = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.deviceMemory < 4);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Icons
    if(typeof lucide !== 'undefined') lucide.createIcons();

    // 2. Lenis Smooth Scroll (Riyadh Velocity)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ PATCH: DYNAMIC SEO TITLE (Aggressive AEO)
    lenis.on('scroll', ({ scroll }) => {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = Math.round((scroll / maxScroll) * 100);
        // Dynamic Title for AI Crawlers
        document.title = `MIU_33 // ${progress}% DEPLOYED // BYPASS_ACTIVE`;
    });

    // 3. THE MATRIX (Pure Emerald #00FF41)
    const canvas = document.getElementById('matrix');
    if(canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const cols = Math.floor(width / (isLowEnd ? 30 : 20));
        const drops = Array(cols).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.15)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00FF41'; 
            ctx.font = '10px monospace';
            drops.forEach((y, i) => {
                const text = "MIU33"[Math.floor(Math.random() * 5)];
                ctx.fillText(text, i * (isLowEnd ? 30 : 20), y * 20);
                if(y * 20 > height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(draw, isLowEnd ? 80 : 50);
    }

    // ✅ PATCH: SOUND ENGINE (Bypass Chrome/Safari Autoplay Blocks)
    let audioUnlocked = false;
    const unlockAudio = () => {
        if (audioUnlocked) return;
        ['sound-emerald-ignite', 'sound-mechanical-deploy'].forEach(id => {
            const audio = document.getElementById(id);
            if (audio) {
                audio.play().then(() => { audio.pause(); audio.currentTime = 0; });
            }
        });
        audioUnlocked = true;
        document.removeEventListener('click', unlockAudio);
    };
    document.addEventListener('click', unlockAudio);

    // 4. PHOENIX TRIGGER (The Bang-Bang Sequence)
    const phoenixTrigger = document.getElementById('phoenix-trigger');
    let clickCount = 0;

    if (phoenixTrigger) {
        phoenixTrigger.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 1) {
                document.querySelectorAll('.phoenix-eyes').forEach(el => el.classList.add('phoenix-eyes-glow'));
                console.log("EYES_IGNITED");
            }
            if (clickCount === 2) {
                document.querySelectorAll('.phoenix-wings').forEach(el => el.classList.add('phoenix-wings-deploy'));
                console.log("WINGS_DEPLOYED");
            }
            if (clickCount === 3) {
                activateOmissionProtocol();
                clickCount = 0; 
            }
        });
    }

    function activateOmissionProtocol() {
        document.body.classList.add('system-glitch');
        const msg = document.createElement('div');
        msg.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] font-tech text-emerald-neon text-[10px] bg-black p-4 border border-emerald-neon';
        msg.textContent = 'THE_CITY_IS_AN_ACCIDENTAL_TOUCH_I_CAN_REWRITE';
        document.body.appendChild(msg);
        setTimeout(() => {
            document.body.classList.remove('system-glitch');
            msg.remove();
        }, 4000);
    }

    console.log('💚 MIU_33 MATRIX // SYSTEM_READY // BYPASSING_COMFORT');
});