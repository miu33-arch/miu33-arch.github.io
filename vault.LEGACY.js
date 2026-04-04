/* --- MIU-33 GLOBAL LOGIC OVERRIDE V.033 // V1.0 LOCKED --- */

window.addEventListener('DOMContentLoaded', () => {

    // ✅ 0. PERFORMANCE GUARDS (Detect low-end + motion preferences)
    const isLowEnd = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) && 
                     (navigator.deviceMemory < 4 || navigator.hardwareConcurrency < 4);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lucide Icons
    if(typeof lucide !== 'undefined') lucide.createIcons();

    // 2. Lenis Smooth Scroll (Optimised for Riyadh Velocity)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    // --- INTEGRATION: TWO-SHOT BALLISTICS ---
    // Fires emerald tracers on scroll (disabled on low-end/reduced motion)
    if (!isLowEnd && !prefersReducedMotion) {
        let lastScrollPos = 0;
        lenis.on('scroll', ({ scroll }) => {
            const delta = Math.abs(scroll - lastScrollPos);
            if (delta > 50 && Math.random() > 0.8) {
                fireTracer();
            }
            lastScrollPos = scroll;
        });
    }

    function fireTracer() {
        const overlay = document.getElementById('ballistic-overlay');
        if (!overlay) return;

        const tracer = document.createElement('div');
        tracer.className = 'tracer';
        tracer.style.left = Math.random() * 100 + 'vw';
        
        overlay.appendChild(tracer);
        setTimeout(() => tracer.remove(), 1200); // Cleanup after animation
    }

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // ✅ SORO SEO+: Dynamic Meta Updates on Scroll
    lenis.on('scroll', ({ scroll }) => {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = Math.round((scroll / maxScroll) * 100);
        
        // Update document title (SEO signal)
        document.title = `MIU_33 // ${progress}% LOADED // SYSTEM_ACTIVE`;
        
        // Update meta description (SEO signal)
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = `The Miu_33 Matrix // ${progress}% loaded // Phoenix transformation active // System Architect`;
        }
    });

    // 3. Matrix Background (Refined miu-33 Visuals)
    const canvas = document.getElementById('matrix');
    if(canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const cols = Math.floor(width / (isLowEnd ? 40 : 20)); // Reduced density on low-end
        const drops = Array(cols).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.15)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00FF41'; // ✅ FIXED: Pure Emerald (was #3CFF9B)
            ctx.font = '10px monospace';
            drops.forEach((y, i) => {
                const text = "MIU33"[Math.floor(Math.random() * 5)];
                ctx.fillText(text, i * (isLowEnd ? 40 : 20), y * 20);
                if(y * 20 > height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(draw, isLowEnd ? 100 : 60); // Slower animation on low-end

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    // 4. Trilingual Toggle Logic (Global Dominance)
    window.toggleLang = function() {
        const langs = ['en', 'zh', 'ar'];
        let currentIdx = langs.indexOf(localStorage.getItem('miu_lang') || 'en');
        let nextIdx = (currentIdx + 1) % langs.length;
        let nextLang = langs[nextIdx];
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

    applyLanguage(localStorage.getItem('miu_lang') || 'en');

    // 5. Restricted Chamber: Video Control
    const mansionVid = document.getElementById('mansion-vid');
    const scrollContainer = document.getElementById('restricted-scroll');

    if (mansionVid && scrollContainer) {
        scrollContainer.addEventListener('mousedown', () => mansionVid.pause());
        scrollContainer.addEventListener('mouseup', () => mansionVid.play());
    }

    // ✅ 6. PHOENIX TRIGGER: BANG BANG SEQUENCE (V1.0 Core)
    const phoenixTrigger = document.getElementById('phoenix-trigger');
    let phoenixClickCount = 0;

    if (phoenixTrigger) {
        phoenixTrigger.addEventListener('click', () => {
            phoenixClickCount++;
            
            // BANG #1: Eyes ignite
            if (phoenixClickCount === 1) {
                document.querySelectorAll('.phoenix-eyes').forEach(el => el.classList.add('phoenix-eyes-glow'));
                playSound('sound-emerald-ignite');
            }
            
            // BANG #2: Wings deploy
            if (phoenixClickCount === 2) {
                document.querySelectorAll('.phoenix-wings').forEach(el => el.classList.add('phoenix-wings-deploy'));
                playSound('sound-mechanical-deploy');
                console.log('🦅 PHOENIX_PROTOCOL // TRANSFORMATION_COMPLETE');
            }
            
            // OMISSION PROTOCOL: 3 taps (Easter Egg)
            if (phoenixClickCount === 3) {
                activateOmissionProtocol(); phoenixClickCount = 0; // Reset
            }
        });
        
        // Keyboard support for accessibility
        phoenixTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                phoenixTrigger.click();
            }
        });
    }

    // ✅ 7. SOUND ENGINE: Audio Trigger System
    function playSound(elementId) {
        const audio = document.getElementById(elementId);
        if (audio) {
            audio.currentTime = 0;
            audio.volume = 0.3; // Subtle, not overwhelming
            audio.play().catch(e => console.log('🔇 Audio blocked (user interaction required)'));
        }
    }

    // Unlock audio on first user interaction (browser policy)
    let audioUnlocked = false;
    document.addEventListener('click', () => {
        if (!audioUnlocked) {
            ['sound-emerald-ignite', 'sound-mechanical-deploy', 'sound-siren-pulse'].forEach(id => {
                const audio = document.getElementById(id);
                if (audio) {
                    audio.volume = 0.01;
                    audio.play().then(() => {
                        audio.pause();
                        audio.currentTime = 0;
                    }).catch(() => {});
                }
            });
            audioUnlocked = true;
        }
    }, { once: true });

    // ✅ 8. OMISSION PROTOCOL (3-Tap Easter Egg)
    function activateOmissionProtocol() {
        document.body.classList.add('system-glitch');
        showMessage('THE_CITY_IS_AN_ACCIDENTAL_TOUCH_I_CAN_REWRITE');
        
        // Hide decorative elements temporarily
        document.querySelectorAll('.decorative, #matrix').forEach(el => {
            el.style.opacity = '0';
        });        
        setTimeout(() => {
            document.body.classList.remove('system-glitch');
            document.querySelectorAll('.decorative, #matrix').forEach(el => {
                el.style.opacity = '';
            });
        }, 5000);
    }

    function showMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] font-tech text-emerald-neon text-[10px] tracking-[0.3em] uppercase bg-obsidian/90 px-4 py-2 border border-emerald-neon/30 pointer-events-none';
        msg.textContent = text;
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 3000);
    }

    // ✅ 9. EASTER EGG: Konami Code (Secret Developer Console)
    const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateDeveloperConsole();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateDeveloperConsole() {
        document.body.classList.add('system-glitch');
        showMessage('🔓 DEVELOPER_CONSOLE // CLEARANCE_GRANTED');
        setTimeout(() => {
            document.body.classList.remove('system-glitch');
        }, 5000);
    }

    // ✅ 10. CORE WEB VITALS TRACKING (Optional, disabled on low-end)
    if ('PerformanceObserver' in window && !isLowEnd) {
        // Largest Contentful Paint
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lcp = entries[entries.length - 1].startTime;
            console.log(`📊 LCP: ${Math.round(lcp)}ms`);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        // Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) clsValue += entry.value;
            });
            console.log(`📊 CLS: ${clsValue.toFixed(3)}`);
        }).observe({ entryTypes: ['layout-shift'] });
    }

    // ✅ 11. SERVICE WORKER ENHANCEMENT (If not already registered in HTML)
    if ('serviceWorker' in navigator && !isLowEnd) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('💚 SW_REGISTERED // CACHED_REALITY'))
                .catch(err => console.log('⚠️ SW_FAILED // CONNECTION_LOST'));
        });
    }

    // ✅ INIT LOG
    console.log('💚 MIU_33 MATRIX // SYSTEM_ACTIVE // FOUNDER_33 // V1.0 LOCKED');
});