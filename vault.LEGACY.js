import Lenis from "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.27/bundled/lenis.min.js";

window.addEventListener('DOMContentLoaded', () => {

    // MATRIX BACKGROUND
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "MIU330101";
    const drops = Array(Math.floor(canvas.width / 20)).fill(1);

    setInterval(() => {
        ctx.fillStyle = 'rgba(8, 8, 8, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#3CFF9B';
        ctx.font = '10px monospace';

        drops.forEach((y, i) => {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 20, y * 20);
            if (y * 20 > canvas.height && Math.random() > 0.98) drops[i] = 0;
            drops[i]++;
        });
    }, 60);

    // LENIS SMOOTH SCROLL
    const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});