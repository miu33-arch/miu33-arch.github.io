/* --- MIU_33 MATRIX // CORE ENGINE V2.5 // MOBILE_STABILITY_PATCH --- */

/**
 * MASTER INITIALIZER
 * Triggered manually by index.html once the Breach Ritual is complete.
 */
function initializePostBreachEngines() {
    const mainMatrix = document.getElementById('main-matrix');
    if (!mainMatrix) return;

    console.log("MIU_33: Initializing Post-Breach Engines...");

    // 1. Hero Video: Robust iOS Autoplay Handling
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Force load + play
        heroVideo.load();
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // iOS blocked autoplay? Fallback: play on first touch/click
                console.warn("MIU_33: iOS autoplay blocked. Enabling touch-to-play fallback.");
                const playOnInteraction = () => {
                    heroVideo.play().catch(() => {});
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('click', playOnInteraction);
                };
                document.addEventListener('touchstart', playOnInteraction, { once: true });
                document.addEventListener('click', playOnInteraction, { once: true });
            });
        }
    }

    // 2. Initialize Core Systems
    initializeLenis();
    initializeMatrixRain();
    initializeVideoLazyLoad();
    initializeDragonScaleHover();
}

/* --- ENGINE A: LENIS SMOOTH SCROLL (iOS Optimized) --- */
function initializeLenis() {
    // iOS Safari has superior native momentum scroll. Lenis often causes "stuck" feel.
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
        console.log("MIU_33: iOS detected. Using native scroll for buttery performance.");
        return; // Skip Lenis entirely on iOS
    }

    if (typeof Lenis === 'undefined') { console.warn('MIU_33: Lenis library not detected.');
        return;
    }
    
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false, // Prevents double-scroll friction
        touchMultiplier: 1
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Pause Lenis during video playback for performance
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', () => lenis.stop());
        video.addEventListener('pause', () => lenis.start());
    });
}

/* --- ENGINE B: MATRIX RAIN (Mobile GPU Optimized) --- */
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    // Accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        canvas.style.opacity = '0.1';
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    
    // Mobile performance: reduce density on touch devices
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const fontSize = isMobile ? 8 : 10;
    const resetChance = isMobile ? 0.995 : 0.975; // Fewer active drops on mobile
        const characters = "01MIU33架构师ΣΩΔ";
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#C9A46A';
        ctx.font = `${fontSize}px Orbitron, monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > resetChance) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Throttle to 30fps on mobile to save GPU for scroll/video
    let lastTime = 0;
    const fpsLimit = isMobile ? 30 : 60;
    const frameInterval = 1000 / fpsLimit;
    
    function animateMatrix(time) {
        requestAnimationFrame(animateMatrix);
        if (time - lastTime < frameInterval) return;
        lastTime = time - (time % frameInterval);
        draw();
    }
    requestAnimationFrame(animateMatrix);
}

/* --- ENGINE C: VIDEO LAZY-LOAD (Module Videos Only) --- */
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
        }); }, { threshold: 0.1 });
    videos.forEach(v => observer.observe(v));
}

/* --- ENGINE D: DRAGON-SCALE HOVER --- */
function initializeDragonScaleHover() {
    document.querySelectorAll('.dragon-scale').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#C9A46A';
            card.style.boxShadow = '0 0 20px rgba(201, 164, 106, 0.15)';
            card.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
        });
    });
}
// NOTE: vapiStatus() remains in index.html only.