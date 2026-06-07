// Typing Animation for Hero Section
const text = "VLSI Engineer • Semiconductor Researcher • IEEE Published Author • Associate Member IETE";
let i = 0;

function typingEffect() {
  const typingElement = document.getElementById("typing");
  if (typingElement && i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

// Start typing effect on load
document.addEventListener("DOMContentLoaded", () => {
  typingEffect();
  
  // Trigger initial check for scroll reveal
  revealCards();

  // Mobile Sidebar Menu Logic
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileClose = document.getElementById("mobile-close");
  const navOverlay = document.getElementById("nav-overlay");
  const navLinks = document.getElementById("nav-links");
  const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];

  function openSidebar() {
    if (navLinks && navOverlay) {
      navLinks.classList.add("active");
      navOverlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent background scrolling when sidebar is open
    }
  }

  function closeSidebar() {
    if (navLinks && navOverlay) {
      navLinks.classList.remove("active");
      navOverlay.classList.remove("active");
      document.body.style.overflow = ""; // Re-enable background scrolling
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", openSidebar);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeSidebar);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeSidebar);
  }

  navAnchors.forEach(anchor => {
    anchor.addEventListener("click", closeSidebar);
  });
});


// Reveal Animation on Scroll
const revealElements = document.querySelectorAll(".card-reveal");

function revealCards() {
  revealElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Reveal if element enters viewport
    if (position < windowHeight - 50) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initial setup for reveal elements
revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
});

window.addEventListener("scroll", revealCards);
window.addEventListener("resize", revealCards);
