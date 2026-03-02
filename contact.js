const BACKEND_URL = 'https://miu-backend.onrender.com/contact';
const FORM_STORAGE_KEY = 'miu_contact_draft';

// AUTO-SAVE FUNCTIONALITY
window.addEventListener('load', () => {
    const saved = localStorage.getItem(FORM_STORAGE_KEY);
    if (saved) {
        const draft = JSON.parse(saved);
        document.getElementById('name').value = draft.name || '';
        document.getElementById('email').value = draft.email || '';
        document.getElementById('message').value = draft.message || '';
    }
    ['name', 'email', 'message'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
            const draft = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(draft));
        });
    });
});

// SUBMISSION LOGIC
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.textContent = '> TRANSMITTING...';
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    try {
        const res = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (res.ok) {
            status.textContent = '> DATA_TRANSMITTED.';
            localStorage.removeItem(FORM_STORAGE_KEY);
            document.getElementById('contact-form').reset();
        } else { status.textContent = '> SERVER_REJECTED.'; }
    } catch (err) { status.textContent = '> TIMEOUT. DRAFT_SAVED.'; }
});
