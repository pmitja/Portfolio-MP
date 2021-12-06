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
