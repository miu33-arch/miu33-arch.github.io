const BACKEND_URL = 'https://miu-backend.onrender.com/contact';

async function checkServerStatus() {
    const statusEl = document.getElementById('backend-status');
    try {
        await fetch(BACKEND_URL, { method: 'OPTIONS' });
        statusEl.innerHTML = `<span class="pulse" style="background: var(--terminal);"></span> GATEWAY: ACTIVE`;
        statusEl.style.opacity = "1";
    } catch (err) { statusEl.innerHTML = `<span class="pulse" style="background: red;"></span> GATEWAY: OFFLINE`; }
}
window.addEventListener('load', checkServerStatus);

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.textContent = '> INITIALIZING_TRANSMISSION...';
    const formData = { name: document.getElementById('name').value, email: document.getElementById('email').value, message: document.getElementById('message').value };
    try {
        const res = await fetch(BACKEND_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        if (res.ok) { status.textContent = '> DATA_TRANSMITTED_SUCCESSFULLY.'; document.getElementById('contact-form').reset(); }
        else { status.textContent = '> ERROR: SERVER_REJECTED.'; }
    } catch (err) { status.textContent = '> ERROR: CONNECTION_TIMEOUT.'; }
});
