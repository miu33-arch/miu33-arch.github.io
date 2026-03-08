const form = document.getElementById("contact-form");
const statusEl = document.getElementById("status");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "> SENDING_ENCRYPTED_PACKET...";
    statusEl.style.color = "var(--terminal)";

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        statusEl.textContent = "> PACKET_DELIVERED: Studio has received your message.";
        form.reset();
      } else {
        statusEl.textContent = "> TRANSMISSION_ERROR: Please try again later.";
        statusEl.style.color = "#f55";
      }
    } catch (err) {
      statusEl.textContent = "> NETWORK_ERROR: Check connection and retry.";
      statusEl.style.color = "#f55";
    }
  });
}
