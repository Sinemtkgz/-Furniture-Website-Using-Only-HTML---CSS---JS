document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(".cards, .nav-list", { origin: "right" });
  sr.reveal(".content, .logo, .image", { origin: "left" });
  sr.reveal(".cards", { interval: 100 });
});
