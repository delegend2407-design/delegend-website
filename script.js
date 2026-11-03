
/* ==========================================
   DE'LEGEND TECHNOLOGIES & CREATIVE ENTERPRISE
   Website JavaScript
   Technology. Creativity. Innovation.
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

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
  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
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

  // Contact form handling
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const service = contactForm.querySelector('[name="service"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        alert("Please complete all required fields.");
        return;
      }

      const subject = encodeURIComponent(
        `Website Enquiry - ${service || "General Enquiry"}`
      );

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`
      );

      window.location.href =
        `mailto:delegendtech@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Back to top button
  const backToTop = document.querySelector("#back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 300);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
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

  // Current year and website initialization
  console.log("De'legend Technologies & Creative Enterprise is online!");

});
          
