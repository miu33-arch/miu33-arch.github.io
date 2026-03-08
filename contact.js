const BACKEND_URL = 'https://formspree.io/f/mvzwzppo';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const status = document.getElementById('status');
        status.textContent = '> INITIALIZING_SECURE_TRANSFER_TO_PROTON_NODE...';

        const formData = new FormData(form);

        try {
            const response = await fetch(BACKEND_URL, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                status.textContent = '> SUCCESS: ENCRYPTED_PACKET_RECEIVED_BY_MIU_STUDIO.';
                form.reset();
            } else {
                status.textContent = '> ERROR: TRANSFER_FAILED. CHECK_FORM_CONNECTION.';
            }
        } catch (err) {
            status.textContent = '> ERROR: NODE_OFFLINE. SYSTEM_TIMEOUT.';
        }
    });
});
