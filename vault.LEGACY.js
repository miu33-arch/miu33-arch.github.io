window.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    // Matrix Background
    const canvas = document.getElementById('matrix');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        const drops = Array(Math.floor(canvas.width/20)).fill(1);
        setInterval(() => {
            ctx.fillStyle = 'rgba(8, 8, 8, 0.1)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#3CFF9B'; ctx.font = '10px monospace';
            drops.forEach((y, i) => {
                ctx.fillText("MIU33"[Math.floor(Math.random()*5)], i*20, y*20);
                if(y*20 > canvas.height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            });
        }, 60);
    }
    // Translation Logic
    window.toggleLang = function() {
        document.querySelectorAll('.lang-en, .lang-zh').forEach(el => el.classList.toggle('hidden-lang'));
    };
});