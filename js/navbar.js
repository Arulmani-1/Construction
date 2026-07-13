document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('mainNav');
  
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // initial check
  }
});
