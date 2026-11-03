
/* ==========================================
   DE'LEGEND TECHNOLOGIES & CREATIVE ENTERPRISE
   Website JavaScript
   Technology. Creativity. Innovation.
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".main-nav");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Update footer year automatically
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Contact form
  // Form submissions are sent directly to Formspree.
  // Do not prevent the default form submission.
  const contactForm = document.querySelector("#enquiryForm");

  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      const submitButton = contactForm.querySelector(
        'button[type="submit"]'
      );

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending enquiry...";
      }
    });
  }

  // Reveal elements when they enter the screen
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  console.log(
    "De'legend Technologies & Creative Enterprise is online!"
  );

});
