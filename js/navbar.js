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
    
    // Auth Check
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      const user = JSON.parse(userJson);
      
      const deskContainer = document.querySelector('.navbar-collapse .d-flex.ms-4');
      if (deskContainer) {
        deskContainer.innerHTML = `<span class="text-white me-3 fw-bold">Welcome back, ${user.name}</span>
        <button class="btn btn-outline-light btn-sm" onclick="localStorage.removeItem('currentUser'); window.location.reload();">Logout</button>`;
      }
      
      const loginLinks = document.querySelectorAll('a[href="login.html"]');
      loginLinks.forEach(link => {
         if(link.classList.contains('dropdown-item') || link.classList.contains('nav-link')) {
            link.textContent = 'Logout';
            link.href = '#';
            link.onclick = (e) => {
               e.preventDefault();
               localStorage.removeItem('currentUser');
               window.location.reload();
            };
         }
      });
    }
  }
});
