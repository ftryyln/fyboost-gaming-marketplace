document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    fetch('navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Load navbar effects script
            const script = document.createElement('script');
            script.src = 'scripts/navbar-effects.js';
            document.body.appendChild(script);

            // Initialize Lucide Icons after navbar is loaded
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });

    // Load Footer
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Handle Scroll Transitions (for 'reveal' class)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Make it global so dynamic content can be observed
    window.revealObserver = observer;

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
