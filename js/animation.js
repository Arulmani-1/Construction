document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }

  // Vanilla Tilt initialization for glass cards or 3d cards
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }

  // CountUp logic for stats
  const countElements = document.querySelectorAll('.counter-val');
  if (countElements.length > 0 && typeof countUp !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endVal = parseInt(target.getAttribute('data-count'), 10);
          let options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
          };
          let demo = new countUp.CountUp(target, endVal, options);
          if (!demo.error) {
            demo.start();
          } else {
            console.error(demo.error);
          }
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    countElements.forEach(el => observer.observe(el));
  }
});
