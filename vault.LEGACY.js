window.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if(typeof lucide !== 'undefined') lucide.createIcons();

    // --- Lenis Smooth Scroll ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Matrix Background (With Resize Fix) ---
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
                ctx.fillText("MIU33"[Math.floor(Math.random()*5)], i*20, y*20);
                if(y*20 > height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            });
        };
        setInterval(draw, 60);

        // Resize Listener
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    // --- Bilingual Toggle (EN/ZH) ---
    window.toggleLang = function() {
        const enElements = document.querySelectorAll('.lang-en');
        const zhElements = document.querySelectorAll('.lang-zh');
        
        enElements.forEach(el => el.classList.toggle('hidden'));
        zhElements.forEach(el => el.classList.toggle('hidden'));
        
        const currentLang = document.body.classList.contains('lang-zh-active') ? 'en' : 'zh';
        document.body.classList.toggle('lang-zh-active');
        localStorage.setItem('miu_lang', currentLang);
    };

    // --- Auto-Load Language Preference ---
    const savedLang = localStorage.getItem('miu_lang');
    if(savedLang === 'zh') {
        document.body.classList.add('lang-zh-active');
        document.querySelectorAll('.lang-en').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.lang-zh').forEach(el => el.classList.remove('hidden'));
    }
});