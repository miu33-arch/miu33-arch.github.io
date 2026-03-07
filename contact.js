const BACKEND_URL = 'https://formspree.io/f/xoqzzpoy';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    
    // Aesthetic Loading State for Proton
    status.textContent = '> INITIALIZING_SECURE_TRANSFER_TO_PROTON_NODE...';

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
            // Success State matching your Digital Architect persona
            status.textContent = '> SUCCESS: ENCRYPTED_PACKET_RECEIVED_BY_MIU_STUDIO.';
            document.getElementById('contact-form').reset();
        } else {
            status.textContent = '> ERROR: PROTOCOL_FAILURE_CHECK_CONNECTION.';
        }
    } catch (err) { 
        status.textContent = '> ERROR: CONNECTION_TIMEOUT_NODE_OFFLINE.';
    }
});
