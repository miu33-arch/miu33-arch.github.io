/* --- MIU_33 MATRIX // CORE ENGINE V2.6 // MOBILE_SCROLL_RESCUE --- */

function initializePostBreachEngines() {
    const mainMatrix = document.getElementById('main-matrix');
    if (!mainMatrix) return;

    console.log("MIU_33: Initializing Post-Breach Engines...");

    // 1. Hero Video with iOS fallback
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.load();
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.warn("MIU_33: iOS autoplay blocked.");
                const playOnInteraction = () => {
                    heroVideo.play().catch(() => {});
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('click', playOnInteraction);
                };
                document.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
                document.addEventListener('click', playOnInteraction, { once: true, passive: true });
            });
        }
    }

    // 2. Initialize Core Systems
    initializeLenis();
    initializeMatrixRain();
    initializeVideoLazyLoad();
    initializeDragonScaleHover();
    
    // 3. MOBILE RESCUE: Remove canvas on iOS if scroll still blocked
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
        console.log("MIU_33: iOS detected. Canvas set to non-blocking.");
        const canvas = document.getElementById('matrix');
        if (canvas) {
            canvas.style.pointerEvents = 'none';
            canvas.style.userSelect = 'none';
        }
    }
}

/* --- ENGINE A: LENIS (DISABLED ON MOBILE) --- */
function initializeLenis() {
    // Aggressive mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = window.matchMedia('(pointer: coarse)').matches;    
    if (isMobile || isTouch) {
        console.log("MIU_33: Mobile/Touch detected. Using NATIVE scroll (buttery smooth).");
        // Ensure body can scroll natively
        document.body.style.overflowY = 'scroll';
        document.body.style.webkitOverflowScrolling = 'touch';
        return;
    }

    if (typeof Lenis === 'undefined') {
        console.warn('MIU_33: Lenis library not detected.');
        return;
    }
    
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 1,
        infinite: false,
        prevent: (node) => {
            // Prevent Lenis from hijacking video interactions
            if (node.tagName === 'VIDEO') return true;
            return false;
        }
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Pause Lenis during video playback
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', () => lenis.stop());
        video.addEventListener('pause', () => lenis.start());
    });
}

/* --- ENGINE B: MATRIX RAIN (Mobile Disabled) --- */
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    // Accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        canvas.style.opacity = '0.05';
        return; }
    
    // MOBILE: Disable canvas animation on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
        console.log("MIU_33: Touch device detected. Canvas disabled for scroll performance.");
        canvas.style.opacity = '0.05'; // Nearly invisible
        canvas.style.pointerEvents = 'none';
        return;
    }
    
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
        ctx.fillStyle = '#C9A46A';
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
    const videos = document.querySelectorAll('video[data-src]'); const observer = new IntersectionObserver((entries) => {
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