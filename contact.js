const BACKEND_URL = 'https://formspree.io/f/xoqzzpoy'; 

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.textContent = '> INITIALIZING_SECURE_TRANSFER_TO_PROTON...';

    const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.textContent = '> SUCCESS: ENCRYPTED_DATA_SENT_TO_STUDIO.';
            document.getElementById('contact-form').reset();
        }
    } catch (err) { status.textContent = '> ERROR: CONNECTION_TIMEOUT.'; }
});
