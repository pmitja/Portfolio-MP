/////////////////////////////////////////////
/// Smooth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.hero-section`);
sr.reveal(`.about-section, .my-work-section, .cta-section`, {
  interval: 100,
});
sr.reveal(`.footer`, { origin: "bottom" });
