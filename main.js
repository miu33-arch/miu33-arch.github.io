/* --- MIU_33 MATRIX // CORE ENGINE V1.3 // LENIS + WEBGL + VAPI --- */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LENIS SMOOTH SCROLL (The "Velocity" Feel) ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // --- 2. WEBGL MATRIX RAIN (The "Matrix" Background) ---
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01MIU33架构师";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FF41'; // Emerald Neon
        ctx.font = fontSize + 'px Orbitron';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);


    // --- 3. VAPI VOICE HANDSHAKE ---
    window.vapiStatus = () => {
        const hud = document.getElementById('vapi-status');
        hud.innerText = "VAPI_LINK: ACTIVE // SYNCING_VOICE...";
        
        const msg = new SpeechSynthesisUtterance("Welcome Architect. Miu 33 Matrix is synchronized. System override active.");
        msg.pitch = 0.8;
        msg.rate = 0.9;
        window.speechSynthesis.speak(msg);
        
        setTimeout(() => { hud.innerText = "VAPI_LINK: SECURE // ENCRYPTED"; }, 3000);
    };


    // --- 4. CARBON VELOCITY (Refraction Observer) ---
    const refractionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Shutter Reveal
                target.style.clipPath = 'inset(0 0 0 0)';
                target.style.transform = 'translateY(0)';
                
                // Video Ignition
                const video = target.querySelector('video');
                if (video && video.dataset.src) {
                    video.src = video.dataset.src;
                    video.load();
                }
                refractionObserver.unobserve(target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.dragon-scale').forEach(asset => {
        asset.style.clipPath = 'inset(100% 0 0 0)';
        asset.style.transform = 'translateY(30px)';
        refractionObserver.observe(asset);
    });

});
