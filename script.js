document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 64,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission handler
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We will get back to you soon.");
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navLinks = nav.querySelectorAll("a");
  const navBrand = nav.querySelector("span");

  // Add transition classes to all nav links at start
  navLinks.forEach((link) => {
    link.classList.add("transition-colors", "duration-300");
  });
  navBrand.classList.add("transition-colors", "duration-300");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const heroSection = document.querySelector("section");
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (currentScroll <= heroSection.offsetTop) {
      // At the top - transparent nav and white text
      nav.classList.remove("bg-purple-600");
      nav.classList.add("bg-transparent");
      navLinks.forEach((link) => {
        link.classList.add("text-white");
      });
      navBrand.classList.remove("text-purple-600");
      navBrand.classList.add("text-white");
    } else {
      // Scrolling past hero - show background and dark text
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-purple-600");
      navLinks.forEach((link) => {
        link.classList.add("text-white", "hover:text-teal-600");
      });
      navBrand.classList.remove("text-white");
      navBrand.classList.add("text-white");
    }
  });

  // Your existing AOS, smooth scroll, and form handler code...
});
