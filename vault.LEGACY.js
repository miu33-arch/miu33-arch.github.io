/* --- MIU-33 GLOBAL LOGIC OVERRIDE --- */

window.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Lucide Icons
    if(typeof lucide !== 'undefined') lucide.createIcons();

    // 2. Lenis Smooth Scroll (Optimised for Riyadh Velocity)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Matrix Background (Refined miu-33 Visuals)
    const canvas = document.getElementById('matrix');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const cols = Math.floor(width / 20);
        const drops = Array(cols).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.1)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#3CFF9B';
            ctx.font = '10px monospace';
            drops.forEach((y, i) => {
                // Digital Rain now spells out the Founder's Brand
                const text = "MIU33"[Math.floor(Math.random() * 5)];
                ctx.fillText(text, i * 20, y * 20);
                if(y * 20 > height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(draw, 60);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    // 4. Trilingual Toggle Logic (EN / ZH / AR)
    // Rule: Cycle through languages to show Global Dominance
    window.toggleLang = function() {
        const langs = ['en', 'zh', 'ar'];
        let currentIdx = langs.indexOf(localStorage.getItem('miu_lang') || 'en');
        let nextIdx = (currentIdx + 1) % langs.length;
        let nextLang = langs[nextIdx];

        // System Diagnostic
        console.log(`MIU_33: Switching to ${nextLang.toUpperCase()} protocol...`);
        
        applyLanguage(nextLang);
        localStorage.setItem('miu_lang', nextLang);
    };

    function applyLanguage(lang) {
        document.querySelectorAll('.lang-en, .lang-zh, .lang-ar').forEach(el => {
            el.classList.add('hidden');
        });
        document.querySelectorAll(`.lang-${lang}`).forEach(el => {
            el.classList.remove('hidden');
        });
    }

    // Load Saved Language on Boot-up
    applyLanguage(localStorage.getItem('miu_lang') || 'en');

    // 5. Restricted Chamber: Video Pause on Interaction
    // Pauses surveillance feed when the Admin "locks in" on a target
    const mansionVid = document.getElementById('mansion-vid');
    const scrollContainer = document.getElementById('restricted-scroll');

    if (mansionVid && scrollContainer) {
        const pauseFeed = () => { 
            mansionVid.pause(); 
            console.log("MIU_33: Surveillance Feed Paused.");
        };
        const resumeFeed = () => { mansionVid.play(); };

        scrollContainer.addEventListener('mousedown', pauseFeed);
        scrollContainer.addEventListener('mouseup', resumeFeed);
        scrollContainer.addEventListener('touchstart', pauseFeed, { passive: true });
        scrollContainer.addEventListener('touchend', resumeFeed);
    }

    // 6. Scent Sync: Video Calibration
    // Ensure both Atmosphere videos are synced for the "Soul/Structure" effect
    const atmosphereVids = document.querySelectorAll('.aspect-square video');
    atmosphereVids.forEach(vid => {
        vid.playbackRate = 0.8; // Cinematic Slow-Mo
    });

});