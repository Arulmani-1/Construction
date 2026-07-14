// Loader Logic using GSAP
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  const loaderBar = document.querySelector('.loader-bar');
  const loaderBrand = document.querySelector('.loader-brand');

  if (loader && loaderBar && loaderBrand) {
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        try {
          // Loader exit animation
          const tl = gsap.timeline();
          tl.to(loaderBar, { width: '100%', duration: 0.2, ease: "power2.inOut" })
            .to(loaderBrand, { y: -20, opacity: 0, duration: 0.4, ease: "power2.in" })
            .to(loaderBar.parentElement, { opacity: 0, duration: 0.3 }, "-=0.2")
            .to(loader, { y: '-100%', duration: 0.8, ease: "expo.inOut" })
            .set(loader, { display: 'none' });
        } catch(e) {
          loader.style.display = 'none';
        }
      }
      try {
        gsap.to(loaderBar, { width: `${progress}%`, duration: 0.2 });
      } catch(e) {
        loaderBar.style.width = `${progress}%`;
      }
    }, 100);
  }
});
