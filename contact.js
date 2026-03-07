const BACKEND_URL = 'https://formspree.io/f/xoqzzpoy';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    
    // Status update for Riyadh Studio branding
    status.textContent = '> INITIALIZING_SECURE_TRANSMISSION_TO_RIYADH_NODE...';

    const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.textContent = '> SUCCESS: ENCRYPTED_DATA_SENT_TO_STUDIO_ARCHIVE.';
            document.getElementById('contact-form').reset();
        } else {
            status.textContent = '> ERROR: PROTOCOL_FAILURE_CHECK_CONNECTION.';
        }
    } catch (err) { 
        status.textContent = '> ERROR: CONNECTION_TIMEOUT_NODE_OFFLINE.';
    }
});
