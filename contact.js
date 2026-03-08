const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    status.innerHTML = "Sending...";

    const xhr = new XMLHttpRequest();

    try {
        xhr.open("POST", form.action);
        xhr.send(formData);

        xhr.onload = () => {
            if (xhr.status === 200) {
                status.innerHTML = "Message sent!";
                form.reset();
            } else {
                status.innerHTML = "Failed to send message.";
            }
        };
    } catch (err) {
        status.textContent = "Error occurred.";
    }
});
