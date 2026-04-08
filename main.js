/* --- MIU_33 MATRIX // CORE ENGINE V2.4 // PRODUCTION_READY --- */

/**
 * MASTER INITIALIZER
 * Triggered manually by index.html once the Breach Ritual is complete.
 */
function initializePostBreachEngines() {
    const mainMatrix = document.getElementById('main-matrix');
    if (!mainMatrix) return;

    console.log("MIU_33: Initializing Post-Breach Engines...");

    // 1. Force the Hero Video to play immediately (LCP optimization)
    // Hero uses direct src="" in HTML (no data-src lazy-load needed)
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.load(); // Ensure fresh fetch (useful for cached pages)
        heroVideo.play().catch(e => {
            // Autoplay blocked? Fallback: let user interaction trigger it
            console.warn("MIU_33: Hero autoplay blocked. Awaiting user interaction.");
            // Click-to-play fallback (graceful degradation)
            document.addEventListener('click', () => {
                heroVideo.play().catch(() => {});
            }, { once: true });
        });
    }

    // 2. Initialize Core Systems in precise order
    initializeLenis();
    initializeMatrixRain();
    initializeVideoLazyLoad(); // Handles module videos with data-src
    initializeDragonScaleHover();
}

/* --- ENGINE A: LENIS SMOOTH SCROLL (Pillar 14: Clinical Flow) --- */
function initializeLenis() {
    // Safety: ensure Lenis library is loaded
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
    
    function raf(time) {        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Pause Lenis during video playback for performance (prevents jank)
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', () => lenis.stop());
        video.addEventListener('pause', () => lenis.start());
    });
}

/* --- ENGINE B: MATRIX RAIN (Riyadh Gold Sync) --- */
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    // Respect reduced-motion preference (Accessibility/UXO compliance)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        canvas.style.opacity = '0.1'; // Subtle fallback
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Responsive resize handler
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
        // Fade effect for trailing
        ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#C9A46A'; // Riyadh Gold
        ctx.font = `${fontSize}px Orbitron, monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                        // Reset drop randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Use requestAnimationFrame for smoother animation
    function animateMatrix() {
        draw();
        requestAnimationFrame(animateMatrix);
    }
    animateMatrix();
}

/* --- ENGINE C: VIDEO LAZY-LOAD (Module Videos Only) --- */
/* 
   NOTE: Hero video uses direct src="" in HTML.
   This function handles ONLY module videos with data-src attribute.
*/
function initializeVideoLazyLoad() {
    if (!('IntersectionObserver' in window)) return;

    const videos = document.querySelectorAll('video[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                // Only load if not already loaded
                if (!video.src && video.dataset.src) {
                    video.src = video.dataset.src;
                    video.load();
                    video.play().catch(() => {}); // Silent fail if autoplay blocked
                }
                observer.unobserve(video);
            }
        });
    }, { threshold: 0.1 });
    
    videos.forEach(v => observer.observe(v));
}

/* --- ENGINE D: DRAGON-SCALE HOVER (Luxury Micro-Interaction) --- */
function initializeDragonScaleHover() {
    document.querySelectorAll('.dragon-scale').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#C9A46A';
            card.style.boxShadow = '0 0 20px rgba(201, 164, 106, 0.15)';
            card.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
        });
    });
}

// NOTE: vapiStatus() is defined globally in index.html.
// Do NOT redefine here to avoid function overwriting conflicts.