/* --- MIU_33 MATRIX // CORE ENGINE V2.2 // POST-BREACH ONLY --- */
/* 
   NOTE: Breach Ritual + Bot Detection are handled inline in index.html.
   This file initializes ENGINES only after #main-matrix is visible.
*/

// 1. MASTER INITIALIZER: Wait for main-matrix to be visible (post-Breach)
function initializePostBreachEngines() {
    // Safety check: only run if main matrix is active
    const mainMatrix = document.getElementById('main-matrix');
    if (!mainMatrix || mainMatrix.style.opacity === '0') {
        // Retry in 100ms if Breach hasn't completed yet
        setTimeout(initializePostBreachEngines, 100);
        return;
    }
    
    // Engines start ONLY after Breach completes
    initializeLenis();
    initializeMatrixRain();
    initializeVideoLazyLoad();
    initializeDragonScaleHover();
}

// Trigger initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // If Breach was skipped (bot) or completed, start engines immediately
    const intro = document.getElementById('intro-sequence');
    if (!intro || intro.style.display === 'none') {
        initializePostBreachEngines();
    } else {
        // Wait for Breach to complete (listen for opacity transition end)
        intro.addEventListener('transitionend', (e) => {
            if (e.propertyName === 'opacity' && intro.style.opacity === '0') {
                initializePostBreachEngines();
            }
        });
    }
});

// --- ENGINE A: LENIS SMOOTH SCROLL (Pillar 14: Clinical Flow) ---
function initializeLenis() {
    // Safety: ensure Lenis library is loaded
    if (typeof Lenis === 'undefined') {
        console.warn('MIU_33: Lenis library not loaded. Skipping smooth scroll.');
        return;
    }
    
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Optional: Pause Lenis during video playback for performance
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', () => lenis.stop());
        video.addEventListener('pause', () => lenis.start());
    });
}

// --- ENGINE B: MATRIX RAIN (Riyadh Gold Sync) ---
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        canvas.style.opacity = '0.1'; // Subtle fallback
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Responsive resize handler
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const characters = "01MIU33架构师ΣΩΔ";
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function drawMatrix() {
        // Fade effect for trailing
        ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#C9A46A'; // Riyadh Gold
        ctx.font = `${fontSize}px Orbitron, monospace`;
        ctx.textAlign = 'start';
        
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
    function animate() {
        drawMatrix();
        requestAnimationFrame(animate);
    }
    animate();
}

// --- ENGINE C: VIDEO LAZY-LOAD (Single Source of Truth) ---
function initializeVideoLazyLoad() {
    if ('IntersectionObserver' in window) {
        const videos = document.querySelectorAll('video[data-src]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    // Only load if not already loaded
                    if (!video.src && video.dataset.src) {
                        video.src = video.dataset.src;
                        video.load();
                        video.play().catch(() => {}); // Silent fail
                    }
                    observer.unobserve(video);
                }
            });
        }, { threshold: 0.1 });
        
        videos.forEach(video => observer.observe(video));
    }
}

// --- ENGINE D: DRAGON-SCALE HOVER EFFECT (Luxury Micro-Interaction) ---
function initializeDragonScaleHover() {
    const cards = document.querySelectorAll('.dragon-scale');    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#C9A46A';
            this.style.boxShadow = '0 0 20px rgba(201, 164, 106, 0.15)';
            this.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            this.style.boxShadow = 'none';
        });
    });
}

// --- ENGINE E: VAPI VOICE HANDSHAKE (Manual Override) ---
function vapiStatus() {
    const hud = document.getElementById('vapi-status');
    if (hud) {
        hud.innerText = "VAPI_LINK: ACTIVE // SYNCING_VOICE...";
        hud.classList.remove('animate-pulse');
        hud.style.color = '#C9A46A';
    }
    
    // Respect user's speech synthesis preferences
    if ('speechSynthesis' in window) {
        // Cancel any pending speech
        window.speechSynthesis.cancel();
        
        const msg = new SpeechSynthesisUtterance("Welcome Architect. Miu 33 Matrix is synchronized.");
        msg.pitch = 0.7; 
        msg.rate = 0.85;
        msg.volume = 0.8;
        
        // Try to use a premium voice if available
        const voices = window.speechSynthesis.getVoices();
        const premiumVoice = voices.find(v => 
            v.name.includes('Premium') || v.name.includes('Neural') || v.lang.startsWith('en-')
        );
        if (premiumVoice) msg.voice = premiumVoice;
        
        window.speechSynthesis.speak(msg);
    }
    
    setTimeout(() => { 
        if (hud) {
            hud.innerText = "VAPI_LINK: SECURE // ENCRYPTED";
            hud.classList.add('animate-pulse');
        }
    }, 3000);
}
// --- UTILITY: Preload voices for VAPI (fixes Chrome voice-loading race condition) ---
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {}; // Trigger voice load
}