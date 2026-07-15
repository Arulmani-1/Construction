// Lenis Smooth Scroll Setup
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with ScrollTrigger if used later
if (typeof ScrollTrigger !== 'undefined') {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0, 0);
}

// Handle Lenis scroll lock for Bootstrap offcanvas
document.addEventListener('DOMContentLoaded', () => {
  const offcanvasElementList = document.querySelectorAll('.offcanvas');
  if (typeof lenis !== 'undefined' && offcanvasElementList.length > 0) {
    offcanvasElementList.forEach(offcanvasEl => {
      offcanvasEl.addEventListener('show.bs.offcanvas', () => {
        lenis.stop();
      });
      offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
        lenis.start();
      });
    });
  }
});
