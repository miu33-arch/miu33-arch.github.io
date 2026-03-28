// Security Logic for miu_Digital Architect
const ACCESS_KEY = "miu2026"; // Or your chosen key like #C9A46A

function validateAccess() {
    const input = prompt("ENTER ACCESS KEY:");
    if (input === ACCESS_KEY) {
        alert("ACCESS GRANTED. INITIALIZING SYSTEM.");
        window.location.href = "studio.html";
    } else {
        alert("ACCESS DENIED. UNAUTHORIZED ENTRY DETECTED.");
    }
}

// Matrix Background Logic
window.addEventListener('DOMContentLoaded', () => {
    console.log("System Ready. miu_Digital Protocol Active.");
    // Add your canvas matrix code here if needed
});