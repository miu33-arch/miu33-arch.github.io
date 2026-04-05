// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Animate hamburger to X
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('hidden')) {
      spans[0].style.transform = 'rotate(0)';
      spans[0].style.position = 'relative';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'rotate(0)';
      spans[2].style.position = 'relative';
    } else {
      spans[0].style.transform = 'rotate(45deg)';
      spans[0].style.position = 'absolute';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg)';
      spans[2].style.position = 'absolute';
    }
  });
}

// Language Toggle (Placeholder)
function toggleLang() {
  alert('Language switcher coming soon // EN / ZH / AR');
  // TODO: Implement language switching
}