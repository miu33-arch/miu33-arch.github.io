/* --- MIU_33 MATRIX // CORE ENGINE V2.3 // STABILITY PATCH --- */

/**
 * MASTER INITIALIZER
 * Triggered manually by index.html once the Breach Ritual is complete.
 * This prevents "stacking" by ensuring the DOM is visible before engines start.
 */
function initializePostBreachEngines() {
    const mainMatrix = document.getElementById('main-matrix');
    if (!mainMatrix) return;

    console.log("MIU_33: Initializing Post-Breach Engines...");

    // 1. Force the Hero Video to play immediately
    // This bypasses the "Invisible Hero" issue by forcing a manual play command
    const heroVideo = document.querySelector('section video');
    if (heroVideo) {
        if (heroVideo.dataset.src) {
            heroVideo.src = heroVideo.dataset.src;
        }
        heroVideo.load();
        heroVideo.play().catch(e => {
            console.warn("MIU_33: Hero autoplay blocked by browser. Awaiting interaction.");
        });
    }

    // 2. Initialize Core Systems in precise order
    initializeLenis();
    initializeMatrixRain();
    initializeVideoLazyLoad();
    initializeDragonScaleHover();
}

/* --- ENGINE A: LENIS SMOOTH SCROLL --- */
function initializeLenis() {
    if (typeof Lenis === 'undefined') {
        console.warn('MIU_33: Lenis library not detected.');
        return;
    }
    
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

/* --- ENGINE B: MATRIX RAIN --- */
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    
    const characters = "01MIU33架构师ΣΩΔ";
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#C9A46A'; // Riyadh Gold
        ctx.font = `${fontSize}px Orbitron, monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    
    function animateMatrix() {
        draw();
        requestAnimationFrame(animateMatrix);
    }
    animateMatrix();
}

/* --- ENGINE C: VIDEO LAZY-LOAD --- */
function initializeVideoLazyLoad() {
    if (!('IntersectionObserver' in window)) return;

    const videos = document.querySelectorAll('video[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (!video.src && video.dataset.src) {
                    video.src = video.dataset.src;
                    video.load();
                    video.play().catch(() => {});
                }
                observer.unobserve(video);
            }
        });
    }, { threshold: 0.1 });
    
    videos.forEach(v => observer.observe(v));
}

/* --- ENGINE D: DRAGON-SCALE HOVER --- */
function initializeDragonScaleHover() {
    document.querySelectorAll('.dragon-scale').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#C9A46A';
            card.style.boxShadow = '0 0 20px rgba(201, 164, 106, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            card.style.boxShadow = 'none';
        });
    });
}

/* --- ENGINE E: VAPI VOICE --- */
function vapiStatus() {
    const hud = document.getElementById('vapi-status');
    if (!hud) return;

    hud.innerText = "VAPI_LINK: ACTIVE // SYNCING_VOICE...";
    hud.style.color = '#C9A46A';
    
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance("Welcome Architect. Miu 33 Matrix is synchronized.");
        msg.pitch = 0.7; 
        msg.rate = 0.85;
        window.speechSynthesis.speak(msg);
    }
    
    setTimeout(() => { 
        hud.innerText = "VAPI_LINK: SECURE // ENCRYPTED";
    }, 3000);
}
