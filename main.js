/**
 * MIU_33 // NEXUS_CORE // KINETIC ENGINE v4.0
 * ARCHITECT: MIU LIÁN RUÌ
 */

document.addEventListener('DOMContentLoaded', () => {
    initMatrix();
    initLenis();
    initRiyadhClock();
    initSystemBoot();
});

// MATRIX RAIN: THE CODE PULSE
function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FFFF';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 60);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// LENIS: HIGH-INERTIA SCROLLING
function initLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        orientation: 'vertical'
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// RIYADH TEMPORAL HEARTBEAT
function initRiyadhClock() {
    const clockElement = document.getElementById('riyadh-clock');
    if (!clockElement) return;

    function updateTime() {
        const options = { 
            timeZone: 'Asia/Riyadh', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: false 
        };
        const formatter = new Intl.DateTimeFormat([], options);
        clockElement.textContent = formatter.format(new Date());
    }
    setInterval(updateTime, 1000);
    updateTime();
}

// SYSTEM BOOT SEQUENCE
function initSystemBoot() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const authMsg = document.getElementById('auth-msg');
            if (authMsg) authMsg.classList.remove('opacity-0');
            
            setTimeout(() => {
                const splash = document.getElementById('splash-screen');
                const main = document.getElementById('main-interface');
                if (splash) splash.style.opacity = '0';
                if (main) main.style.opacity = '1';
                
                setTimeout(() => {
                    if (splash) splash.style.display = 'none';
                }, 1000);
            }, 1500);
        }, 2500);
    });
}