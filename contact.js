// CONTACT_LOGIC: ENCRYPTED_SIGNAL_TRANSMISSION

document.addEventListener("DOMContentLoaded", () => {
  // Select by class to match your index.html structure
  const form = document.querySelector(".contact-form");
  
  // Create a status element if it doesn't exist in HTML
  let statusEl = document.getElementById("status");
  if (!statusEl && form) {
    statusEl = document.createElement("p");
    statusEl.id = "status";
    statusEl.style.fontSize = "12px";
    statusEl.style.marginTop = "10px";
    form.appendChild(statusEl);
  }

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Narrative feedback
      statusEl.textContent = "> INITIALIZING_SECURE_UPLINK...";
      statusEl.style.color = "#3cff9b";

      const data = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          statusEl.textContent = "> SIGNAL_RECEIVED: Message archived at Riyadh_Node.";
          statusEl.style.color = "#3cff9b";
          statusEl.classList.add("glow");
          form.reset();
          
          // Clear status after 5 seconds
          setTimeout(() => { statusEl.textContent = ""; }, 5000);
        } else {
          statusEl.textContent = "> TRANSMISSION_FAILED: Node rejected packet.";
          statusEl.style.color = "#ff4d4d";
        }
      } catch (err) {
        statusEl.textContent = "> OFFLINE_ERROR: Connection timed out.";
        statusEl.style.color = "#ff4d4d";
      }
    });
  }
});
