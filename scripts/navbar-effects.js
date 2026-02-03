function initNavbar() {
    console.log("Initializing Navbar Effects...");
    const navbar = document.querySelector('.custom-navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Handle active link
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (window.lucide) {
        window.lucide.createIcons();
    } else {
        console.error("Lucide not found!");
    }

    // Scroll Reveal Interaction
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

// Run immediately since script is likely loaded after DOM content
initNavbar();
